import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

interface StampAnimationProps {
  isVisible: boolean;
  text?: string;
}

export const StampAnimation: React.FC<StampAnimationProps> = ({
  isVisible,
  text = 'HH GOA 2026 OFFICIAL PASS',
}) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ scale: 3, opacity: 0, rotate: -25 }}
      animate={{ scale: 1, opacity: 0.95, rotate: -12 }}
      transition={{ type: 'spring', stiffness: 450, damping: 18 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none"
    >
      <div className="px-5 py-2.5 bg-[#FF0F7B] text-white border-4 border-[#09562C] rounded-2xl shadow-goa-lg flex items-center gap-2 font-mono text-xs sm:text-sm font-black tracking-widest uppercase">
        <ShieldCheck className="w-5 h-5 text-[#FFD81A] shrink-0" />
        <span>{text}</span>
      </div>
    </motion.div>
  );
};
