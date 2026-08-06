import React from 'react';
import { Sun, Sparkles, Smile, Camera } from 'lucide-react';

export const UploadTips: React.FC = () => {
  const tips = [
    {
      icon: <Sun className="w-4 h-4 text-[#FF0F7B]" />,
      title: 'Good Lighting',
      desc: 'Natural sunlight or clear indoor lights work best.',
    },
    {
      icon: <Smile className="w-4 h-4 text-[#0E6D38]" />,
      title: 'Clear Face',
      desc: 'Solo shot facing forward so your pass looks sharp.',
    },
    {
      icon: <Sparkles className="w-4 h-4 text-[#09562C]" />,
      title: 'Tropical Vibe',
      desc: 'Sunglasses or coconut shirts welcome! 🌴',
    },
  ];

  return (
    <div className="w-full max-w-xl mx-auto my-4 px-2">
      <div className="flex items-center justify-center gap-2 mb-2 font-mono text-xs font-bold text-[#0E6D38] uppercase tracking-wider">
        <span>✦</span>
        <span>Quick Selfie Tips</span>
        <span>✦</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {tips.map((t, i) => (
          <div
            key={i}
            className="p-3 bg-[#F7F0DD]/90 border-2 border-[#09562C] rounded-2xl shadow-goa-sm flex items-start gap-2.5"
          >
            <div className="p-1.5 bg-[#FFD81A] border border-[#09562C] rounded-xl shrink-0 mt-0.5">
              {t.icon}
            </div>
            <div>
              <h4 className="font-sans font-extrabold text-xs text-[#09562C] leading-snug">
                {t.title}
              </h4>
              <p className="font-sans text-[11px] text-[#09562C]/80 leading-tight mt-0.5">
                {t.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
