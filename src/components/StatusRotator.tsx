import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const STATUS_MESSAGES = [
  '🌴 Checking you into HH Goa...',
  '📷 Preparing your selfie...',
  '🪪 Creating your Builder Identity...',
  '✨ Generating your Builder Title...',
  '🏖 Adding tropical magic...',
  '📦 Printing your Builder Pass...',
];

interface StatusRotatorProps {
  currentIndex?: number;
}

export const StatusRotator: React.FC<StatusRotatorProps> = ({ currentIndex }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (currentIndex !== undefined) {
      setIndex(currentIndex % STATUS_MESSAGES.length);
    } else {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
      }, 900);
      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  return (
    <div className="h-10 flex items-center justify-center overflow-hidden my-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.95 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFD81A] border-2 border-[#09562C] rounded-full shadow-goa-sm font-mono text-xs sm:text-sm font-black text-[#09562C] uppercase tracking-wider"
        >
          <span>{STATUS_MESSAGES[index]}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
