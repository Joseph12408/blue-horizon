import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    document.dispatchEvent(new CustomEvent('toggle-cart'));
  };

  return (
    <Link to={`/product/${product.id}`} className="group block h-full">
      <div className="bg-navy-card rounded-xl overflow-hidden border border-blue-accent/20 h-full flex flex-col transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-glow-lg">
        <div className="relative aspect-square overflow-hidden bg-white/5">
          <img 
            src={product.thumbnail} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {product.badge && (
            <div className="absolute top-4 left-4 bg-blue-accent/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              {product.badge}
            </div>
          )}
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-3">
            <span className="text-xs text-blue-accent font-semibold uppercase tracking-wider bg-blue-accent/10 px-2 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          
          <h3 className="font-display text-2xl text-white mb-2 line-clamp-2 flex-grow">
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
            <span className="text-2xl font-bold text-blue-accent">${product.price.toLocaleString()}</span>
            <button 
              onClick={handleAddToCart}
              className="w-10 h-10 rounded-full bg-blue-accent/10 text-blue-accent flex items-center justify-center group-hover:bg-blue-accent group-hover:text-white group-hover:shadow-glow transition-all duration-300"
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
