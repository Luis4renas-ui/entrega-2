import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

interface CartItem {
  id: number;
  name: string;
  emoji: string;
  price: string;
  quantity: number;
}

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

  useEffect(() => {
    window.localStorage.setItem('arepa-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: { id: number; name: string; price: string; emoji: string }) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((sum, item) => sum + parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="w-full">
      <Navbar cartCount={totalItems} />
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
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
