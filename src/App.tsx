import { useEffect, useState } from 'react';
import { auth, db } from './firebase_config.ts';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import Navbar from './components/Navbar';
import AuthPanel from './components/AuthPanel';
import Products from './components/Products';
import OrderHistory from './components/OrderHistory';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

interface Product {
  id: number;
  name: string;
  description: string;
  emoji: string;
  price: string;
  rating: number;
}

interface CartItem {
  id: number;
  name: string;
  emoji: string;
  price: string;
  quantity: number;
}

interface Order {
  id: string;
  userId: string;
  email: string;
  role: string;
  items: CartItem[];
  createdAt: { seconds?: number; nanoseconds?: number } | null;
}

type UserRole = 'admin' | 'cliente' | null;

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = window.localStorage.getItem('arepa-cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [user, setUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [authMessage, setAuthMessage] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    window.localStorage.setItem('arepa-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        setUserRole(null);
        setOrders([]);
        return;
      }

      const role = await fetchOrCreateUserRole(currentUser);
      setUser(currentUser);
      setUserRole(role);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (user && userRole) {
      loadOrders(user, userRole);
    } else {
      setOrders([]);
    }
  }, [user, userRole]);

  const fetchOrCreateUserRole = async (currentUser: User): Promise<'admin' | 'cliente'> => {
    const userRef = doc(db, 'users', currentUser.uid);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      const data = userSnapshot.data();
      return data.role === 'admin' ? 'admin' : 'cliente';
    }

    const role = currentUser.email?.toLowerCase() === 'admin@arepa.com' ? 'admin' : 'cliente';
    await setDoc(userRef, {
      email: currentUser.email || '',
      role,
    });
    return role;
  };

  const loadOrders = async (currentUser: User, role: UserRole) => {
    const ordersCollection = collection(db, 'orders');
    let ordersQuery;

    if (role === 'admin') {
      ordersQuery = query(ordersCollection, orderBy('createdAt', 'desc'));
    } else {
      ordersQuery = query(
        ordersCollection,
        where('userId', '==', currentUser.uid),
        orderBy('createdAt', 'desc'),
      );
    }

    try {
      const snapshot = await getDocs(ordersQuery);
      const loadedOrders: Order[] = snapshot.docs.map((docItem) => ({
        id: docItem.id,
        ...(docItem.data() as Omit<Order, 'id'>),
      }));
      setOrders(loadedOrders);
    } catch (error) {
      console.error('Error cargando pedidos:', error);
    }
  };

  const saveOrder = async (product: Product) => {
    if (!user) return;

    try {
      await addDoc(collection(db, 'orders'), {
        userId: user.uid,
        email: user.email || '',
        role: userRole || 'cliente',
        items: [
          {
            id: product.id,
            name: product.name,
            emoji: product.emoji,
            price: product.price,
            quantity: 1,
          },
        ],
        createdAt: serverTimestamp(),
      });
      if (user && userRole) {
        loadOrders(user, userRole);
      }
    } catch (error) {
      console.error('Error guardando pedido:', error);
    }
  };

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    if (user) {
      saveOrder(product);
    }
  };

  const login = async (email: string, password: string) => {
    setAuthLoading(true);
    setAuthMessage('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setAuthMessage('Error al iniciar sesión. Revisa tu correo y contraseña.');
    } finally {
      setAuthLoading(false);
    }
  };

  const signup = async (email: string, password: string) => {
    setAuthLoading(true);
    setAuthMessage('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setAuthMessage('Error al registrarte. Intenta de nuevo con un correo válido.');
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = async () => {
    setAuthLoading(true);
    try {
      await signOut(auth);
      setOrders([]);
      setUserRole(null);
    } catch (error) {
      console.error('Error cerrando sesión:', error);
    } finally {
      setAuthLoading(false);
    }
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((sum, item) => sum + parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="w-full">
      <Navbar cartCount={totalItems} />
      <AuthPanel
        userEmail={user?.email ?? null}
        userRole={userRole}
        authLoading={authLoading}
        authMessage={authMessage}
        onLogin={login}
        onSignup={signup}
        onLogout={logout}
      />

      <Hero />

      {cartItems.length > 0 && (
        <section className="bg-gold-50 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Tu carrito</h2>
              <p className="text-gray-600">Tienes {totalItems} producto(s) en el carrito.</p>
            </div>
            <div className="rounded-full bg-white px-4 py-3 border border-gold-100 shadow-sm">
              <span className="font-semibold text-gray-900">Total:</span>{' '}
              <span className="text-gold-600">${totalPrice}</span>
            </div>
          </div>
        </section>
      )}

      <Products addToCart={addToCart} />
      <OrderHistory orders={orders} userRole={userRole} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
