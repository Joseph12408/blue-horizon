import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import { Wrench, Hammer, Power, PaintBucket, Search } from 'lucide-react';

const ContainerServices = () => {
  return (
    <div>
      <PageHero title="Container Services" breadcrumbs={['Home', 'Services', 'Container Services']} />

      <SectionWrapper className="bg-navy">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            { icon: <Wrench size={32} />, title: "Repair & Refurbishment", desc: "Structural repairs, rust removal, and floor replacement to extend container lifespan." },
            { icon: <Hammer size={32} />, title: "Custom Fabrication", desc: "Transforming standard containers into site offices, pop-up shops, or modular housing." },
            { icon: <Power size={32} />, title: "Modification", desc: "Adding roll-up doors, windows, HVAC systems, and full electrical fit-outs." },
            { icon: <PaintBucket size={32} />, title: "Painting & Branding", desc: "Custom exterior painting and logo application to match your corporate identity." },
            { icon: <Search size={32} />, title: "Container Inspection", desc: "Comprehensive CSC plating and seaworthiness inspections by certified professionals." }
          ].map((service, i) => (
            <div key={i} className="bg-navy-card p-8 rounded-xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-accent/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-accent/20 transition-colors"></div>
              <div className="relative z-10">
                <div className="text-blue-accent mb-6">{service.icon}</div>
                <h3 className="font-display text-2xl uppercase tracking-wider mb-3">{service.title}</h3>
                <p className="text-text-muted">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-navy-light rounded-2xl p-8 md:p-12 border border-blue-accent/10">
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider text-center mb-12">Our Modification <span className="text-blue-accent">Process</span></h2>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10 transform -translate-y-1/2"></div>
            
            {[
              { step: 1, title: "Consultation", desc: "We discuss your specific needs and timeline." },
              { step: 2, title: "Quote & Design", desc: "Detailed pricing and 3D mockups provided." },
              { step: 3, title: "Fabrication", desc: "Our expert team builds to your exact specs." },
              { step: 4, title: "Delivery", desc: "Final inspection and direct delivery to site." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center w-full md:w-1/4 mb-8 md:mb-0 relative group">
                <div className="w-16 h-16 rounded-full bg-navy border-4 border-blue-accent flex items-center justify-center font-display text-2xl text-white mb-4 shadow-glow group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h4 className="font-bold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-text-muted px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy text-center py-20 border-t border-white/5">
        <h2 className="font-display text-3xl uppercase tracking-wider mb-6">Ready to modify your container?</h2>
        <Link to="/contact" className="inline-block border-2 border-blue-accent text-blue-accent hover:bg-blue-accent hover:text-white px-8 py-3 rounded-lg transition-all font-display uppercase tracking-wide">
          Contact Our Team
        </Link>
      </SectionWrapper>
    </div>
  );
};

export default ContainerServices;
