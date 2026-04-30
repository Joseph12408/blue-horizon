import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, className = '' }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      className={`py-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
