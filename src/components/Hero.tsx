export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gold-50 via-white to-corn-50 flex items-center justify-center px-4 pt-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-4">
              Arepas{' '}
              <span className="bg-gradient-to-r from-gold-500 via-gold-600 to-corn-500 bg-clip-text text-transparent">
                Auténticas
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-2">
              Hechas con dedicación y pasión
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Bienvenido a ArepaVibe, donde la tradición ancestral se encuentra con la innovación culinaria. Cada arepa es elaborada con ingredientes premium, garantizando sabores únicos e inolvidables.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('menu')}
              className="btn-primary text-center"
            >
              Ver Menú
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary text-center"
            >
              Hacer Pedido
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-gold-600">100%</p>
              <p className="text-sm text-gray-600">Artesanal</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gold-600">6+</p>
              <p className="text-sm text-gray-600">Sabores</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gold-600">⭐ 4.9</p>
              <p className="text-sm text-gray-600">Puntuación</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Decorative elements */}
            <div className="absolute inset-0 xl:inset-auto xl:w-96 xl:h-96 bg-gradient-to-br from-gold-200 to-corn-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute inset-0 xl:inset-auto xl:w-80 xl:h-80 right-0 bg-gradient-to-br from-gold-100 to-yellow-100 rounded-full opacity-50 blur-2xl"></div>

            {/* Main arepa illustration */}
            <div className="relative z-10 text-center">
              <div className="text-8xl mb-8 animate-bounce">🫓</div>
              <p className="text-2xl font-bold text-gray-800">Sabor Auténtico</p>
              <p className="text-gray-600 mt-2">Tradición en cada bocado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
