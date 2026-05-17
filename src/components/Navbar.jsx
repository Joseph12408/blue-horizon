import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  
  const shopRef = useRef(null);
  const servicesRef = useRef(null);
  
  const { cartCount } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shopRef.current && !shopRef.current.contains(event.target)) {
        setShopDropdownOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-navy/90 border-b border-blue-accent/20 top-0 py-4' : 'bg-transparent py-6 top-0 md:top-[37px]'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 z-50">
          <div className="font-display text-2xl tracking-widest flex items-center">
            <span className="text-blue-accent font-bold">BLUE HORIZON</span>
            <span className="text-white ml-2">CONTAINERS</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold tracking-wide uppercase">
          <Link to="/" className="hover:text-blue-accent transition-colors">Home</Link>
          <Link to="/about" className="hover:text-blue-accent transition-colors">About Us</Link>
          
          {/* Shop Dropdown */}
          <div className="relative" ref={shopRef}>
            <button 
              onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
              className="flex items-center space-x-1 hover:text-blue-accent transition-colors"
            >
              <span>Shop</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${shopDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {shopDropdownOpen && (
              <div className="absolute top-full mt-4 w-56 bg-navy-card border border-blue-accent/20 rounded-xl shadow-glow-lg overflow-hidden flex flex-col py-2 animate-fade-in">
                <Link to="/shop/dry-containers" className="px-4 py-2 hover:bg-blue-accent/10 hover:text-blue-accent transition-colors" onClick={() => setShopDropdownOpen(false)}>Dry Containers</Link>
                <Link to="/shop/refrigerated" className="px-4 py-2 hover:bg-blue-accent/10 hover:text-blue-accent transition-colors" onClick={() => setShopDropdownOpen(false)}>Refrigerated Containers</Link>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button 
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="flex items-center space-x-1 hover:text-blue-accent transition-colors"
            >
              <span>Our Services</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesDropdownOpen && (
              <div className="absolute top-full mt-4 w-56 bg-navy-card border border-blue-accent/20 rounded-xl shadow-glow-lg overflow-hidden flex flex-col py-2 animate-fade-in">
                <Link to="/services/transport" className="px-4 py-2 hover:bg-blue-accent/10 hover:text-blue-accent transition-colors" onClick={() => setServicesDropdownOpen(false)}>Transport & Logistics</Link>
                <Link to="/services/container" className="px-4 py-2 hover:bg-blue-accent/10 hover:text-blue-accent transition-colors" onClick={() => setServicesDropdownOpen(false)}>Container Services</Link>
                <Link to="/services/warehouse" className="px-4 py-2 hover:bg-blue-accent/10 hover:text-blue-accent transition-colors" onClick={() => setServicesDropdownOpen(false)}>Smart Warehouse</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-blue-accent transition-colors">Contact</Link>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center space-x-6 z-50">
          <Link to="/request-a-quote" className="bg-blue-accent text-white px-6 py-2 rounded-lg shadow-glow hover:shadow-glow-lg hover:brightness-110 transition-all font-display uppercase tracking-wide text-sm">
            Request a Quote
          </Link>
          <button 
            className="relative hover:text-blue-accent transition-colors"
            onClick={() => document.dispatchEvent(new CustomEvent('toggle-cart'))}
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-navy">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center space-x-4 z-50">
          <button 
            className="relative"
            onClick={() => document.dispatchEvent(new CustomEvent('toggle-cart'))}
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-navy">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-navy z-40 flex flex-col pt-24 px-6 overflow-y-auto">
          <div className="flex flex-col space-y-6 text-xl font-display uppercase tracking-widest">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <div className="flex flex-col space-y-4">
              <span className="text-blue-accent">Shop</span>
              <div className="flex flex-col space-y-4 pl-4 text-base">
                <Link to="/shop/dry-containers" onClick={() => setMobileMenuOpen(false)}>Dry Containers</Link>
                <Link to="/shop/refrigerated" onClick={() => setMobileMenuOpen(false)}>Refrigerated Containers</Link>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <span className="text-blue-accent">Our Services</span>
              <div className="flex flex-col space-y-4 pl-4 text-base">
                <Link to="/services/transport" onClick={() => setMobileMenuOpen(false)}>Transport & Logistics</Link>
                <Link to="/services/container" onClick={() => setMobileMenuOpen(false)}>Container Services</Link>
                <Link to="/services/warehouse" onClick={() => setMobileMenuOpen(false)}>Smart Warehouse</Link>
              </div>
            </div>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link to="/request-a-quote" onClick={() => setMobileMenuOpen(false)} className="text-blue-accent border border-blue-accent/30 p-4 text-center rounded-lg mt-4">
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
