import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/utils/formatCurrency';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  sku: string;
}

const ProductCard = ({ id, name, price, image, rating, sku }: ProductCardProps) => {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdding(true);
    addItem({ id, name, price, image, sku });
    
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <Link to={`/products/${id}`}>
      <div className="glass-card rounded-xl overflow-hidden group cursor-pointer">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating)
                      ? 'fill-brand-accent text-brand-accent'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-sm text-muted-foreground ml-1">({rating})</span>
            </div>
          </div>
          
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-brand-blue transition-colors">
            {name}
          </h3>
          
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-brand-accent">
              {formatCurrency(price)}
            </span>
            
            <button
              onClick={handleAddToCart}
              className={`p-2 rounded-full bg-brand-accent text-white hover:bg-brand-accent/90 transition-all transform hover:scale-110 ${
                isAdding ? 'animate-scale-in' : ''
              }`}
              aria-label="Add to cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
