import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, Printer, ShieldCheck, Sun } from 'lucide-react';
import { BuilderData } from '../types';
import { StampAnimation } from './StampAnimation';

interface PrintingStationProps {
  builderData: BuilderData;
  sequenceStep: number; // 0 = start, 1 = photo in, 2 = details stamping, 3 = title generated, 4 = stamp applied, 5 = pass printed
  generatedTitle: string;
}

export const PrintingStation: React.FC<PrintingStationProps> = ({
  builderData,
  sequenceStep,
  generatedTitle,
}) => {
  const { selfieUrl, fullName, builderStack, currentRole, city, oneWord } = builderData;

  const defaultSelfie =
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600';
  const displayImage = selfieUrl || defaultSelfie;

  return (
    <div className="w-full max-w-xl mx-auto my-3 relative select-none">
      {/* Decorative Passport Clip / Stickers */}
      <div className="absolute -top-4 -left-2 px-3 py-1 bg-[#FFD81A] border-2 border-[#09562C] rounded-xl font-mono text-[10px] font-black text-[#09562C] uppercase rotate-[-6deg] shadow-goa-sm z-30 flex items-center gap-1">
        <span>CHECK-IN STATION #01</span>
        <span>🌴</span>
      </div>

      <div className="absolute -top-4 -right-2 px-3 py-1 bg-[#FF0F7B] text-white border-2 border-[#09562C] rounded-xl font-mono text-[10px] font-black uppercase rotate-[8deg] shadow-goa-sm z-30 flex items-center gap-1">
        <span>GOA PRINTING PRESS</span>
        <span>🖨️</span>
      </div>

      {/* Main Tropical Printing Machine Container */}
      <div className="bg-[#F7F0DD] border-4 border-[#09562C] rounded-3xl p-5 sm:p-7 shadow-goa-lg relative z-10 text-[#09562C] overflow-hidden">
        {/* Top Control Panel Header with Gears & Blinking LEDs */}
        <div className="bg-[#09562C] text-[#F7F0DD] rounded-2xl p-3 mb-5 border-2 border-[#09562C] shadow-goa-sm flex items-center justify-between">
          {/* Left LEDs */}
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-[#FF0F7B] border border-white"
            />
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-[#FFD81A] border border-white"
            />
            <motion.div
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-emerald-400 border border-white"
            />
            <span className="font-mono text-[10px] font-black text-[#FFD81A] tracking-wider uppercase ml-1">
              STATUS: {sequenceStep >= 5 ? 'COMPLETE ✓' : 'PRINTING...'}
            </span>
          </div>

          {/* Right Vector Rotating Gears */}
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: sequenceStep < 5 ? 360 : 0 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="text-[#FFD81A]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </motion.div>
            <motion.div
              animate={{ rotate: sequenceStep < 5 ? -360 : 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="text-[#FF0F7B]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Paper Roller Feed Slot */}
        <div className="relative bg-[#09562C]/10 border-3 border-[#09562C] rounded-2xl p-4 min-h-[220px] flex flex-col items-center justify-center overflow-hidden">
          {/* Top Feeder Slot line */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3/4 h-3 rounded-full bg-[#09562C] border border-[#FFD81A]" />

          {/* STAGE 1: Photo Flying in */}
          {sequenceStep === 1 && (
            <motion.div
              initial={{ y: -120, scale: 0.5, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="w-28 h-28 rounded-2xl border-3 border-[#09562C] overflow-hidden shadow-goa bg-white"
            >
              <img src={displayImage} alt="Selfie" className="w-full h-full object-cover" />
            </motion.div>
          )}

          {/* STAGE 2 & Beyond: Pass Card being printed and details stamped */}
          {sequenceStep >= 2 && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md bg-white border-3 border-[#09562C] rounded-2xl p-4 shadow-goa relative overflow-hidden text-[#09562C]"
            >
              {/* Pass Header */}
              <div className="flex items-center justify-between pb-2 border-b-2 border-[#09562C]/20 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌴</span>
                  <span className="font-serif font-black text-lg text-[#09562C]">
                    HH GOA 2026 BUILDER PASS
                  </span>
                </div>
                <span className="font-mono text-[9px] font-black px-2 py-0.5 bg-[#FFD81A] border border-[#09562C] rounded-md">
                  PRINTING
                </span>
              </div>

              {/* Layout: Left Photo + Right Details */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl border-2 border-[#09562C] overflow-hidden shrink-0 bg-[#F7F0DD]">
                  <img src={displayImage} alt="Selfie" className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 space-y-1.5 font-mono text-xs">
                  {/* Name Checkmark */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-1.5 font-bold"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0E6D38] shrink-0" />
                    <span className="font-sans font-black text-sm text-[#09562C] truncate">
                      {fullName || 'Alex Vance'}
                    </span>
                  </motion.div>

                  {/* Stack Checkmark */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-1.5 text-[11px]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6D38] shrink-0" />
                    <span className="px-2 py-0.5 rounded-full bg-[#FFD81A] border border-[#09562C] font-black">
                      {builderStack || 'AI / ML'}
                    </span>
                  </motion.div>

                  {/* Role Checkmark */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-1.5 text-[11px]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6D38] shrink-0" />
                    <span className="px-2 py-0.5 rounded-full bg-[#FF0F7B] text-white border border-[#09562C] font-black">
                      {currentRole || 'Founder'}
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Title Section Reveal in Pass */}
              {sequenceStep >= 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-3 pt-2 border-t-2 border-[#09562C]/20 bg-[#FFD81A]/40 rounded-xl p-2 text-center"
                >
                  <div className="font-mono text-[9px] font-black uppercase text-[#0E6D38]">
                    TITLE UNLOCKED:
                  </div>
                  <div className="font-serif font-black text-base text-[#09562C]">
                    ⚡ {generatedTitle} 🌴
                  </div>
                </motion.div>
              )}

              {/* Stamp Animation on Card */}
              <StampAnimation isVisible={sequenceStep >= 4} />
            </motion.div>
          )}

          {/* Bottom Feeder Slot line */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-3 rounded-full bg-[#09562C] border border-[#FFD81A]" />
        </div>

        {/* Machine Front Controls & Big Pink Button */}
        <div className="mt-4 pt-3 border-t-2 border-[#09562C]/20 flex items-center justify-between">
          <div className="font-mono text-xs font-bold text-[#0E6D38]">
            PRINTING PROGRESS:
          </div>

          <motion.div
            animate={sequenceStep < 5 ? { scale: [1, 1.08, 1] } : { scale: 1 }}
            transition={{ duration: 1, repeat: Infinity }}
            className="px-4 py-2 bg-[#FF0F7B] text-white border-2 border-[#09562C] rounded-2xl font-mono text-xs font-black shadow-goa-sm flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4 text-[#FFD81A]" />
            <span>PRINT ENGINE ACTIVE</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
