import React from 'react';
import { motion } from 'motion/react';
import { CTAButton } from './CTAButton';

interface HeroContentProps {
  onStartCheckIn: () => void;
  onOpenHowItWorks: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  onStartCheckIn,
  onOpenHowItWorks,
}) => {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4 relative z-10">
      {/* Eyebrow badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFD81A] border-2 border-[#09562C] shadow-goa-sm mb-3 sm:mb-4"
      >
        <span className="w-2 h-2 rounded-full bg-[#FF0F7B] animate-pulse" />
        <span className="font-mono text-xs font-black uppercase text-[#09562C] tracking-wider">
          HH GOA 2026 OFFICIAL REGISTRATION
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#0E6D38] uppercase mb-1">
          WELCOME TO
        </h2>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black text-[#09562C] leading-none tracking-tight mb-4 drop-shadow-sm">
          Builder Check-In
        </h1>
      </motion.div>

      {/* Short Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-1 sm:space-y-1.5 text-base sm:text-lg text-[#09562C]/90 font-medium mb-8 max-w-xl"
      >
        <p className="font-bold text-[#09562C]">
          Create your official HH Goa Builder Pass in under a minute.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm sm:text-base text-[#0E6D38] font-semibold">
          <span className="flex items-center gap-1">✨ Upload your selfie</span>
          <span>•</span>
          <span className="flex items-center gap-1">📝 Tell us about yourself</span>
          <span>•</span>
          <span className="flex items-center gap-1">🚀 Share with community</span>
        </div>
      </motion.div>

      {/* CTA Button & Secondary Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full"
      >
        <CTAButton onClick={onStartCheckIn} />

        <button
          onClick={onOpenHowItWorks}
          className="group inline-flex items-center gap-1.5 text-[#09562C] hover:text-[#FF0F7B] font-mono text-sm sm:text-base font-bold underline underline-offset-4 decoration-2 decoration-[#FFD81A] hover:decoration-[#FF0F7B] transition-colors py-2 px-3"
        >
          <span>How It Works</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </motion.div>
    </div>
  );
};
