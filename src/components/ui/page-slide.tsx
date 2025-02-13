'use client';

import { motion } from 'framer-motion';

export function PageSlide({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className='h-screen'
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.1, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
