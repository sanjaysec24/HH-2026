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

  // Dynamic font sizing for user name to ensure it stays on one line whenever possible
  const nameLength = fullName.length;
  const nameFontSize =
    nameLength > 24
      ? 'text-lg sm:text-xl'
      : nameLength > 16
      ? 'text-xl sm:text-2xl'
      : nameLength > 12
      ? 'text-2xl sm:text-3xl'
      : 'text-3xl sm:text-4xl';

  return (
    <div className="flex flex-col gap-3.5 text-center text-[#09562C] relative z-10 w-full px-1">
      {/* Primary Element: Builder Name with Equal Top and Bottom Spacing */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="my-1 text-center w-full overflow-hidden"
      >
        <h2
          className={`font-serif ${nameFontSize} font-black text-[#09562C] tracking-tight leading-none drop-shadow-xs whitespace-nowrap truncate`}
        >
          {fullName}
        </h2>
      </motion.div>

      {/* Builder Title Pill */}
      {builderTitle && (
        <div className="flex justify-center">
          <span className="inline-flex items-center justify-center max-w-[90%] px-3.5 py-1 rounded-full bg-[#FFD81A] border-2 border-[#09562C] font-mono font-black text-xs sm:text-sm text-[#09562C] tracking-wide truncate shadow-2xs whitespace-nowrap">
            <span className="truncate">{builderTitle}</span>
          </span>
        </div>
      )}

      {/* Stack & Role Row */}
      {(builderStack || currentRole) && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {builderStack && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E6D38] text-white font-mono text-xs font-bold border border-[#09562C] shadow-2xs whitespace-nowrap">
              <Code2 className="w-3.5 h-3.5 text-[#FFD81A] shrink-0" />
              <span>{builderStack}</span>
            </span>
          )}

          {currentRole && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF0F7B] text-white font-mono text-xs font-bold border border-[#09562C] shadow-2xs whitespace-nowrap">
              <Rocket className="w-3.5 h-3.5 text-white shrink-0" />
              <span>{currentRole}</span>
            </span>
          )}
        </div>
      )}

      {/* City & Personality Row */}
      {(city || oneWord) && (
        <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs font-bold text-[#09562C]/85">
          {city && (
            <span className="inline-flex items-center gap-1 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-[#FF0F7B] shrink-0" />
              <span>{city}</span>
            </span>
          )}

          {city && oneWord && <span className="text-[#09562C]/30">•</span>}

          {oneWord && (
            <span className="inline-flex items-center gap-1 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-[#0E6D38] shrink-0" />
              <span>"{oneWord}"</span>
            </span>
          )}
        </div>
      )}

      {/* Structured Credential Metadata Grid */}
      <div className="pt-3 border-t border-[#09562C]/15 grid grid-cols-3 gap-1.5 sm:gap-2 font-mono text-[10px] text-left">
        <div className="bg-white/60 rounded-xl p-2 border border-[#09562C]/15 overflow-hidden">
          <span className="text-[#0E6D38] font-black text-[8px] uppercase tracking-wider block mb-0.5 whitespace-nowrap">
            ENTRY TYPE
          </span>
          <span className="font-bold text-[#09562C] flex items-center gap-1 whitespace-nowrap">
            <Ticket className="w-3 h-3 text-[#0E6D38] shrink-0" />
            <span className="truncate">DELEGATE</span>
          </span>
        </div>

        <div className="bg-white/60 rounded-xl p-2 border border-[#09562C]/15 overflow-hidden">
          <span className="text-[#0E6D38] font-black text-[8px] uppercase tracking-wider block mb-0.5 whitespace-nowrap">
            LOCATION
          </span>
          <span className="font-bold text-[#09562C] flex items-center gap-1 whitespace-nowrap">
            <Globe className="w-3 h-3 text-[#0E6D38] shrink-0" />
            <span className="truncate">GOA, INDIA</span>
          </span>
        </div>

        <div className="bg-white/60 rounded-xl p-2 border border-[#09562C]/15 overflow-hidden">
          <span className="text-[#0E6D38] font-black text-[8px] uppercase tracking-wider block mb-0.5 whitespace-nowrap">
            STATUS
          </span>
          <span className="font-bold text-[#0E6D38] flex items-center gap-1 whitespace-nowrap">
            <CheckCircle2 className="w-3 h-3 text-[#0E6D38] shrink-0" />
            <span className="truncate">CONFIRMED</span>
          </span>
        </div>
      </div>
    </div>
  );
};



