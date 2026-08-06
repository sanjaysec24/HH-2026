import React, { useState } from 'react';
import { Step, BuilderProfile } from '../types';
import { generateBuilderTitle, TITLE_OPTIONS_PRESETS } from '../data/titles';
import {
  PalmTreeIcon,
  SunWaveIcon,
  DirectionBoard,
  GoaHouseIcon,
  ScooterIcon,
  CoconutDrinkIcon,
  PassportStampSVG,
} from './VectorIllustrations';
import { SelfieUploader } from './SelfieUploader';
import { PassPrinterAnimation } from './PassPrinterAnimation';
import { PassCard } from './PassCard';
import { ShareModal } from './ShareModal';
import {
  Ticket,
  User,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Dices,
  Printer,
  Share2,
  MapPin,
  Calendar,
  Compass,
} from 'lucide-react';

interface CheckInFlowProps {
  currentStep: Step;
  onStepChange: (step: Step) => void;
  onCheckInComplete: (builder: BuilderProfile) => void;
  checkedInCount: number;
}

const ROLES = [
  'Full-Stack Craftsman',
  'AI Architect',
  'UI/UX Designer',
  'Indie Hacker',
  'Web3 / Protocol Dev',
  'Systems / DevOps',
  'Founder / Builder',
];

const SKILL_TAGS = [
  'React/Next',
  'Gemini AI',
  'Python/Agents',
  'Solana/Web3',
  'Design Systems',
  'TypeScript',
  'Rust',
  'Shadcn',
  'Framer Motion',
  'Hardware/IoT',
];

