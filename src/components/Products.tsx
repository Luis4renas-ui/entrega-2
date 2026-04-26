import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Arepa de Carne',
    description: 'Arepa rellena de carne deshilachada tierna, acompañada de queso derretido y aguacate fresco. Sabor clásico inigualable.',
    emoji: '🥩',
    price: '$8.99',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Arepa de Pollo',
    description: 'Pollo desmenuzado sazonado al perfection, mezclado con queso blanco y tomate. Ligera y deliciosa.',
    emoji: '🍗',
    price: '$7.99',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Arepa Mixta',
    description: 'La combinación perfecta: carne, pollo, jamón y queso. Un festín de sabores en un solo bocado.',
    emoji: '🍽️',
    price: '$9.99',
    rating: 5.0,
  },
  {
    id: 4,
    name: 'Arepa de Queso',
    description: 'Queso premium derretido, acompañado de mantequilla derretida. Para los amantes del queso puro y fresco.',
    emoji: '🧀',
    price: '$7.49',
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Arepa Media Tela',
    description: 'Queso de mano freso sobre arepa caliente, envuelto en mantequilla. Textura única y sabor sublime.',
    emoji: '🤤',
    price: '$8.49',
    rating: 4.8,
  },
  {
    id: 6,
    name: 'Arepa Tropical',
    description: 'Combinación especial con jamón, piña caramelizada y queso. Una fusión tropical de sabores únicos.',
    emoji: '🍍',
    price: '$9.49',
    rating: 4.9,
  },
];

export default function Products() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold-600 font-semibold text-lg mb-2">NUESTROS SABORES</p>
          <h2 className="section-title">Menú Artesanal</h2>
          <p className="section-subtitle">
            Seis deliciosas opciones elaboradas con ingredientes frescos y de la más alta calidad
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            ¿Listo para probar nuestras deliciosas arepas?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary inline-block"
          >
            Hacer un Pedido Ahora
          </button>
        </div>
      </div>
    </section>
  );
}
