'use client'

import { useEffect, useState } from 'react';

export const GridBackground = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-0">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, #06B6D4 1px, transparent 1px),
                           linear-gradient(to bottom, #06B6D4 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.2,
          transform: 'perspective(500px) rotateX(60deg)',
        }} 
      />
    </div>
  );
};
