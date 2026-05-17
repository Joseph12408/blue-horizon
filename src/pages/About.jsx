import React from 'react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import StatCounter from '../components/StatCounter';
import { Target, Eye, Shield, Users, Zap, Award } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us | Blue Horizon Containers</title>
        <meta name="description" content="Learn about Blue Horizon Containers. Over 30 years of experience providing high-quality shipping containers and complete supply chain solutions." />
      </Helmet>
      <PageHero title="About Us" breadcrumbs={['Home', 'About Us']} />

      <SectionWrapper className="bg-navy">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl uppercase tracking-wider mb-6">
              Our <span className="text-blue-accent">Story</span>
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Founded over 30 years ago, Blue Horizon Containers began with a simple mission: to provide high-quality, durable shipping containers to businesses worldwide. What started as a small local depot has grown into a global logistics powerhouse.
              </p>
              <p>
                Today, we operate in over 20 major ports globally, offering not just container sales, but comprehensive supply chain solutions including transport, smart warehousing, and custom container fabrication.
              </p>
              <p>
                Our commitment to quality, innovation, and customer satisfaction remains the driving force behind everything we do.
              </p>
            </div>
          </div>
          <div className="relative h-96">
            <img 
              src="https://bluehorizoncontainers.com/wp-content/uploads/2024/09/IMG_0198.jpeg" 
              alt="Container Depot" 
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-glow-lg"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy-light border-y border-blue-accent/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-navy-card p-8 rounded-xl border border-blue-accent/20">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent">
                <Target size={24} />
              </div>
              <h3 className="font-display text-3xl uppercase tracking-wider">Our Mission</h3>
            </div>
            <p className="text-text-muted leading-relaxed">
              To deliver exceptional logistics solutions and premium shipping containers that empower businesses to trade seamlessly across borders, while maintaining the highest standards of integrity and environmental responsibility.
            </p>
          </div>
          <div className="bg-navy-card p-8 rounded-xl border border-blue-accent/20">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent">
                <Eye size={24} />
              </div>
              <h3 className="font-display text-3xl uppercase tracking-wider">Our Vision</h3>
            </div>
            <p className="text-text-muted leading-relaxed">
              To be the world's most trusted partner in container logistics, pioneering smart, sustainable supply chain technologies that redefine industry standards for efficiency and reliability.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl uppercase tracking-wider mb-4">Core <span className="text-blue-accent">Values</span></h2>
          <p className="text-text-muted max-w-2xl mx-auto">The principles that guide our everyday operations and strategic decisions.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Shield size={32} />, title: "Reliability", desc: "Delivering on our promises, every single time." },
            { icon: <Users size={32} />, title: "Customer Focus", desc: "Your success is our success. We partner with you." },
            { icon: <Zap size={32} />, title: "Innovation", desc: "Continuously improving through new technologies." },
            { icon: <Award size={32} />, title: "Quality", desc: "Never compromising on the standard of our products." },
          ].map((val, i) => (
            <div key={i} className="text-center group">
              <div className="w-20 h-20 mx-auto rounded-full bg-navy-light flex items-center justify-center text-blue-accent mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                {val.icon}
              </div>
              <h4 className="font-display text-2xl uppercase tracking-wider mb-3">{val.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy-light border-y border-blue-accent/10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <StatCounter end={30} suffix="+" label="Years Experience" />
          <StatCounter end={500} suffix="+" label="Global Partners" />
          <StatCounter end={99} suffix="%" label="Customer Satisfaction" />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
