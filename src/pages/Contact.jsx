import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import { Phone, Mail, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import StructuredData from '../components/StructuredData';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1000);
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Blue Horizon Containers",
    "url": "https://bluehorizoncontainerss.com/contact",
    "telephone": "+14195452428",
    "email": "info@bluehorizoncontainerss.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Global Headquarters"
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us | Blue Horizon Containers</title>
        <meta name="description" content="Get in touch with Blue Horizon Containers. Contact our team for shipping containers, logistics, and global transport inquiries." />
      </Helmet>
      <StructuredData data={localBusinessSchema} />
      <PageHero title="Contact Us" breadcrumbs={['Home', 'Contact']} />

      <SectionWrapper className="bg-navy">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Form */}
          <div className="bg-navy-card p-8 rounded-xl border border-blue-accent/20">
            <h2 className="font-display text-3xl uppercase tracking-wider mb-6">Send us a message</h2>
            
            {formStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center h-[400px]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-text-muted">We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-blue-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-text-muted mb-2">Your Name *</label>
                    <input type="text" required className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-text-muted mb-2">Email Address *</label>
                    <input type="email" required className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-accent transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-text-muted mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-text-muted mb-2">Subject *</label>
                  <input type="text" required className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-text-muted mb-2">Message *</label>
                  <textarea required rows="5" className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-accent transition-colors"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="bg-blue-accent text-white px-8 py-4 rounded-lg shadow-glow hover:shadow-glow-lg transition-all font-display uppercase tracking-wide w-full disabled:opacity-70"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-navy-card p-6 rounded-xl border border-white/5 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Phone</h4>
                <a href="tel:+14195452428" className="text-text-muted hover:text-blue-accent transition-colors">+1 (419) 545-2428</a>
              </div>
            </div>

            <div className="bg-navy-card p-6 rounded-xl border border-white/5 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Email</h4>
                <a href="mailto:info@bluehorizoncontainerss.com" className="text-text-muted hover:text-blue-accent transition-colors">info@bluehorizoncontainerss.com</a>
              </div>
            </div>

            <div className="bg-navy-card p-6 rounded-xl border border-white/5 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent flex-shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Business Hours</h4>
                <p className="text-text-muted">Monday - Friday: 8:00 AM - 6:00 PM<br/>Saturday & Sunday: Closed</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-navy-card rounded-xl border border-white/5 h-64 relative overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-[url('https://bluehorizoncontainers.com/wp-content/uploads/2024/09/hero-bg.jpg')] bg-cover bg-center opacity-20 grayscale"></div>
              <div className="absolute inset-0 bg-blue-accent/10 group-hover:bg-blue-accent/20 transition-colors"></div>
              <div className="relative z-10 flex flex-col items-center">
                <MapPin size={48} className="text-blue-accent mb-2" />
                <span className="font-display text-xl uppercase tracking-wider text-white">Global Headquarters</span>
              </div>
            </div>
          </div>

        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;
