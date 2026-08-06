import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const ScrollIndicator: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-1 my-3 text-[#09562C]/70 select-none"
    >
      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0E6D38]">
        Scroll to Explore
      </span>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="w-6 h-6 rounded-full border border-[#09562C]/30 flex items-center justify-center bg-[#F7F0DD]"
      >
        <ChevronDown className="w-3.5 h-3.5 text-[#09562C]" />
      </motion.div>
    </motion.div>
  );
};
