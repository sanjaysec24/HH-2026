import React from 'react';
import { Palmtree, Camera } from 'lucide-react';
import { BuilderData } from '../types';
import { BuilderPass } from './BuilderPass';

interface LivePreviewPassProps {
  builderData: Partial<BuilderData>;
  onEditPhoto?: () => void;
}

export const LivePreviewPass: React.FC<LivePreviewPassProps> = ({
  builderData,
  onEditPhoto,
}) => {
  const fullBuilderData: BuilderData = {
    fullName: builderData.fullName || 'Your Name',
    builderTitle: builderData.builderTitle || 'Code Surfer',
    builderStack: builderData.builderStack || 'Full-Stack',
    currentRole: builderData.currentRole || 'Builder',
    city: builderData.city || 'Goa',
    oneWord: builderData.oneWord || 'Passionate',
    selfieUrl: builderData.selfieUrl || '',
  };

  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <div className="w-full max-w-sm relative">
        <BuilderPass
          builderData={fullBuilderData}
          passNumber="HH-2026-PREVIEW"
          issueDate="OCT 2026"
        />

        {onEditPhoto && (
          <button
            type="button"
            onClick={onEditPhoto}
            className="mt-3 mx-auto px-4 py-1.5 rounded-full bg-[#09562C] text-[#FFD81A] font-mono text-xs font-bold border border-[#FFD81A] shadow-xs hover:bg-[#0E6D38] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Change Photo</span>
          </button>
        )}
      </div>

      {/* Helpful Text below live preview */}
      <div className="mt-3 text-center">
        <span className="font-mono text-xs font-bold text-[#0E6D38] inline-flex items-center gap-1.5 bg-[#F7F0DD] border border-[#09562C] px-3.5 py-1 rounded-full shadow-xs">
          <Palmtree className="w-3.5 h-3.5 text-[#09562C]" />
          <span>Live Ticket Preview</span>
        </span>
      </div>
    </div>
  );
};


