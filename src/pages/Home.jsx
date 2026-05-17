import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, Clock, ShieldCheck, Headset, ArrowRight, BrainCircuit, Activity, Cpu } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import StatCounter from '../components/StatCounter';
import TestimonialSlider from '../components/TestimonialSlider';
import { Helmet } from 'react-helmet-async';
import StructuredData from '../components/StructuredData';

const Home = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Blue Horizon Containers",
    "image": "https://bluehorizoncontainers.com/wp-content/uploads/2024/09/hero-bg.jpg",
    "url": "https://bluehorizoncontainerss.com",
    "telephone": "+14195452428",
    "email": "info@bluehorizoncontainerss.com",
    "description": "Affordable Shipping Containers & Complete Logistics Solutions across the globe. We provide high-quality containers for storage, transport, and custom fabrication.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Global Headquarters"
    }
  };

  return (
    <div>
      <Helmet>
        <title>Blue Horizon Containers | Shipping Containers for Sale & Logistics</title>
        <meta name="description" content="Buy high-quality new, used, and refurbished shipping containers globally. Complete logistics, transport, and warehousing solutions." />
      </Helmet>
      <StructuredData data={localBusinessSchema} />
      {/* Section 1 — Hero */}
      <section className="relative min-h-screen bg-navy flex items-center justify-center overflow-hidden pt-32 md:pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-accent/20 via-navy to-navy opacity-50"></div>
          <div className="absolute inset-0 bg-[url('https://bluehorizoncontainers.com/wp-content/uploads/2024/09/hero-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-wider text-white mb-6 leading-tight"
          >
            Affordable Shipping<br className="hidden md:block"/> Containers & Complete<br className="hidden md:block"/> Logistics <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-accent to-blue-400">Solutions</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Your trusted partner in global logistics, offering premium new, used, and refurbished shipping containers alongside comprehensive supply chain solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/about" className="border-2 border-blue-accent text-blue-accent hover:bg-blue-accent hover:text-white px-8 py-3 rounded-lg transition-all font-display uppercase tracking-wide w-full sm:w-auto text-center">
              Learn More
            </Link>
            <Link to="/request-a-quote" className="bg-blue-accent text-white px-8 py-3 rounded-lg shadow-glow hover:shadow-glow-lg hover:brightness-110 transition-all font-display uppercase tracking-wide w-full sm:w-auto text-center">
              Get A Quote
            </Link>
          </motion.div>
        </div>


      </section>

      {/* Section 2 — Global Reach */}
      <SectionWrapper className="bg-navy-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-6">
              We Provide Service <span className="text-blue-accent">Across The Globe</span>
            </h2>
            <p className="text-text-muted mb-8 leading-relaxed">
              With decades of experience, Blue Horizon Containers operates a vast network ensuring your cargo reaches its destination safely and efficiently, no matter where it needs to go.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Global Network", "Ocean Freight", "Air Freight", 
                "Road Transport", "Warehousing", "Customs Clearance", 
                "Supply Chain", "Container Sales"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <CheckCircle2 size={18} className="text-blue-accent flex-shrink-0" />
                  <span className="text-white font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-accent/20 blur-3xl rounded-full transform scale-75"></div>
            <img src="https://bluehorizoncontainers.com/wp-content/uploads/2024/09/IMG_0198-300x300.jpeg" alt="Global Shipping" className="relative z-10 rounded-2xl border border-white/10 shadow-2xl w-full object-cover aspect-square" />
          </div>
        </div>
      </SectionWrapper>

      {/* Section 3 — Feature Cards */}
      <SectionWrapper className="bg-navy pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative -top-10 md:-top-20 z-20">
          {[
            { icon: <Clock size={28} />, title: "Fast Service", desc: "Rapid response times and expedited delivery options to keep your operations moving." },
            { icon: <ShieldCheck size={28} />, title: "Safe Depots", desc: "Highly secure, climate-controlled warehousing and storage facilities worldwide." },
            { icon: <Headset size={28} />, title: "24/7 Support", desc: "Round-the-clock customer service dedicated to resolving your logistics challenges." }
          ].map((feature, i) => (
            <div key={i} className="bg-navy-card p-8 rounded-xl border-l-4 border-blue-accent shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent mb-6">
                {feature.icon}
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wider mb-3">{feature.title}</h3>
              <p className="text-text-muted">{feature.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 4 — Stats Bar */}
      <SectionWrapper className="bg-navy-light py-16 border-y border-blue-accent/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <StatCounter end={6000} suffix="+" label="Ocean Freight" />
          <StatCounter end={1000} suffix="+" label="Monthly Container Repairs" />
          <StatCounter end={1000000} label="sqm Smart Warehouses" />
        </div>
      </SectionWrapper>

      {/* Section 6 — Innovation Strips */}
      <div className="flex flex-col">
        {[
          { title: "OPEN INNOVATION", tag: "Collaborative Logistics Solutions", icon: <BrainCircuit size={48} />, bg: "bg-navy" },
          { title: "AI PORT MANAGEMENT", tag: "Automated Tracking & Routing", icon: <Activity size={48} />, bg: "bg-navy-light relative overflow-hidden" },
          { title: "DIGITALIZATION", tag: "Real-time Supply Chain Visibility", icon: <Cpu size={48} />, bg: "bg-navy" }
        ].map((strip, i) => (
          <div key={i} className={`${strip.bg} py-20 border-b border-blue-accent/5 relative group cursor-default overflow-hidden`}>
            {i === 1 && <div className="absolute inset-0 bg-blue-accent/5 translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out"></div>}
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
              <div className="flex items-center space-x-6 mb-6 md:mb-0">
                <div className="text-blue-accent/50 group-hover:text-blue-accent group-hover:scale-110 transition-all duration-500">
                  {strip.icon}
                </div>
                <div>
                  <h3 className="font-display text-4xl md:text-5xl uppercase tracking-wider group-hover:text-blue-accent transition-colors duration-300">{strip.title}</h3>
                  <p className="text-text-muted font-medium mt-1">{strip.tag}</p>
                </div>
              </div>
              <ArrowRight size={32} className="text-blue-accent/0 group-hover:text-blue-accent transition-all duration-500 transform -translate-x-10 group-hover:translate-x-0 hidden md:block" />
            </div>
          </div>
        ))}
      </div>

      {/* Section 7 — About Teaser */}
      <SectionWrapper className="bg-navy-card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-6">
              Leading the Industry in <span className="text-blue-accent">Quality & Reliability</span>
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
              For over three decades, Blue Horizon Containers has set the standard for shipping container quality and logistical excellence. We source only the finest materials and employ rigorous inspection protocols.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Whether you need a single 20ft unit for local storage or a fleet of refrigerated containers for an international cold chain, our expert team is ready to deliver.
            </p>
            <Link to="/shop/dry-containers" className="inline-block bg-blue-accent text-white px-8 py-3 rounded-lg shadow-glow hover:shadow-glow-lg hover:brightness-110 transition-all font-display uppercase tracking-wide">
              See Containers
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://bluehorizoncontainers.com/wp-content/uploads/2024/09/IMG_8245.jpeg" alt="Container Exterior" className="rounded-xl w-full h-48 object-cover shadow-lg transform translate-y-8" />
            <img src="https://bluehorizoncontainers.com/wp-content/uploads/2024/09/IMG_8244.jpeg" alt="Container Interior" className="rounded-xl w-full h-48 object-cover shadow-lg" />
          </div>
        </div>
      </SectionWrapper>

      {/* Section 11 — Testimonials */}
      <SectionWrapper className="bg-navy bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-accent/5 via-navy to-navy">
        <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider text-center mb-16">
          What Our <span className="text-blue-accent">Clients Say</span>
        </h2>
        <TestimonialSlider />
      </SectionWrapper>

      {/* Section 10 — Quote CTA Band */}
      <div className="bg-gradient-to-r from-navy via-navy-light to-navy border-y border-blue-accent/20 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZTkwZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djI2SDI0VjM0SDBWMjRoMjRWMGgxMnYyNGgyNHYxMEgzNnptLTIgMnYyMmg4VjM2aDIydjhIMzR6TTI2IDM2SDRWMjZoMjJ2MTB6bTIgMnYyMmgtOFYzNmgtMjJ2OGgyMnptMC00SDRWMTJoMjJ2MjJ6TTI2IDRWMjZIMTRWNGgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-6">Ready to get started?</h2>
          <p className="text-text-muted mb-10 text-lg">Request a custom quote today and experience the Blue Horizon difference.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => { e.preventDefault(); window.location.href='/request-a-quote'; }}>
            <input type="email" placeholder="Enter your email address" className="bg-navy border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-blue-accent w-full sm:w-96" required />
            <button type="submit" className="bg-blue-accent text-white px-8 py-4 rounded-lg shadow-glow hover:shadow-glow-lg transition-all font-display uppercase tracking-wide whitespace-nowrap">
              Get A Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
