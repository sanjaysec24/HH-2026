import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sun, CheckCircle2, PartyPopper } from 'lucide-react';

export const SuccessHeader: React.FC = () => {
  return (
    <div className="text-center max-w-xl mx-auto px-4 my-2 sm:my-3 relative z-20">
      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD81A] border-2 border-[#09562C] shadow-goa-sm mb-2"
      >
        <CheckCircle2 className="w-4 h-4 text-[#09562C]" />
        <span className="font-mono text-xs font-black text-[#09562C] uppercase tracking-wider">
          OFFICIAL CHECK-IN COMPLETE
        </span>
        <Sparkles className="w-4 h-4 text-[#FF0F7B]" />
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-serif text-3xl sm:text-5xl font-black text-[#09562C] leading-tight tracking-tight mb-1 flex items-center justify-center gap-2"
      >
        <PartyPopper className="w-8 h-8 text-[#FF0F7B] shrink-0" />
        <span>You're Officially Checked In!</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-sans text-sm sm:text-base font-bold text-[#0E6D38]"
      >
        Welcome to HH Goa 2026. Your Builder Pass is ready to share.
      </motion.p>
    </div>
  );
};

