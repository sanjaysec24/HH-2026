import React, { useState } from 'react';
import { PalmTreeIcon, CoconutDrinkIcon } from './VectorIllustrations';
import { Volume2, VolumeX, Users, Ticket, Compass } from 'lucide-react';
import { Step } from '../types';

interface HeaderProps {
  currentStep: Step;
  onNavigate: (step: Step) => void;
  checkedInCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentStep,
  onNavigate,
  checkedInCount,
}) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <header className="sticky top-0 z-40 bg-[#F7F0DD]/95 backdrop-blur-md border-b-2 border-[#09562C] px-4 py-3 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-2.5 group text-left transition-transform active:scale-95"
        >
          <div className="w-10 h-10 rounded-xl bg-[#0E6D38] border-2 border-[#09562C] shadow-goa-sm flex items-center justify-center p-1 group-hover:rotate-6 transition-transform">
            <PalmTreeIcon className="w-8 h-8" color="#FFD81A" />
          </div>
          <div>
            <div className="font-serif text-xl sm:text-2xl font-black text-[#09562C] leading-none flex items-center gap-1.5">
              HH GOA <span className="text-[#FF0F7B] font-mono text-xs px-1.5 py-0.5 bg-[#FFD81A] border border-[#09562C] rounded-full">2026</span>
            </div>
            <div className="font-mono text-[10px] text-[#0E6D38] font-bold tracking-wider uppercase">
              Builder Check-In
            </div>
          </div>
        </button>

        {/* Center Badge: Live Counter */}
        <div className="hidden md:flex items-center gap-2 bg-[#FFD81A] border-2 border-[#09562C] px-3 py-1 rounded-full shadow-goa-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF0F7B] animate-pulse" />
          <span className="font-mono text-xs font-bold text-[#09562C]">
            <span className="font-black text-[#0E6D38]">{checkedInCount}</span> BUILDERS CHECKED IN
          </span>
        </div>

        {/* Navigation & Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => onNavigate('community')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 border-[#09562C] font-mono text-xs font-bold transition-all shadow-goa-sm ${
              currentStep === 'community'
                ? 'bg-[#FF0F7B] text-white'
                : 'bg-white text-[#09562C] hover:bg-[#FFD81A]'
            }`}
          >
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">Roster</span>
          </button>

          <button
            onClick={() => onNavigate('details')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 border-[#09562C] font-mono text-xs font-bold transition-all shadow-goa-sm ${
              currentStep !== 'landing' && currentStep !== 'community'
                ? 'bg-[#0E6D38] text-[#FFD81A]'
                : 'bg-[#FFD81A] text-[#09562C] hover:bg-[#FF0F7B] hover:text-white'
            }`}
          >
            <Ticket className="w-4 h-4" />
            <span>Pass Check-In</span>
          </button>

          {/* Sound Effect Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? 'Mute Goa Ambience & Sounds' : 'Enable Goa Ambience'}
            className="p-2 rounded-lg bg-white border-2 border-[#09562C] text-[#09562C] hover:bg-[#F7F0DD] shadow-goa-sm transition-transform active:scale-90"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#0E6D38]" /> : <VolumeX className="w-4 h-4 text-gray-400" />}
          </button>
        </div>
      </div>
    </header>
  );
};
