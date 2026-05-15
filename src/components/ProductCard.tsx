import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  emoji: string;
  price: string;
  rating: number;
  addToCart: (product: {
    id: number;
    name: string;
    description: string;
    emoji: string;
    price: string;
    rating: number;
  }) => void;
}

export default function ProductCard({
  id,
  name,
  description,
  emoji,
  price,
  rating,
  addToCart,
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 border border-gold-100">
      {/* Image/Emoji Section */}
      <div className="bg-gradient-to-br from-gold-50 to-corn-100 aspect-square flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-gold-200 to-corn-200"></div>
        <span className="text-8xl z-10 group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex text-gold-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{i < Math.floor(rating) ? '★' : '☆'}</span>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">({rating})</span>
        </div>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gold-600">{price}</span>
          <button
            onClick={() => addToCart({ id, name, description, emoji, price, rating })}
            className="btn-primary flex items-center gap-2 !px-4 !py-2"
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Ordenar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
