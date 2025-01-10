export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

export interface FAQItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: (id: string) => void;
}
