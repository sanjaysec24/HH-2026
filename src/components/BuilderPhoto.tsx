import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface BuilderPhotoProps {
  selfieUrl: string;
  fullName?: string;
}

export const BuilderPhoto: React.FC<BuilderPhotoProps> = ({
  selfieUrl,
  fullName = 'Builder',
}) => {
  const defaultSelfie =
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600';
  const displayUrl = selfieUrl || defaultSelfie;

  return (
    <div className="relative mx-auto my-4 flex items-center justify-center">
      {/* Clean Circular Photo Frame with Thin 2px Border */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-[#09562C] bg-[#FFD81A] p-1 shadow-xs">
        <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
          <img
            src={displayUrl}
            alt={fullName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Entry Verified Stamp Badge */}
      <div className="absolute -bottom-2 px-3 py-0.5 bg-[#09562C] text-[#FFD81A] border border-[#FFD81A] rounded-full font-mono text-[9px] font-black tracking-wider uppercase shadow-xs flex items-center gap-1">
        <ShieldCheck className="w-3.5 h-3.5 text-[#FFD81A]" />
        <span>ENTRY VERIFIED</span>
      </div>
    </div>
  );
};



