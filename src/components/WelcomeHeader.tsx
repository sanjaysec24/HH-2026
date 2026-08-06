import React from 'react';
import { motion } from 'motion/react';

export const WelcomeHeader: React.FC = () => {
  return (
    <div className="text-center max-w-xl mx-auto px-4 my-2 sm:my-4">
      {/* Wave Greeting */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFD81A] border-2 border-[#09562C] shadow-goa-sm mb-2"
      >
        <span className="text-base animate-bounce">👋</span>
        <span className="font-mono text-xs font-black text-[#09562C] uppercase tracking-wider">
          HH GOA BUILDER CHECK-IN
        </span>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-serif text-3xl sm:text-5xl font-black text-[#09562C] leading-tight tracking-tight mb-2"
      >
        Welcome Builder!
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-sans text-sm sm:text-base font-semibold text-[#0E6D38] leading-relaxed"
      >
        Upload your best selfie to create your official HH Goa Builder Pass.
      </motion.p>
    </div>
  );
};
