import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageHero = ({ title, breadcrumbs = [] }) => {
  return (
    <div className="relative bg-navy-light pt-32 pb-16 overflow-hidden border-b border-blue-accent/10">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1e90ff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h1 className="font-display text-5xl md:text-6xl uppercase tracking-wider text-white mb-6">
          {title}
        </h1>
        
        {breadcrumbs.length > 0 && (
          <div className="flex items-center justify-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <ChevronRight size={14} className="text-blue-accent" />}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-white">{crumb}</span>
                ) : (
                  <Link to="/" className="text-text-muted hover:text-blue-accent transition-colors">
                    {crumb}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHero;
