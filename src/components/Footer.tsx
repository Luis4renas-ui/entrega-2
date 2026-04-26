import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
                🫓 ArepaVibe
              </span>
            </h3>
            <p className="text-gray-400">
              Arepas artesanales hechas con pasión y los mejores ingredientes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-gold-400 transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-gold-400 transition">
                  Menú
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-400 transition">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-400 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Horario</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <span className="font-medium">Lunes - Viernes:</span>
                <br />
                10:00 AM - 9:00 PM
              </li>
              <li>
                <span className="font-medium">Sábado - Domingo:</span>
                <br />
                11:00 AM - 10:00 PM
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Suscríbete</h4>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gold-500 text-white text-sm"
              />
              <button className="w-full bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded-lg transition text-sm font-medium">
                Suscribir
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 flex items-center gap-2">
              Hecho con <Heart size={16} className="text-red-500" /> en Miami
            </p>
            <p className="text-gray-400 text-sm">
              © {currentYear} ArepaVibe. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
