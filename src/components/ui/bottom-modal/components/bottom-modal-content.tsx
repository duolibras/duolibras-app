import { motion } from 'framer-motion';
import { BottomModalContentProps } from '../@types';
import { useBottomSheet } from '../hooks/use-bottom-sheet';
import { Button, BottomSheetModalContent, DragHandle, ImageContainer } from '../components';

export const BottomModalContent = ({ image, title, subtitle, isOpen, onClose, primaryButton, secondaryButton }: BottomModalContentProps) => {
  const { controls, modalRef, handleDrag, handleDragEnd } = useBottomSheet(isOpen, onClose);

  return (
    <motion.div
      ref={modalRef}
      drag="y"
      dragDirectionLock
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={{ top: 0, bottom: 0.2 }}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      animate={controls}
      initial={{ y: '100%' }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className="w-max-lg fixed bottom-0 inset-x-0 z-50 bg-gradient-to-b from-gray-900 to-gray-800 rounded-t-3xl p-6 touch-none"
    >
      <DragHandle />

      <div className="space-y-8">
        {image && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <ImageContainer>{image}</ImageContainer>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <BottomSheetModalContent title={title} subtitle={subtitle} />
        </motion.div>

        <div className="space-y-4 pt-4">
          {primaryButton && (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button {...primaryButton} variant="primary" />
            </motion.div>
          )}

          {secondaryButton && (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button {...secondaryButton} variant="secondary" />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
