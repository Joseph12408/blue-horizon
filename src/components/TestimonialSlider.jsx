import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Blue Horizon delivered our 40ft container ahead of schedule. The quality was outstanding.",
    author: "James R.",
    role: "Construction Manager"
  },
  {
    id: 2,
    quote: "Exceptional service from quote to delivery. The team was professional and responsive throughout.",
    author: "Sarah M.",
    role: "Logistics Director"
  },
  {
    id: 3,
    quote: "The refrigerated container was exactly what we needed. Great value and rock-solid build quality.",
    author: "David K.",
    role: "Food Distribution Co."
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto text-center px-6">
      <Quote size={48} className="text-blue-accent/20 mx-auto mb-8" />
      
      <div className="h-48 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <p className="text-xl md:text-2xl font-light italic mb-8 text-white leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </p>
            <div>
              <div className="font-bold text-blue-accent tracking-wider uppercase">
                {testimonials[currentIndex].author}
              </div>
              <div className="text-text-muted text-sm mt-1">
                {testimonials[currentIndex].role}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center space-x-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-accent w-8' 
                : 'bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
