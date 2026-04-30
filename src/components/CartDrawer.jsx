import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev);
    document.addEventListener('toggle-cart', handleToggle);
    return () => document.removeEventListener('toggle-cart', handleToggle);
  }, []);

  const closeCart = () => setIsOpen(false);

  const handleCheckout = () => {
    closeCart();
    navigate('/request-a-quote');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-navy/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-navy-card shadow-glow-lg border-l border-blue-accent/20 z-50 flex flex-col"
          >
            <div className="p-6 border-b border-blue-accent/10 flex justify-between items-center">
              <h2 className="font-display text-3xl uppercase tracking-wider flex items-center space-x-2">
                <ShoppingBag className="text-blue-accent" />
                <span>Your Cart ({cartCount})</span>
              </h2>
              <button onClick={closeCart} className="text-text-muted hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-text-muted space-y-4">
                  <ShoppingBag size={48} className="opacity-20" />
                  <p className="text-lg">Your cart is empty</p>
                  <button 
                    onClick={() => { closeCart(); navigate('/shop/dry-containers'); }}
                    className="text-blue-accent hover:underline mt-2"
                  >
                    Browse Products
                  </button>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex gap-4 items-center bg-navy-light p-4 rounded-xl border border-blue-accent/10 relative group">
                    <img src={item.thumbnail} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm line-clamp-2">{item.name}</h4>
                      <p className="text-blue-accent font-bold mt-1">${item.price}</p>
                      <div className="flex items-center space-x-3 mt-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 rounded bg-navy text-white hover:text-blue-accent flex items-center justify-center border border-white/10">-</button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 rounded bg-navy text-white hover:text-blue-accent flex items-center justify-center border border-white/10">+</button>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-4 right-4 text-text-muted hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-blue-accent/10 bg-navy-light">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-text-muted uppercase tracking-wider text-sm">Subtotal</span>
                  <span className="font-display text-3xl">{cartTotal}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-blue-accent text-white py-4 rounded-lg shadow-glow hover:shadow-glow-lg transition-all font-display uppercase tracking-wider text-lg"
                >
                  Checkout
                </button>
                <p className="text-xs text-center text-text-muted mt-4">
                  Contact us to complete your order via WhatsApp or phone.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
