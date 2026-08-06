import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { primaryButtonVariants } from '../motion/buttonVariants';

interface CTAButtonProps {
  onClick: () => void;
  label?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  onClick,
  label = '🌴 Start Check-In',
}) => {
  return (
    <motion.button
      variants={primaryButtonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      className="group relative inline-flex items-center justify-center gap-2.5 h-14 px-8 sm:px-10 rounded-full bg-[#09562C] text-[#F7F0DD] font-sans font-black text-base sm:text-lg tracking-wide border-2 border-[#09562C] shadow-goa hover:bg-[#FF0F7B] hover:text-white hover:border-[#09562C] active:scale-[0.98] transition-all duration-200 cursor-pointer"
    >
      <span className="truncate">{label}</span>
      <ArrowRight className="w-5 h-5 text-[#FFD81A] group-hover:text-white transition-transform group-hover:translate-x-1 shrink-0" />
    </motion.button>
  );
};
