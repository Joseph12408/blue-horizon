import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import { CheckCircle2, Phone } from 'lucide-react';

const RequestQuote = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div>
      <PageHero title="Request a Free Quote" breadcrumbs={['Home', 'Request Quote']} />

      <SectionWrapper className="bg-navy pb-32">
        <div className="max-w-3xl mx-auto">
          <div className="bg-navy-card p-8 md:p-12 rounded-2xl border border-blue-accent/20 shadow-glow-lg relative overflow-hidden">
            
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
              {formStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-6 border border-green-500/30">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="font-display text-4xl text-white mb-4 uppercase tracking-wider">Request Received!</h3>
                  <p className="text-text-muted text-lg mb-8 max-w-md">Thank you for reaching out. One of our container specialists will contact you within 24 hours with a detailed quote.</p>
                  
                  <div className="bg-navy-light px-8 py-6 rounded-xl border border-white/5">
                    <p className="text-sm text-text-muted mb-2">Need immediate assistance?</p>
                    <a href="tel:+14195452428" className="flex items-center justify-center space-x-2 text-blue-accent font-bold text-xl hover:text-white transition-colors">
                      <Phone size={20} />
                      <span>+1 (419) 545-2428</span>
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <div className="text-center mb-10">
                    <p className="text-text-muted text-lg">Fill out the form below and we'll get back to you with pricing and availability.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-text-muted mb-2">Full Name *</label>
                        <input type="text" required className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-accent transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm text-text-muted mb-2">Email Address *</label>
                        <input type="email" required className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-accent transition-colors" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-text-muted mb-2">Phone Number *</label>
                        <input type="tel" required className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-accent transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm text-text-muted mb-2">Company Name (Optional)</label>
                        <input type="text" className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-accent transition-colors" />
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-6 mt-6">
                      <h4 className="font-display text-xl uppercase tracking-wider mb-6">Container Requirements</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm text-text-muted mb-2">Container Type</label>
                          <select className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-accent transition-colors appearance-none">
                            <option>Dry Container</option>
                            <option>Refrigerated Container</option>
                            <option>Custom Modification</option>
                            <option>Not Sure</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm text-text-muted mb-2">Container Size</label>
                          <select className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-accent transition-colors appearance-none">
                            <option>20ft</option>
                            <option>30ft</option>
                            <option>40ft</option>
                            <option>45ft</option>
                            <option>53ft</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm text-text-muted mb-2">Condition</label>
                          <select className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-accent transition-colors appearance-none">
                            <option>New / One Trip</option>
                            <option>Used Cargo-Worthy</option>
                            <option>Refurbished</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm text-text-muted mb-2">Quantity</label>
                          <input type="number" min="1" defaultValue="1" className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-accent transition-colors" />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-6 mt-6">
                      <div className="mb-6">
                        <label className="block text-sm text-text-muted mb-2">Delivery Location (City, Zip Code) *</label>
                        <input type="text" required className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-accent transition-colors" />
                      </div>
                      
                      <div className="mb-8">
                        <label className="block text-sm text-text-muted mb-2">Additional Notes / Modifications needed</label>
                        <textarea rows="4" className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-accent transition-colors"></textarea>
                      </div>

                      <button 
                        type="submit" 
                        disabled={formStatus === 'submitting'}
                        className="w-full bg-blue-accent text-white py-4 rounded-lg shadow-glow hover:shadow-glow-lg transition-all font-display text-xl uppercase tracking-wider disabled:opacity-70 relative overflow-hidden"
                      >
                        {formStatus === 'submitting' ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : 'Submit Quote Request'}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
          
          <div className="text-center mt-8 text-text-muted">
            <p>Or call us directly at <a href="tel:+14195452428" className="text-blue-accent hover:underline">+1 (419) 545-2428</a></p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default RequestQuote;
