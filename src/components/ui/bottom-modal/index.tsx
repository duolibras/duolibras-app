import { AnimatePresence } from 'framer-motion';
import { BottomModalContentProps } from './@types';
import { MotionOverlay } from './components/motion-overlay';
import { BottomModalContent } from './components/bottom-modal-content';

export const BottomModal = ({ isOpen, onClose, title, subtitle, primaryButton, secondaryButton, image }: BottomModalContentProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <MotionOverlay onClose={onClose} />
          <BottomModalContent image={image} title={title} subtitle={subtitle} isOpen={isOpen} onClose={onClose} primaryButton={primaryButton} secondaryButton={secondaryButton} />
        </>
      )}
    </AnimatePresence>
  );
};
