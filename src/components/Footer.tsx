import React from 'react';
import { MapPin, Calendar, Github, Linkedin, Globe, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#09562C] border-t-4 border-[#09562C] text-[#F7F0DD] py-10 px-4 sm:px-8 mt-auto relative overflow-hidden z-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6 relative z-10">
        
        {/* Main Event Badge & Quick Details */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono text-xs font-bold text-[#FFD81A]">
          <span className="flex items-center gap-1 bg-[#0E6D38] px-3 py-1 rounded-full border border-[#FFD81A]/30">
            <MapPin className="w-3.5 h-3.5 text-[#FF0F7B]" />
            Goa, India
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1 bg-[#0E6D38] px-3 py-1 rounded-full border border-[#FFD81A]/30">
            <Calendar className="w-3.5 h-3.5 text-[#FFD81A]" />
            28–31 October 2026
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1 bg-[#0E6D38] px-3 py-1 rounded-full border border-[#FFD81A]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#FF0F7B]" />
            HH Goa 2026
          </span>
        </div>

        {/* Developer Credit Section */}
        <div className="bg-[#0E6D38]/80 border-2 border-[#FFD81A]/40 rounded-2xl p-5 sm:p-6 shadow-goa-sm max-w-xl w-full flex flex-col items-center gap-3">
          <div className="font-mono text-[11px] uppercase tracking-wider text-[#FFD81A] font-extrabold">
            Designed &amp; Developed by
          </div>

          <div className="space-y-1">
            <h3 className="font-serif text-xl sm:text-2xl font-black text-white tracking-tight">
              Sanjay Kumar B
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#F7F0DD]/90 font-medium">
              AI &amp; Data Science Student
            </p>
            <p className="font-sans text-xs text-[#F7F0DD]/80 font-medium">
              Saveetha Engineering College
            </p>
            <p className="font-mono text-xs text-[#FFD81A] font-bold pt-1">
              Builder Check-In Experience for Hacker House Goa 2026
            </p>
          </div>

          {/* Social Icons (Circular Outline Icons with Hover Animations) */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href="https://github.com/sanjaysec24"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub"
              className="w-10 h-10 rounded-full bg-[#F7F0DD] border-2 border-[#09562C] text-[#09562C] flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD81A] hover:shadow-[0_0_15px_rgba(255,216,26,0.8)] shadow-xs"
            >
              <Github className="w-5 h-5 stroke-[2.2]" />
            </a>

            <a
              href="https://www.linkedin.com/in/sanjay-kumar-b-67b7b532a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              className="w-10 h-10 rounded-full bg-[#F7F0DD] border-2 border-[#09562C] text-[#09562C] flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD81A] hover:shadow-[0_0_15px_rgba(255,216,26,0.8)] shadow-xs"
            >
              <Linkedin className="w-5 h-5 stroke-[2.2]" />
            </a>

            <a
              href="https://sanjay-port.framer.website/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio Website"
              title="Portfolio"
              className="w-10 h-10 rounded-full bg-[#F7F0DD] border-2 border-[#09562C] text-[#09562C] flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD81A] hover:shadow-[0_0_15px_rgba(255,216,26,0.8)] shadow-xs"
            >
              <Globe className="w-5 h-5 stroke-[2.2]" />
            </a>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="space-y-1.5 max-w-lg text-center">
          <p className="font-mono text-xs font-black text-[#FFD81A]">
            © 2026 Sanjay Kumar B
          </p>
          <p className="font-sans text-xs font-semibold text-[#F7F0DD]/90 flex items-center justify-center gap-1.5">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-[#FF0F7B] fill-[#FF0F7B] inline-block" />
            <span>for the Hacker House Goa 2026 Builder Challenge.</span>
          </p>
          <p className="font-mono text-[10px] sm:text-xs text-[#F7F0DD]/60 leading-relaxed pt-1">
            This project was independently created for the Hacker House Goa 2026 Builder Challenge and is not an official Hacker House Goa product.
          </p>
        </div>

      </div>
    </footer>
  );
};

