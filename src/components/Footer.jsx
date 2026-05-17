import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy-card pt-16 pb-8 border-t border-blue-accent/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="font-display text-2xl tracking-widest flex flex-col mb-6">
            <span className="text-blue-accent font-bold">BLUE HORIZON</span>
            <span className="text-white">CONTAINERS</span>
          </div>
          <p className="text-text-muted text-sm leading-relaxed mb-6">
            Affordable Shipping Containers & Complete Logistics Solutions across the globe. We provide high-quality containers for storage, transport, and custom fabrication.
          </p>
        </div>
        
        <div>
          <h4 className="font-display text-xl uppercase tracking-wider mb-6">Quick Links</h4>
          <ul className="space-y-3 text-text-muted text-sm">
            <li><Link to="/" className="hover:text-blue-accent transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-accent transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-accent transition-colors">Contact</Link></li>
            <li><Link to="/request-a-quote" className="hover:text-blue-accent transition-colors">Request a Quote</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-display text-xl uppercase tracking-wider mb-6">Products</h4>
          <ul className="space-y-3 text-text-muted text-sm">
            <li><Link to="/shop/dry-containers" className="hover:text-blue-accent transition-colors">Dry Containers</Link></li>
            <li><Link to="/shop/refrigerated" className="hover:text-blue-accent transition-colors">Refrigerated Containers</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-display text-xl uppercase tracking-wider mb-6">Contact Us</h4>
          <ul className="space-y-3 text-text-muted text-sm">
            <li><strong>Phone:</strong> <a href="tel:+14195452428" className="hover:text-blue-accent">+1(419) 545-2428</a></li>
            <li><strong>Email:</strong> <a href="mailto:info@bluehorizoncontainerss.com" className="hover:text-blue-accent">info@bluehorizoncontainerss.com</a></li>
            <li><strong>Hours:</strong> Mon - Fri: 8:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-blue-accent/10 pt-8 text-center text-text-muted text-sm">
        <p>&copy; {new Date().getFullYear()} Blue Horizon Containers. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
