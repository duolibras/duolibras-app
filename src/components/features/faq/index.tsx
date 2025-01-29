"use client"

import { useState } from 'react';
import { FAQProps } from './types';
import { FAQItem } from './faq-item';

export const FAQ = ({ 
  items, 
  title = "FAQ",
  className = "" 
}: FAQProps) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
      <div className={`container mx-auto px-6 py-16 ${className}`} id="faq">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">{title}</h2>
        <div className="space-y-4">
          {items.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openFaqId === item.id}
                onToggle={handleToggle}
              />
          ))}
        </div>
      </div>
  );
};

export default FAQ;
