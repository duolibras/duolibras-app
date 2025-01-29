import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItemProps } from './types';

export const FAQItem = ({ item, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden">
      <button
        className="w-full px-6 py-4 flex justify-between items-center text-white"
        onClick={() => onToggle(item.id)}
      >
        <span className="text-lg text-gray-600 dark:text-white">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-gray-500 dark:text-white">
          {item.answer}
        </div>
      )}
    </div>
  );
};
