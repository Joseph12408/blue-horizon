import React from 'react';
import { Clock, Mail, Phone } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-navy border-b border-blue-accent/10 py-2 px-6 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-text-muted">
        <div className="flex items-center space-x-2">
          <Clock size={14} className="text-blue-accent" />
          <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
        </div>
        <div className="flex space-x-6">
          <a href="mailto:info@bluehorizoncontainerss.com" className="flex items-center space-x-2 hover:text-blue-accent transition-colors">
            <Mail size={14} className="text-blue-accent" />
            <span>info@bluehorizoncontainerss.com</span>
          </a>
          <a href="tel:+14195452428" className="flex items-center space-x-2 hover:text-blue-accent transition-colors">
            <Phone size={14} className="text-blue-accent" />
            <span>+1 (419) 545-2428</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
