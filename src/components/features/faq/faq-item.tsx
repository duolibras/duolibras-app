import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItemProps } from './types';

export const FAQItem = ({ item, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 flex justify-between items-center text-white"
        onClick={() => onToggle(item.id)}
      >
        <span className="text-lg">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-gray-300">
          {item.answer}
        </div>
      )}
    </div>
  );
};
