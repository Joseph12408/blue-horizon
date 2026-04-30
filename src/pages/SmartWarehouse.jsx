import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import StatCounter from '../components/StatCounter';
import { Brain, ShieldAlert, ThermometerSnowflake, Settings, Radar } from 'lucide-react';

const SmartWarehouse = () => {
  return (
    <div>
      <PageHero title="Smart Warehouse" breadcrumbs={['Home', 'Services', 'Warehouse']} />

      <SectionWrapper className="bg-navy pt-16 pb-0">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider text-blue-accent mb-6">
            AI-Driven Smart Warehousing
          </h2>
          <p className="text-2xl text-white font-light mb-4">Guaranteed 100% Accuracy</p>
          <p className="text-text-muted leading-relaxed">
            Our next-generation smart warehousing facilities utilize cutting-edge artificial intelligence, robotics, and IoT sensors to provide unparalleled efficiency, security, and climate control for your inventory.
          </p>
        </div>
      </SectionWrapper>

      {/* Technology Strip */}
      <div className="relative py-24 bg-navy-card overflow-hidden border-y border-blue-accent/20">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231e90ff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Brain size={40} />, title: "AI Inventory Management", desc: "Predictive algorithms optimize storage space and accurately forecast fulfillment times." },
              { icon: <ShieldAlert size={40} />, title: "24/7 CCTV & Security", desc: "Biometric access control and continuous AI-monitored surveillance systems." },
              { icon: <ThermometerSnowflake size={40} />, title: "Climate Control", desc: "Precision temperature and humidity regulation for sensitive or perishable goods." },
              { icon: <Settings size={40} />, title: "Automated Sorting", desc: "Robotic picking and sorting systems reduce human error to zero." },
              { icon: <Radar size={40} />, title: "Real-Time Tracking", desc: "Granular visibility into inventory levels via our dedicated client portal." }
            ].map((feature, i) => (
              <div key={i} className="bg-navy p-8 rounded-xl border border-white/5 hover:border-blue-accent/50 hover:shadow-glow transition-all duration-500">
                <div className="text-blue-accent mb-6 animate-pulse">{feature.icon}</div>
                <h3 className="font-display text-2xl uppercase tracking-wider mb-3">{feature.title}</h3>
                <p className="text-text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-navy py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center border-b border-white/10 pb-20 mb-20">
          <StatCounter end={1000000} label="Square Meters of Coverage" />
          <StatCounter end={0} prefix="" suffix="%" label="Margin of Error" />
        </div>

        <div className="text-center">
          <h2 className="font-display text-4xl uppercase tracking-wider mb-6">Upgrade Your Supply Chain</h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">Experience the future of logistics. Partner with Blue Horizon for your warehousing needs.</p>
          <Link to="/contact" className="inline-block bg-blue-accent text-white px-10 py-4 rounded-lg shadow-glow hover:shadow-glow-lg transition-all font-display uppercase tracking-wide text-lg">
            Get In Touch
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default SmartWarehouse;