export const CheckInFlow: React.FC<CheckInFlowProps> = ({
  currentStep,
  onStepChange,
  onCheckInComplete,
  checkedInCount,
}) => {
  // Builder Form State
  const [fullName, setFullName] = useState('');
  const [handle, setHandle] = useState('');
  const [role, setRole] = useState(ROLES[0]);
  const [project, setProject] = useState('');
  const [goaVibe, setGoaVibe] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>(['React/Next', 'Gemini AI']);
  const [selfieUrl, setSelfieUrl] = useState(
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
  );
  const [selectedStickers, setSelectedStickers] = useState<string[]>(['sticker-surf', 'sticker-verified']);
  const [generatedTitle, setGeneratedTitle] = useState('');
  const [serialNumber, setSerialNumber] = useState('HH26-GOA-0892');

  const [createdProfile, setCreatedProfile] = useState<BuilderProfile | null>(null);

  // Skill toggle handler
  const handleSkillToggle = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      if (selectedSkills.length > 1) {
        setSelectedSkills(selectedSkills.filter((s) => s !== skill));
      }
    } else {
      if (selectedSkills.length < 4) {
        setSelectedSkills([...selectedSkills, skill]);
      }
    }
  };

  // Sticker toggle
  const handleStickerToggle = (stickerId: string) => {
    if (selectedStickers.includes(stickerId)) {
      setSelectedStickers(selectedStickers.filter((id) => id !== stickerId));
    } else {
      setSelectedStickers([...selectedStickers, stickerId]);
    }
  };

  // Title generation
  const handleGenerateTitle = () => {
    const title = generateBuilderTitle(role, fullName || 'Goa Builder');
    setGeneratedTitle(title);
  };

  // Reroll title
  const handleRerollTitle = () => {
    const randomPreset = TITLE_OPTIONS_PRESETS[Math.floor(Math.random() * TITLE_OPTIONS_PRESETS.length)];
    setGeneratedTitle(randomPreset);
  };

  // Move from Title step to Printing
  const startPrintingProcess = () => {
    const num = Math.floor(1000 + Math.random() * 9000);
    const newSerial = `HH26-GOA-${num}`;
    setSerialNumber(newSerial);

    const profile: BuilderProfile = {
      id: `builder-${Date.now()}`,
      fullName: fullName || 'Goa Festival Builder',
      handle: handle.startsWith('@') ? handle : `@${handle || 'builder'}`,
      role,
      title: generatedTitle || 'Chief Coconut Architect',
      project: project || 'Stealth Goa Hack',
      goaVibe: goaVibe || 'Cashew Feni & Clean Code',
      skills: selectedSkills,
      selfieUrl,
      serialNumber: newSerial,
      checkedInAt: 'Just now',
      selectedStickers,
      passColor: '#0E6D38',
    };

    setCreatedProfile(profile);
    onStepChange('printing');
  };

  // Finished Printing
  const handlePrintFinished = () => {
    if (createdProfile) {
      onCheckInComplete(createdProfile);
    }
    onStepChange('pass');
  };

  // Fill Quick Demo
  const handleLoadDemoData = () => {
    setFullName('Sanjay Kumar');
    setHandle('@sanjay_goa');
    setRole('AI Architect');
    setProject('Beachside AI Agent Swarm');
    setGoaVibe('Sunset Hacking at Vagator');
    setSelectedSkills(['Gemini AI', 'React/Next', 'TypeScript']);
    const demoTitle = generateBuilderTitle('AI Architect', 'Sanjay Kumar');
    setGeneratedTitle(demoTitle);
  };

  // Render Steps Bar
  const renderStepProgress = () => {
    if (currentStep === 'landing' || currentStep === 'community') return null;

    const steps = [
      { id: 'details', label: '1. You' },
      { id: 'selfie', label: '2. Photo' },
      { id: 'title', label: '3. Title' },
      { id: 'printing', label: '4. Print' },
      { id: 'pass', label: '5. Pass' },
    ];

    return (
      <div className="w-full max-w-xl mx-auto mb-6 px-4">
        <div className="flex items-center justify-between bg-white border-2 border-[#09562C] p-2 rounded-2xl shadow-goa-sm">
          {steps.map((st, idx) => {
            const isCurrent = currentStep === st.id;
            return (
              <div
                key={st.id}
                className={`flex-1 text-center font-mono text-[11px] font-extrabold py-1.5 px-1 rounded-xl transition-all ${
                  isCurrent
                    ? 'bg-[#FF0F7B] text-white shadow-goa-sm'
                    : 'text-[#09562C]'
                }`}
              >
                {st.label}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen pb-16 flex flex-col items-center">
      {renderStepProgress()}

      {/* STEP 1: LANDING */}
      {currentStep === 'landing' && (
        <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col items-center text-center gap-8">
          {/* Main Tropical Festival Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFD81A] border-3 border-[#09562C] px-4 py-1.5 rounded-full font-mono text-xs font-black shadow-goa-md animate-bounce">
            <span className="text-base">🌴</span>
            <span>28–31 OCTOBER 2026 • GOA, INDIA</span>
            <span className="text-base">🍹</span>
          </div>

          {/* Editorial Title */}
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-serif text-5xl sm:text-7xl font-black text-[#09562C] leading-none tracking-tight">
              HH GOA 2026
            </h1>
            <h2 className="font-sans text-xl sm:text-3xl font-extrabold text-[#0E6D38] uppercase tracking-wide">
              The Annual Festival of Builders, Hackers &amp; Creators
            </h2>
            <p className="font-mono text-sm sm:text-base text-[#09562C] max-w-2xl mt-2 font-semibold">
              Claim your official tropical Builder Pass, generate your custom Goa title, and check in for the most iconic festival on the beach.
            </p>
          </div>

          {/* Interactive Direction Signs & Graphics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl my-4">
            <div className="bg-white border-3 border-[#09562C] rounded-2xl p-5 shadow-goa-md flex flex-col items-center text-center hover:shadow-goa-lg transition-all">
              <GoaHouseIcon className="w-16 h-16 mb-2" />
              <div className="font-serif text-lg font-bold text-[#09562C]">
                Beachside Shacks
              </div>
              <div className="font-mono text-xs text-gray-600 mt-1">
                24/7 High-Speed Wi-Fi &amp; Coconuts
              </div>
            </div>

            <div className="bg-[#FFD81A] border-3 border-[#09562C] rounded-2xl p-5 shadow-goa-md flex flex-col items-center text-center hover:shadow-goa-lg transition-all">
              <SunWaveIcon className="w-16 h-16 mb-2" />
              <div className="font-serif text-lg font-black text-[#09562C]">
                Sunset Stage Demos
              </div>
              <div className="font-mono text-xs text-[#09562C] font-bold mt-1">
                Showcase your creations at Vagator
              </div>
            </div>

            <div className="bg-white border-3 border-[#09562C] rounded-2xl p-5 shadow-goa-md flex flex-col items-center text-center hover:shadow-goa-lg transition-all">
              <ScooterIcon className="w-16 h-16 mb-2" />
              <div className="font-serif text-lg font-bold text-[#09562C]">
                Scooter Squads
              </div>
              <div className="font-mono text-xs text-gray-600 mt-1">
                Explore north Goa with fellow hackers
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => {
                handleLoadDemoData();
                onStepChange('details');
              }}
              className="bg-[#0E6D38] text-[#FFD81A] border-4 border-[#09562C] px-8 py-4 rounded-2xl font-mono text-base font-black shadow-goa-lg hover:bg-[#09562C] transition-all transform hover:-translate-y-1 flex items-center gap-3"
            >
              <Ticket className="w-6 h-6" />
              <span>START BUILDER CHECK-IN →</span>
            </button>

            <button
              onClick={() => onStepChange('community')}
              className="bg-[#FF0F7B] text-white border-4 border-[#09562C] px-6 py-4 rounded-2xl font-mono text-sm font-black shadow-goa-lg hover:bg-black transition-all flex items-center gap-2"
            >
              <span>EXPLORE ROSTER ({checkedInCount})</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: DETAILS */}
      {currentStep === 'details' && (
        <div className="max-w-xl w-full mx-auto px-4">
          <div className="bg-white border-4 border-[#09562C] rounded-3xl p-6 sm:p-8 shadow-goa-xl flex flex-col gap-6">
            <div className="border-b-2 border-[#09562C] pb-4">
              <div className="font-mono text-xs font-black text-[#0E6D38] uppercase">
                STEP 1 OF 5
              </div>
              <h2 className="font-serif text-3xl font-black text-[#09562C]">
                Tell Us About Yourself
              </h2>
              <p className="font-mono text-xs text-gray-600">
                Your details will be printed on your official HH Goa 2026 pass.
              </p>
            </div>

            {/* Inputs */}
            <div className="flex flex-col gap-4">
              {/* Full Name */}
              <div>
                <label className="font-mono text-xs font-black text-[#09562C] uppercase block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Priya Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#F7F0DD] border-2 border-[#09562C] rounded-xl px-4 py-2.5 font-sans font-bold text-[#09562C] focus:outline-none focus:ring-2 focus:ring-[#FFD81A]"
                />
              </div>

              {/* Handle */}
              <div>
                <label className="font-mono text-xs font-black text-[#09562C] uppercase block mb-1">
                  Handle / Username (@X or GitHub)
                </label>
                <input
                  type="text"
                  placeholder="@priya_builds"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  className="w-full bg-[#F7F0DD] border-2 border-[#09562C] rounded-xl px-4 py-2.5 font-mono font-bold text-[#09562C] focus:outline-none focus:ring-2 focus:ring-[#FFD81A]"
                />
              </div>

              {/* Role Select */}
              <div>
                <label className="font-mono text-xs font-black text-[#09562C] uppercase block mb-1">
                  Primary Superpower / Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-[#F7F0DD] border-2 border-[#09562C] rounded-xl px-4 py-2.5 font-sans font-bold text-[#09562C] focus:outline-none focus:ring-2 focus:ring-[#FFD81A]"
                >
                  {ROLES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              {/* What are you building */}
              <div>
                <label className="font-mono text-xs font-black text-[#09562C] uppercase block mb-1">
                  What are you building at HH Goa 2026?
                </label>
                <input
                  type="text"
                  placeholder="e.g., Local LLM for Beach Shacks, Zero-Knowledge Ticketing"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  className="w-full bg-[#F7F0DD] border-2 border-[#09562C] rounded-xl px-4 py-2.5 font-sans font-bold text-[#09562C] focus:outline-none focus:ring-2 focus:ring-[#FFD81A]"
                />
              </div>

              {/* Favorite Goa Vibe */}
              <div>
                <label className="font-mono text-xs font-black text-[#09562C] uppercase block mb-1">
                  Your Goa Vibe / Moto
                </label>
                <input
                  type="text"
                  placeholder="e.g., Cashew Feni & Deep Learning, Sunset Pitching"
                  value={goaVibe}
                  onChange={(e) => setGoaVibe(e.target.value)}
                  className="w-full bg-[#F7F0DD] border-2 border-[#09562C] rounded-xl px-4 py-2.5 font-sans font-bold text-[#09562C] focus:outline-none focus:ring-2 focus:ring-[#FFD81A]"
                />
              </div>

              {/* Skill Tags */}
              <div>
                <label className="font-mono text-xs font-black text-[#09562C] uppercase block mb-1">
                  Select Badges (Pick 2–4)
                </label>
                <div className="flex flex-wrap gap-2">
                  {SKILL_TAGS.map((skill) => {
                    const isSelected = selectedSkills.includes(skill);
                    return (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => handleSkillToggle(skill)}
                        className={`px-3 py-1 rounded-lg border-2 border-[#09562C] font-mono text-xs font-bold transition-all shadow-goa-sm ${
                          isSelected
                            ? 'bg-[#0E6D38] text-[#FFD81A]'
                            : 'bg-[#F7F0DD] text-[#09562C] hover:bg-[#FFD81A]'
                        }`}
                      >
                        #{skill}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between border-t-2 border-[#09562C] pt-4 mt-2">
              <button
                type="button"
                onClick={() => onStepChange('landing')}
                className="font-mono text-xs font-bold text-[#09562C] underline flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  handleGenerateTitle();
                  onStepChange('selfie');
                }}
                className="bg-[#0E6D38] text-[#FFD81A] border-3 border-[#09562C] px-6 py-3 rounded-xl font-mono text-xs font-black shadow-goa-md hover:bg-[#09562C] transition-all flex items-center gap-2"
              >
                <span>NEXT: UPLOAD PHOTO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: SELFIE PHOTO */}
      {currentStep === 'selfie' && (
        <div className="max-w-xl w-full mx-auto px-4">
          <div className="bg-white border-4 border-[#09562C] rounded-3xl p-6 sm:p-8 shadow-goa-xl flex flex-col gap-6">
            <div className="border-b-2 border-[#09562C] pb-4">
              <div className="font-mono text-xs font-black text-[#0E6D38] uppercase">
                STEP 2 OF 5
              </div>
              <h2 className="font-serif text-3xl font-black text-[#09562C]">
                Upload Your Selfie
              </h2>
              <p className="font-mono text-xs text-gray-600">
                Snap a photo or pick a preset image for your festival passport.
              </p>
            </div>

            <SelfieUploader
              currentSelfieUrl={selfieUrl}
              onSelfieSelected={(url) => setSelfieUrl(url)}
              selectedStickers={selectedStickers}
              onStickerToggle={handleStickerToggle}
            />

            {/* Actions */}
            <div className="flex items-center justify-between border-t-2 border-[#09562C] pt-4 mt-2">
              <button
                type="button"
                onClick={() => onStepChange('details')}
                className="font-mono text-xs font-bold text-[#09562C] underline flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={() => onStepChange('title')}
                className="bg-[#0E6D38] text-[#FFD81A] border-3 border-[#09562C] px-6 py-3 rounded-xl font-mono text-xs font-black shadow-goa-md hover:bg-[#09562C] transition-all flex items-center gap-2"
              >
                <span>NEXT: GENERATE TITLE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 4: TITLE GENERATOR */}
      {currentStep === 'title' && (
        <div className="max-w-xl w-full mx-auto px-4">
          <div className="bg-white border-4 border-[#09562C] rounded-3xl p-6 sm:p-8 shadow-goa-xl flex flex-col gap-6 text-center">
            <div className="border-b-2 border-[#09562C] pb-4">
              <div className="font-mono text-xs font-black text-[#0E6D38] uppercase">
                STEP 3 OF 5
              </div>
              <h2 className="font-serif text-3xl font-black text-[#09562C]">
                Your Official Goa Title
              </h2>
              <p className="font-mono text-xs text-gray-600">
                Generated based on your role, location &amp; builder vibe.
              </p>
            </div>

            {/* Title Display Banner */}
            <div className="bg-[#FFD81A] border-4 border-[#09562C] rounded-2xl p-6 shadow-goa-lg flex flex-col items-center gap-3 relative overflow-hidden">
              <div className="font-mono text-xs font-black text-[#FF0F7B] uppercase flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FF0F7B]" />
                <span>HH GOA 2026 TITLE</span>
              </div>

              <div className="font-serif text-2xl sm:text-3xl font-black text-[#09562C] leading-snug">
                "{generatedTitle || 'Chief Coconut Architect'}"
              </div>

              <button
                onClick={handleRerollTitle}
                className="bg-white text-[#09562C] border-2 border-[#09562C] px-4 py-1.5 rounded-xl font-mono text-xs font-extrabold shadow-goa-sm hover:bg-[#FF0F7B] hover:text-white transition-colors flex items-center gap-1.5 mt-2"
              >
                <Dices className="w-4 h-4" />
                <span>Re-Roll Title 🎲</span>
              </button>
            </div>

            {/* Custom Edit Option */}
            <div className="text-left bg-[#F7F0DD] border-2 border-[#09562C] rounded-xl p-3">
              <label className="font-mono text-[11px] font-black text-[#09562C] uppercase block mb-1">
                Want to customize your title?
              </label>
              <input
                type="text"
                value={generatedTitle}
                onChange={(e) => setGeneratedTitle(e.target.value)}
                className="w-full bg-white border border-[#09562C] rounded-lg px-3 py-1.5 font-serif font-bold text-sm text-[#09562C]"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between border-t-2 border-[#09562C] pt-4 mt-2">
              <button
                type="button"
                onClick={() => onStepChange('selfie')}
                className="font-mono text-xs font-bold text-[#09562C] underline flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={startPrintingProcess}
                className="bg-[#FF0F7B] text-white border-3 border-[#09562C] px-8 py-3 rounded-xl font-mono text-xs font-black shadow-goa-md hover:bg-black transition-all flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>PRINT BUILDER PASS →</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 5: PRINTING ANIMATION */}
      {currentStep === 'printing' && createdProfile && (
        <PassPrinterAnimation
          builder={createdProfile}
          onPrintComplete={handlePrintFinished}
        />
      )}

      {/* STEP 6: DOWNLOAD & SHARE PASS */}
      {currentStep === 'pass' && createdProfile && (
        <div className="max-w-4xl w-full mx-auto px-4 flex flex-col items-center gap-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#FFD81A] border-2 border-[#09562C] px-4 py-1 rounded-full font-mono text-xs font-black shadow-goa-sm mb-2">
              <CheckCircle className="w-4 h-4 text-[#0E6D38]" />
              <span>BUILDER CHECK-IN COMPLETE</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#09562C]">
              Welcome to HH Goa 2026! 🌴
            </h2>
            <p className="font-mono text-sm text-[#0E6D38] font-bold mt-1">
              Your pass is ready. Flip it, download it, or share it on X.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full items-start">
            {/* Left: The Pass Card Component */}
            <div className="md:col-span-7 w-full">
              <PassCard builder={createdProfile} id="final-builder-pass" />
            </div>

            {/* Right: Sharing Actions */}
            <div className="md:col-span-5 w-full">
              <ShareModal builder={createdProfile} passElementId="final-builder-pass" onClose={() => {}} />

              {/* Roster Link */}
              <button
                onClick={() => onStepChange('community')}
                className="w-full mt-4 bg-[#FFD81A] text-[#09562C] border-3 border-[#09562C] p-3.5 rounded-2xl font-mono text-xs font-black shadow-goa-md hover:bg-[#FF0F7B] hover:text-white transition-all text-center flex items-center justify-center gap-2"
              >
                <span>VIEW COMMUNITY ROSTER ({checkedInCount}) →</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
