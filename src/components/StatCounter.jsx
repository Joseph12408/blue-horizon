import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const StatCounter = ({ end, label, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;
      const duration = 2000; // 2 seconds

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        
        // Easing function: easeOutExpo
        const percentage = progress / duration;
        const easeOutPercentage = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
        
        if (progress < duration) {
          setCount(Math.floor(end * easeOutPercentage));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl md:text-6xl text-blue-accent font-bold mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-text-muted font-medium uppercase tracking-wider text-sm">
        {label}
      </div>
    </div>
  );
};

export default StatCounter;
