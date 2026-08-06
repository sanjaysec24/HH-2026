import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Sparkles, Code2, Rocket, Globe, Ticket, CheckCircle2 } from 'lucide-react';
import { BuilderData } from '../types';

interface BuilderInfoProps {
  builderData: BuilderData;
  passNumber: string;
  issueDate: string;
}

export const BuilderInfo: React.FC<BuilderInfoProps> = ({
  builderData,
  passNumber,
  issueDate,
}) => {
  const {
    fullName = 'Alex Vance',
    builderTitle = 'Code Surfer',
    builderStack = 'AI / ML',
    currentRole = 'Founder',
    city = 'Goa',
    oneWord = 'Fearless',
  } = builderData;

  return (
    <div className="space-y-4 text-center text-[#09562C] relative z-10 w-full px-2 py-1">
      {/* Primary Element: Builder Name */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-1"
      >
        <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#09562C] tracking-tight leading-none drop-shadow-xs">
          {fullName}
        </h2>
      </motion.div>

      {/* Builder Title Pill (Narrower ~20% for elegant proportion) */}
      <div className="flex justify-center">
        <span className="inline-flex items-center justify-center max-w-[80%] px-3.5 py-1 rounded-full bg-[#FFD81A] border-2 border-[#09562C] font-mono font-black text-xs sm:text-sm text-[#09562C] tracking-wide truncate shadow-2xs">
          <span className="truncate">{builderTitle}</span>
        </span>
      </div>

      {/* Stack & Role Row */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {builderStack && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E6D38] text-white font-mono text-xs font-bold border border-[#09562C] shadow-2xs">
            <Code2 className="w-3.5 h-3.5 text-[#FFD81A]" />
            <span>{builderStack}</span>
          </span>
        )}

        {currentRole && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF0F7B] text-white font-mono text-xs font-bold border border-[#09562C] shadow-2xs">
            <Rocket className="w-3.5 h-3.5 text-white" />
            <span>{currentRole}</span>
          </span>
        )}
      </div>

      {/* City & Personality Row */}
      {(city || oneWord) && (
        <div className="flex items-center justify-center gap-3 font-mono text-xs font-bold text-[#09562C]/85">
          {city && (
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#FF0F7B]" />
              <span>{city}</span>
            </span>
          )}

          {city && oneWord && <span className="text-[#09562C]/30">•</span>}

          {oneWord && (
            <span className="inline-flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#0E6D38]" />
              <span>"{oneWord}"</span>
            </span>
          )}
        </div>
      )}

      {/* Structured Credential Metadata Grid: Entry Type & Location */}
      <div className="pt-3 border-t border-[#09562C]/15 grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-[10px] text-left">
        <div className="bg-white/60 rounded-xl p-2 border border-[#09562C]/15">
          <span className="text-[#0E6D38] font-black text-[8px] uppercase tracking-wider block mb-0.5">
            ENTRY TYPE
          </span>
          <span className="font-bold text-[#09562C] flex items-center gap-1">
            <Ticket className="w-3 h-3 text-[#0E6D38]" />
            <span>DELEGATE</span>
          </span>
        </div>

        <div className="bg-white/60 rounded-xl p-2 border border-[#09562C]/15">
          <span className="text-[#0E6D38] font-black text-[8px] uppercase tracking-wider block mb-0.5">
            LOCATION
          </span>
          <span className="font-bold text-[#09562C] flex items-center gap-1">
            <Globe className="w-3 h-3 text-[#0E6D38]" />
            <span>GOA, INDIA</span>
          </span>
        </div>

        <div className="bg-white/60 rounded-xl p-2 border border-[#09562C]/15 col-span-2 sm:col-span-1">
          <span className="text-[#0E6D38] font-black text-[8px] uppercase tracking-wider block mb-0.5">
            CHECK-IN STATUS
          </span>
          <span className="font-bold text-[#0E6D38] flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-[#0E6D38]" />
            <span>CONFIRMED</span>
          </span>
        </div>
      </div>
    </div>
  );
};



