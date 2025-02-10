import { useEffect, useRef } from 'react';
import { useAnimation, PanInfo } from 'framer-motion';

export const useBottomSheet = (isOpen: boolean, onClose: () => void) => {
  const controls = useAnimation();
  const modalRef = useRef<HTMLDivElement>(null);
  const modalHeight = useRef(400);

  useEffect(() => {
    const updateHeight = () => {
      if (modalRef.current) {
        modalHeight.current = modalRef.current.offsetHeight;
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      controls.start({ y: 0 });
      updateHeight();
      window.addEventListener('resize', updateHeight);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('resize', updateHeight);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, controls]);

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y > 0) {
      controls.set({ y: info.offset.y });
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const closeThreshold = modalHeight.current * 0.25;
    const velocityThreshold = 500;

    if (info.offset.y > closeThreshold || info.velocity.y > velocityThreshold) {
      onClose();
    } else {
      controls.start({ y: 0, transition: { type: 'spring', damping: 25 } });
    }
  };

  return { controls, modalRef, handleDrag, handleDragEnd };
};
