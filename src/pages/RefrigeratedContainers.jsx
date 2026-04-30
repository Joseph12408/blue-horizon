import React, { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ProductCard from '../components/ProductCard';
import SectionWrapper from '../components/SectionWrapper';
import { products } from '../data/products';
import { Filter, ChevronDown } from 'lucide-react';

const RefrigeratedContainers = () => {
  const [sortOrder, setSortOrder] = useState('default');
  const [maxPrice, setMaxPrice] = useState(5000);
  const [showFilters, setShowFilters] = useState(false);

  const refProducts = useMemo(() => {
    let filtered = products.filter(p => p.categorySlug === 'refrigerated-containers' && p.price <= maxPrice);
    
    if (sortOrder === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    }
    return filtered;
  }, [maxPrice, sortOrder]);

  return (
    <div>
      <PageHero title="Refrigerated Containers" breadcrumbs={['Home', 'Shop', 'Refrigerated Containers']} />

      <SectionWrapper className="bg-navy py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <button 
            className="lg:hidden flex items-center justify-between bg-navy-card p-4 rounded-xl border border-white/10"
            onClick={() => setShowFilters(!showFilters)}
          >
            <span className="font-display uppercase tracking-wider flex items-center gap-2"><Filter size={18} /> Filters</span>
            <ChevronDown size={18} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          <div className={`w-full lg:w-1/4 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-navy-card rounded-xl border border-blue-accent/20 p-6 sticky top-24">
              
              <div className="mb-8">
                <h3 className="font-display text-xl uppercase tracking-wider border-b border-white/10 pb-3 mb-4">Categories</h3>
                <div className="space-y-3 flex flex-col">
                  <NavLink to="/shop/dry-containers" className={({isActive}) => `transition-colors ${isActive ? 'text-blue-accent font-semibold' : 'text-text-muted hover:text-white'}`}>
                    Dry Containers
                  </NavLink>
                  <NavLink to="/shop/refrigerated" className={({isActive}) => `transition-colors ${isActive ? 'text-blue-accent font-semibold' : 'text-text-muted hover:text-white'}`}>
                    Refrigerated Containers
                  </NavLink>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-display text-xl uppercase tracking-wider border-b border-white/10 pb-3 mb-4">Max Price: ${maxPrice}</h3>
                <input 
                  type="range" 
                  min="0" 
                  max="5000" 
                  step="100" 
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-blue-accent"
                />
              </div>

            </div>
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <span className="text-text-muted">Showing {refProducts.length} results</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-muted uppercase">Sort by:</span>
                <select 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="bg-navy border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-accent text-sm"
                >
                  <option value="default">Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            {refProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {refProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-navy-light rounded-xl p-12 text-center border border-white/5">
                <p className="text-text-muted text-lg">No products found matching your criteria.</p>
                <button 
                  onClick={() => { setMaxPrice(5000); setSortOrder('default'); }}
                  className="mt-4 text-blue-accent hover:underline"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </SectionWrapper>
    </div>
  );
};

export default RefrigeratedContainers;
