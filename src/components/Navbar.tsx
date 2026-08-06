import React from 'react';
import { motion } from 'motion/react';
import { Info, HelpCircle, Palmtree } from 'lucide-react';

interface NavbarProps {
  onOpenAbout: () => void;
  onOpenHowItWorks: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAbout, onOpenHowItWorks }) => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between z-30 relative gap-2 sm:gap-4 flex-nowrap"
    >
      {/* Left: Brand Logo */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0 select-none">
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-[#FFD81A] border-2 border-[#09562C] shadow-goa-sm flex items-center justify-center font-serif text-xl font-black text-[#09562C] rotate-[-4deg] hover:rotate-0 transition-transform cursor-pointer shrink-0">
          <Palmtree className="w-4.5 h-4.5 sm:w-6 sm:h-6 text-[#09562C] stroke-[2.25]" />
        </div>
        <div>
          <span className="font-serif text-lg sm:text-2xl font-black text-[#09562C] tracking-tight leading-none block">
            HH GOA <span className="text-[#FF0F7B] font-mono text-[10px] sm:text-xs px-1.5 py-0.5 bg-[#FFD81A] border border-[#09562C] rounded-full inline-block ml-0.5 shadow-goa-sm">2026</span>
          </span>
          <span className="font-mono text-[9px] sm:text-[11px] text-[#0E6D38] font-extrabold uppercase tracking-widest block">
            Builder Check-In
          </span>
        </div>
      </div>

      {/* Right Navigation */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <button
          onClick={onOpenAbout}
          className="h-10 sm:h-11 px-3 sm:px-4 flex items-center justify-center gap-1.5 rounded-xl bg-[#F7F0DD] border-2 border-[#09562C] text-[#09562C] font-mono text-xs sm:text-sm font-bold shadow-goa-sm hover:bg-[#FFD81A] active:scale-95 transition-all shrink-0 cursor-pointer"
        >
          <Info className="w-4 h-4 text-[#0E6D38] shrink-0" />
          <span>About</span>
        </button>

        <button
          onClick={onOpenHowItWorks}
          className="h-10 sm:h-11 px-3 sm:px-4 flex items-center justify-center gap-1.5 rounded-xl bg-[#F7F0DD] border-2 border-[#09562C] text-[#09562C] font-mono text-xs sm:text-sm font-bold shadow-goa-sm hover:bg-[#FFD81A] active:scale-95 transition-all shrink-0 cursor-pointer"
        >
          <HelpCircle className="w-4 h-4 text-[#FF0F7B] shrink-0" />
          <span className="hidden sm:inline">How it Works</span>
          <span className="inline sm:hidden">Guide</span>
        </button>
      </div>
    </motion.nav>
  );
};
