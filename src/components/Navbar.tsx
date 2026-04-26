import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <span className="text-3xl font-bold bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">
              🫓 ArepaVibe
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-gold-600 font-medium transition"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-gold-600 font-medium transition"
            >
              Menú
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-gold-600 font-medium transition"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-gold-600 font-medium transition"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-gold-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gold-100">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gold-50"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gold-50"
            >
              Menú
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gold-50"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gold-50"
            >
              Contacto
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
