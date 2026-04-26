export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gold-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-gold-600 font-semibold text-lg mb-2">NUESTRA HISTORIA</p>
            <h2 className="section-title">Sobre ArepaVibe</h2>

            <div className="space-y-4 text-gray-700">
              <p>
                Nació en el corazón de la tradición culinaria con una misión simple: llevar el auténtico sabor de las arepas a cada mesa. Fundada en 2020 por Maria Rodríguez, ArepaVibe combina recetas ancestrales con técnicas modernas de preparación.
              </p>

              <p>
                Cada arepa es un tributo a nuestra herencia. Utilizamos harinas premium, ingredientes frescos seleccionados diariamente y el amor por la cocina tradicional. Nuestro equipo está comprometido con la excelencia en cada preparación.
              </p>

              <p>
                Hoy, ArepaVibe se ha convertido en el lugar favorito de cientos de clientes que valoran la autenticidad, la calidad y la dedicación artesanal. Nos enorgullece servir a nuestra comunidad con un producto que representa nuestro compromiso con la excelencia.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <p className="text-3xl font-bold text-gold-600">500+</p>
                <p className="text-sm text-gray-600 mt-1">Clientes Felices</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <p className="text-3xl font-bold text-gold-600">6</p>
                <p className="text-sm text-gray-600 mt-1">Sabores Únicos</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <p className="text-3xl font-bold text-gold-600">365</p>
                <p className="text-sm text-gray-600 mt-1">Días Año</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-96">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-300 to-corn-300 rounded-2xl opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-200 to-yellow-100 rounded-2xl opacity-30"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
                <p className="text-6xl mb-4">👨‍🍳</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pasión por la Tradición</h3>
                <p className="text-gray-700">
                  Recetas ancestrales perfeccionadas con dedicación y amor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
