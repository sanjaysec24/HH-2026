import React, { useState } from 'react';
import { BuilderProfile } from '../types';
import { PassCard } from './PassCard';
import { PalmTreeIcon, DirectionBoard } from './VectorIllustrations';
import { Search, Filter, Sparkles, PlusCircle, X, Users, MapPin } from 'lucide-react';

interface CommunityWallProps {
  builders: BuilderProfile[];
  onStartCheckIn: () => void;
}

export const CommunityWall: React.FC<CommunityWallProps> = ({
  builders,
  onStartCheckIn,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoleFilter, setSelectedRoleFilter] = useState('ALL');
  const [activePassModal, setActivePassModal] = useState<BuilderProfile | null>(null);

  const roles = [
    'ALL',
    'AI Architect',
    'Full-Stack Craftsman',
    'UI/UX Designer',
    'Indie Hacker',
    'Web3 / Protocol Dev',
  ];

  const filteredBuilders = builders.filter((b) => {
    const matchesQuery =
      b.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.project.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole =
      selectedRoleFilter === 'ALL' ||
      b.role.toLowerCase() === selectedRoleFilter.toLowerCase();

    return matchesQuery && matchesRole;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-8">
      {/* Hero Banner */}
      <div className="bg-[#0E6D38] border-4 border-[#09562C] rounded-3xl p-6 sm:p-8 text-white shadow-goa-xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#FFD81A] text-[#09562C] border-2 border-[#09562C] px-3 py-1 rounded-full font-mono text-xs font-black shadow-goa-sm mb-3">
            <Users className="w-4 h-4 text-[#0E6D38]" />
            <span>ROSTER OF CHECKED-IN BUILDERS</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-white leading-tight">
            Goa Festival Roster 🌴
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#F7F0DD] mt-2 font-medium">
            Explore creators, hackers, and craftsmen already checked in for HH Goa 2026.
          </p>
        </div>

        <button
          onClick={onStartCheckIn}
          className="relative z-10 bg-[#FFD81A] text-[#09562C] border-4 border-[#09562C] px-6 py-3.5 rounded-2xl font-mono text-sm font-black shadow-goa-lg hover:bg-[#FF0F7B] hover:text-white transition-all transform hover:-translate-y-1 flex items-center gap-2"
        >
          <PlusCircle className="w-5 h-5" />
          <span>CHECK IN YOUR PASS NOW</span>
        </button>

        {/* Decorative background vectors */}
        <div className="absolute right-4 bottom-0 opacity-15 pointer-events-none hidden md:block">
          <PalmTreeIcon className="w-64 h-64" color="#FFD81A" />
        </div>
      </div>

      {/* Controls: Search & Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white border-2 border-[#09562C] p-4 rounded-2xl shadow-goa-md">
        {/* Search input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#0E6D38]" />
          <input
            type="text"
            placeholder="Search builder, handle, project..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#F7F0DD] border-2 border-[#09562C] rounded-xl pl-9 pr-4 py-2 font-mono text-xs text-[#09562C] font-bold placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD81A]"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          <Filter className="w-4 h-4 text-[#0E6D38] flex-shrink-0" />
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRoleFilter(role)}
              className={`px-3 py-1.5 rounded-xl border-2 border-[#09562C] font-mono text-xs font-extrabold whitespace-nowrap transition-all shadow-goa-sm ${
                selectedRoleFilter === role
                  ? 'bg-[#FF0F7B] text-white'
                  : 'bg-[#F7F0DD] text-[#09562C] hover:bg-[#FFD81A]'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Builders Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBuilders.map((builder) => (
          <div
            key={builder.id}
            onClick={() => setActivePassModal(builder)}
            className="bg-white border-3 border-[#09562C] rounded-2xl p-4 shadow-goa-md hover:shadow-goa-lg hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-[#FFD81A] border border-[#09562C] text-[#09562C] font-mono text-[10px] font-black px-2 py-0.5 rounded">
                  {builder.serialNumber}
                </span>
                <span className="font-mono text-[10px] text-gray-500 font-bold">
                  {builder.checkedInAt}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-14 h-14 rounded-xl border-2 border-[#09562C] overflow-hidden bg-[#F7F0DD] flex-shrink-0">
                  <img
                    src={builder.selfieUrl}
                    alt={builder.fullName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[10px] text-[#0E6D38] font-bold uppercase truncate">
                    {builder.role}
                  </div>
                  <div className="font-serif text-lg font-bold text-[#09562C] truncate">
                    {builder.fullName}
                  </div>
                  <div className="font-mono text-xs text-gray-600 truncate">
                    {builder.handle}
                  </div>
                </div>
              </div>

              {/* Title Badge */}
              <div className="bg-[#F7F0DD] border border-[#09562C] rounded-lg p-2 mb-3">
                <div className="font-mono text-[9px] font-extrabold text-[#FF0F7B] uppercase flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#FF0F7B]" />
                  <span>Goa Title</span>
                </div>
                <div className="font-serif text-xs font-bold text-[#09562C] truncate">
                  "{builder.title}"
                </div>
              </div>
            </div>

            <div className="border-t border-dashed border-[#09562C] pt-2 flex items-center justify-between font-mono text-[10px]">
              <span className="text-[#0E6D38] font-bold flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#FF0F7B]" />
                {builder.project || 'HH Goa Builder'}
              </span>
              <span className="text-[#FF0F7B] font-extrabold group-hover:underline">
                View Pass →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Full Pass Preview Modal */}
      {activePassModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#F7F0DD] border-4 border-[#09562C] rounded-3xl p-6 max-w-lg w-full relative shadow-goa-xl">
            <button
              onClick={() => setActivePassModal(null)}
              className="absolute top-4 right-4 bg-[#FF0F7B] text-white border-2 border-[#09562C] p-2 rounded-full hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-4">
              <div className="font-serif text-2xl font-black text-[#09562C]">
                Official Builder Pass
              </div>
              <div className="font-mono text-xs font-bold text-[#0E6D38]">
                HH Goa 2026 Verification
              </div>
            </div>

            <PassCard builder={activePassModal} id="modal-pass-card" />
          </div>
        </div>
      )}
    </div>
  );
};
