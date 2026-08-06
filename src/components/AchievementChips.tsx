import React from 'react';
import { motion } from 'motion/react';
import { Award, Zap, Palmtree, Rocket } from 'lucide-react';

export const AchievementChips: React.FC = () => {
  const chips = [
    { label: '🌴 Builder', color: 'bg-[#FFD81A] text-[#09562C]' },
    { label: '🚀 Hacker', color: 'bg-[#FF0F7B] text-white' },
    { label: '🏖 Goa Ready', color: 'bg-[#0E6D38] text-white' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 my-4 z-20 relative">
      {chips.map((chip, idx) => (
        <motion.div
          key={chip.label}
          initial={{ opacity: 0, scale: 0.5, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 350,
            damping: 20,
            delay: 0.4 + idx * 0.15,
          }}
          className={`px-4 py-1.5 rounded-2xl border-2 border-[#09562C] font-mono text-xs sm:text-sm font-black shadow-goa-sm flex items-center gap-1.5 ${chip.color}`}
        >
          <span>{chip.label}</span>
          <span className="text-[10px] bg-white/30 px-1.5 py-0.5 rounded-md uppercase font-bold">
            UNLOCKED
          </span>
        </motion.div>
      ))}
    </div>
  );
};
