import React from 'react';
import { motion } from 'motion/react';
import { Eye, Info, Sparkles } from 'lucide-react';

export const PreviewPanel: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="my-3 text-center z-20 relative max-w-sm mx-auto"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#F7F0DD] border-2 border-[#09562C] shadow-goa-sm font-mono text-xs font-black text-[#09562C]">
        <Eye className="w-4 h-4 text-[#FF0F7B] shrink-0" />
        <span>This is exactly how your pass will appear when exported! 🌴</span>
      </div>
    </motion.div>
  );
};
