import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export const BackgroundDecoration: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Sun Ray Radial Glow Pulsing */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { opacity: 0.2 }
            : { opacity: [0.15, 0.3, 0.15], scale: [0.98, 1.05, 0.98] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-radial from-[#FFD81A] via-transparent to-transparent blur-3xl pointer-events-none"
      />

      {/* Swaying Palm Leaf Top-Left (12s infinite alternate) */}
      <motion.div
        animate={shouldReduceMotion ? { rotate: 0 } : { rotate: [-4, 4, -4] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="absolute -top-12 -left-12 sm:-top-8 sm:-left-8 w-24 h-24 sm:w-64 sm:h-64 opacity-50 sm:opacity-85 z-0 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path
            d="M10 0 C40 20, 80 10, 100 60 C70 50, 30 80, 0 100 C10 60, 0 30, 10 0 Z"
            fill="#0E6D38"
            stroke="#09562C"
            strokeWidth="3"
          />
          <path d="M10 0 Q 50 50 0 100" stroke="#FFD81A" strokeWidth="2.5" strokeDasharray="3 3" />
        </svg>
      </motion.div>

      {/* Swaying Palm Leaf Top-Right (12s infinite alternate) */}
      <motion.div
        animate={shouldReduceMotion ? { rotate: 0 } : { rotate: [4, -4, 4] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute -top-12 -right-12 sm:-top-8 sm:-right-8 w-24 h-24 sm:w-64 sm:h-64 opacity-50 sm:opacity-85 z-0 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full transform scale-x-[-1]">
          <path
            d="M10 0 C40 20, 80 10, 100 60 C70 50, 30 80, 0 100 C10 60, 0 30, 10 0 Z"
            fill="#0E6D38"
            stroke="#09562C"
            strokeWidth="3"
          />
          <path d="M10 0 Q 50 50 0 100" stroke="#FF0F7B" strokeWidth="2.5" strokeDasharray="3 3" />
        </svg>
      </motion.div>

      {/* Slow Moving Clouds */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { x: 0 }
            : { x: ['-10%', '110%'] }
        }
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-16 left-0 opacity-40 pointer-events-none hidden sm:block"
      >
        <div className="w-28 h-8 bg-white/70 rounded-full blur-[1px] border border-[#09562C]/20" />
      </motion.div>

      {/* Gentle Ocean Waves Effect at Bottom */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { x: 0 }
            : { x: [-20, 20, -20] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 right-0 h-12 opacity-30 pointer-events-none"
      >
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-[#0E6D38]">
          <path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </motion.div>

      {/* Flying Birds Path */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { x: 0, y: 0 }
            : { x: [0, 40, 0], y: [0, -10, 0] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-1/4 hidden sm:block opacity-60 pointer-events-none"
      >
        <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
          <path d="M 0 10 Q 15 0 30 10 Q 45 0 60 10" stroke="#09562C" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Floating Upward Particles */}
      {!shouldReduceMotion &&
        [
          { left: '10%', duration: 12, delay: 0 },
          { left: '30%', duration: 15, delay: 2 },
          { left: '70%', duration: 10, delay: 4 },
          { left: '88%', duration: 14, delay: 1 },
        ].map((p, i) => (
          <motion.div
            key={i}
            initial={{ y: '100vh', opacity: 0 }}
            animate={{
              y: '-10vh',
              opacity: [0, 0.7, 0],
              x: [0, 15, -15, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'linear',
            }}
            style={{ left: p.left }}
            className="absolute w-2 h-2 rounded-full bg-[#FFD81A] border border-[#09562C] shadow-xs pointer-events-none"
          />
        ))}

      {/* Passport Stamp Graphic Right Side */}
      <motion.div
        animate={shouldReduceMotion ? { y: 0 } : { y: [-4, 4, -4], rotate: [-6, -3, -6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-8 hidden lg:block opacity-75"
      >
        <div className="px-3 py-2 border-2 border-dashed border-[#09562C] bg-[#FFD81A]/40 rounded-2xl font-mono text-[10px] font-black text-[#09562C] tracking-widest text-center">
          <div>GOA IMMIGRATION</div>
          <div className="text-[#FF0F7B]">APPROVED 2026</div>
        </div>
      </motion.div>
    </div>
  );
};
