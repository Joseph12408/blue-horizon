import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import StatCounter from '../components/StatCounter';
import { Truck, Ship, Plane, Box, AlertTriangle, Map } from 'lucide-react';

const TransportLogistics = () => {
  return (
    <div>
      <PageHero title="Transport & Logistics" breadcrumbs={['Home', 'Services', 'Transport']} />

      <SectionWrapper className="bg-navy">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-text-muted leading-relaxed">
            Blue Horizon Containers offers a seamless, end-to-end global logistics network. We leverage advanced tracking, strategic partnerships, and a vast fleet to ensure your cargo arrives on time, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Truck size={32} />, title: "Road Freight", desc: "Reliable overland transport with our modern fleet of trucks, suitable for all container sizes." },
            { icon: <Ship size={32} />, title: "Sea Freight", desc: "Cost-effective ocean transit solutions connecting major global ports." },
            { icon: <Plane size={32} />, title: "Air Freight Coordination", desc: "Expedited air cargo services for time-critical and high-value shipments." },
            { icon: <Box size={32} />, title: "Last-Mile Delivery", desc: "Precision delivery right to your facility, including crane-offloading services." },
            { icon: <AlertTriangle size={32} />, title: "Emergency Transport", desc: "24/7 rapid response logistics for urgent or disrupted supply chains." },
            { icon: <Map size={32} />, title: "Container Tracking", desc: "Real-time visibility into your shipment's location and status." }
          ].map((service, i) => (
            <div key={i} className="bg-navy-card p-8 rounded-xl border border-white/5 hover:border-blue-accent/30 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent mb-6 group-hover:bg-blue-accent group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wider mb-3">{service.title}</h3>
              <p className="text-text-muted leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy-light border-y border-blue-accent/10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <StatCounter end={50} suffix="+" label="Countries Served" />
          <StatCounter end={98} suffix="%" label="On-Time Delivery" />
          <StatCounter end={24} suffix="/7" label="Active Tracking" />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy text-center py-24">
        <h2 className="font-display text-4xl uppercase tracking-wider mb-6">Need a custom logistics solution?</h2>
        <p className="text-text-muted mb-8 max-w-2xl mx-auto">Contact our logistics experts today to discuss your specific routing, timeline, and cargo requirements.</p>
        <Link to="/request-a-quote" className="inline-block bg-blue-accent text-white px-8 py-4 rounded-lg shadow-glow hover:shadow-glow-lg transition-all font-display uppercase tracking-wide">
          Request a Logistics Quote
        </Link>
      </SectionWrapper>
    </div>
  );
};

export default TransportLogistics;
