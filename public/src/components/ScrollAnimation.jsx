import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ScrollAnimation({ children, delay = 0 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        y: 50,
        rotateX: 30,
        scale: 0.9
      }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 50,
        rotateX: inView ? 0 : 30,
        scale: inView ? 1 : 0.9
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut"
      }}
      style={{
        perspective: "1000px"
      }}
    >
      {children}
    </motion.div>
  );
}