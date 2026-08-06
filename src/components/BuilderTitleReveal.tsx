import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Trophy, Flame } from 'lucide-react';

interface BuilderTitleRevealProps {
  title: string;
  isVisible: boolean;
}

export const BuilderTitleReveal: React.FC<BuilderTitleRevealProps> = ({
  title,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="w-full max-w-md mx-auto my-3 text-center z-20 relative"
    >
      <div className="bg-[#FFD81A] border-4 border-[#09562C] rounded-3xl p-4 sm:p-5 shadow-goa-lg relative overflow-hidden text-[#09562C]">
        {/* Background decorative shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse pointer-events-none" />

        <div className="flex items-center justify-center gap-1.5 font-mono text-xs font-black uppercase tracking-widest text-[#0E6D38] mb-1">
          <Sparkles className="w-4 h-4 text-[#FF0F7B] animate-spin" />
          <span>YOUR OFFICIAL BUILDER TITLE</span>
          <Sparkles className="w-4 h-4 text-[#FF0F7B] animate-spin" />
        </div>

        {/* Big Bold Title */}
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="font-serif text-2xl sm:text-4xl font-black text-[#09562C] tracking-tight leading-none my-1 drop-shadow-xs flex items-center justify-center gap-2"
        >
          <span className="text-2xl">⚡</span>
          <span>{title}</span>
          <span className="text-2xl">🌴</span>
        </motion.div>

        <p className="font-mono text-[11px] font-bold text-[#09562C]/80 mt-1">
          Unlocked & Printed on your HH Goa Pass
        </p>
      </div>
    </motion.div>
  );
};
