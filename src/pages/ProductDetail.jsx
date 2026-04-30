import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, ShieldCheck, Droplet, Star } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);
  
  const [selectedImage, setSelectedImage] = useState(product?.images[0] || '');
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
      setQty(1);
      setActiveTab('description');
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-navy text-center px-6">
        <h1 className="font-display text-6xl text-white mb-4">404</h1>
        <p className="text-xl text-text-muted mb-8">Product not found.</p>
        <button onClick={() => navigate('/shop/dry-containers')} className="bg-blue-accent text-white px-8 py-3 rounded-lg shadow-glow font-display uppercase tracking-wide">
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }
    document.dispatchEvent(new CustomEvent('toggle-cart'));
  };

  const relatedProducts = products
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  return (
    <div>
      <PageHero title={product.name} breadcrumbs={['Home', 'Shop', product.category, product.name]} />

      <SectionWrapper className="bg-navy py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Images */}
          <div className="flex flex-col space-y-4">
            <div className="aspect-square bg-navy-card rounded-2xl border border-white/10 overflow-hidden relative group">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={selectedImage} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.images.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${selectedImage === img ? 'border-blue-accent scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="text-xs text-blue-accent font-semibold uppercase tracking-wider bg-blue-accent/10 px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl uppercase tracking-wider text-white mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-blue-accent">${product.price.toLocaleString()}</span>
              {product.badge && (
                <span className="bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded border border-green-500/30">
                  {product.badge}
                </span>
              )}
            </div>
            
            <p className="text-text-muted leading-relaxed mb-8 text-lg">
              {product.description}
            </p>

            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center border border-white/20 rounded-lg bg-navy-card h-14">
                <button 
                  onClick={() => setQty(Math.max(1, qty - 1))} 
                  className="px-4 text-xl hover:text-blue-accent transition-colors h-full flex items-center"
                >-</button>
                <span className="w-10 text-center font-bold">{qty}</span>
                <button 
                  onClick={() => setQty(qty + 1)} 
                  className="px-4 text-xl hover:text-blue-accent transition-colors h-full flex items-center"
                >+</button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-blue-accent text-white h-14 rounded-lg shadow-glow hover:shadow-glow-lg hover:brightness-110 transition-all font-display uppercase tracking-wide text-lg"
              >
                Add To Cart
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 text-sm text-text-muted bg-navy-light p-3 rounded-lg">
                <ShieldCheck className="text-blue-accent" size={20} />
                <span>{product.warranty}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-text-muted bg-navy-light p-3 rounded-lg">
                <Droplet className="text-blue-accent" size={20} />
                <span>Leakproof Guarantee</span>
              </div>
            </div>

            <div className="bg-navy-card border border-blue-accent/20 p-6 rounded-xl flex items-start space-x-4">
              <Truck className="text-blue-accent flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-white mb-1">Delivery Information</h4>
                <p className="text-sm text-text-muted">{product.delivery}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-20">
          <div className="flex border-b border-white/10 mb-8 overflow-x-auto">
            {['description', 'reviews'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 font-display uppercase tracking-wider text-lg transition-colors whitespace-nowrap ${activeTab === tab ? 'text-blue-accent border-b-2 border-blue-accent' : 'text-text-muted hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="min-h-[200px]">
            {activeTab === 'description' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Specifications</h3>
                  <ul className="list-disc pl-5 space-y-2 text-text-muted">
                    {product.specs.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === 'reviews' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="bg-navy-card p-8 rounded-xl border border-white/5 text-center mb-8">
                  <Star className="text-blue-accent/30 mx-auto mb-4" size={48} />
                  <p className="text-text-muted text-lg">There are no reviews yet.</p>
                </div>

                <div className="max-w-2xl">
                  <h3 className="text-xl font-bold mb-6">Be the first to review "{product.name}"</h3>
                  <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-sm text-text-muted mr-2">Your rating:</span>
                      {[1,2,3,4,5].map(star => (
                        <Star key={star} size={20} className="text-gray-600 hover:text-gold cursor-pointer transition-colors" />
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="Name" className="bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-accent w-full" required />
                      <input type="email" placeholder="Email" className="bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-accent w-full" required />
                    </div>
                    <textarea placeholder="Your review" rows="4" className="bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-accent w-full" required></textarea>
                    <button type="submit" className="bg-blue-accent text-white px-8 py-3 rounded-lg font-display uppercase tracking-wide hover:brightness-110 transition-all">Submit Review</button>
                  </form>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-display text-3xl uppercase tracking-wider mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </SectionWrapper>
    </div>
  );
};

export default ProductDetail;
