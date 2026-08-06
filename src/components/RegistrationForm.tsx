import React from 'react';
import { motion } from 'motion/react';
import { User, Code2, Briefcase, MapPin, Sparkles, AlertCircle, FileText } from 'lucide-react';
import {
  BuilderData,
  STACK_OPTIONS,
  ROLE_OPTIONS,
  CITY_SUGGESTIONS,
  ONE_WORD_SUGGESTIONS,
} from '../types';
import { SearchableCombobox } from './SearchableCombobox';
import { TagSelector } from './TagSelector';

interface RegistrationFormProps {
  builderData: BuilderData;
  onChange: (field: keyof BuilderData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  errors: {
    fullName?: string;
    builderStack?: string;
    currentRole?: string;
  };
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  builderData,
  onChange,
  onSubmit,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {/* Travel Registration Card Container */}
      <div className="bg-[#F7F0DD] border-2 border-[#09562C] rounded-3xl p-5 sm:p-7 shadow-goa-lg relative z-10 text-[#09562C]">
        {/* Card Header Badge */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b-2 border-[#09562C]/20">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-[#09562C] shrink-0" />
            <h2 className="font-serif text-xl sm:text-2xl font-black text-[#09562C]">
              Builder Profile Card
            </h2>
          </div>
          <span className="font-mono text-[10px] font-black px-2.5 py-1 bg-[#FFD81A] border border-[#09562C] rounded-full uppercase shadow-xs">
            HH GOA 2026
          </span>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* FIELD 1: Full Name */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-1.5"
          >
            <label className="flex items-center gap-1.5 font-mono text-xs font-black text-[#09562C] uppercase tracking-wider">
              <User className="w-4 h-4 text-[#09562C]" />
              <span>Full Name</span>
              <span className="text-[#FF0F7B]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={builderData.fullName}
                onChange={(e) => onChange('fullName', e.target.value)}
                placeholder="Enter your full name"
                className={`w-full px-4 py-3 rounded-2xl bg-white border-2 font-sans font-bold text-base text-[#09562C] placeholder-[#09562C]/40 outline-none transition-all shadow-goa-sm focus:bg-white ${
                  errors.fullName
                    ? 'border-[#FF0F7B] ring-2 ring-[#FF0F7B]/20'
                    : 'border-[#09562C] focus:border-[#09562C] focus:ring-3 focus:ring-[#FFD81A]'
                }`}
              />
            </div>
            {errors.fullName && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-xs font-bold text-[#FF0F7B] flex items-center gap-1 pt-0.5"
              >
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.fullName}</span>
              </motion.p>
            )}
          </motion.div>

          {/* TWO COLUMN GRID FOR SEARCHABLE COMBOBOXES ON TABLET/DESKTOP */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* FIELD 2: Builder Stack Searchable Combobox */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="space-y-1.5"
            >
              <label className="flex items-center gap-1.5 font-mono text-xs font-black text-[#09562C] uppercase tracking-wider">
                <Code2 className="w-4 h-4 text-[#0E6D38]" />
                <span>Builder Stack</span>
                <span className="text-[#FF0F7B]">*</span>
              </label>
              
              <SearchableCombobox
                value={builderData.builderStack || ''}
                onChange={(val) => onChange('builderStack', val)}
                options={STACK_OPTIONS}
                placeholder="Select primary stack"
                searchPlaceholder="Search your primary stack..."
                icon={<Code2 className="w-4 h-4 text-[#0E6D38]" />}
                hasError={Boolean(errors.builderStack)}
              />

              {errors.builderStack && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-mono text-xs font-bold text-[#FF0F7B] flex items-center gap-1 pt-0.5"
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.builderStack}</span>
                </motion.p>
              )}
            </motion.div>

            {/* FIELD 3: Current Role Searchable Combobox */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="space-y-1.5"
            >
              <label className="flex items-center gap-1.5 font-mono text-xs font-black text-[#09562C] uppercase tracking-wider">
                <Briefcase className="w-4 h-4 text-[#09562C]" />
                <span>Current Role</span>
                <span className="text-[#FF0F7B]">*</span>
              </label>

              <SearchableCombobox
                value={builderData.currentRole || ''}
                onChange={(val) => onChange('currentRole', val)}
                options={ROLE_OPTIONS}
                placeholder="Select your role"
                searchPlaceholder="Search your current role..."
                icon={<Briefcase className="w-4 h-4 text-[#09562C]" />}
                hasError={Boolean(errors.currentRole)}
              />

              {errors.currentRole && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-mono text-xs font-bold text-[#FF0F7B] flex items-center gap-1 pt-0.5"
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.currentRole}</span>
                </motion.p>
              )}
            </motion.div>
          </div>

          {/* FIELD 4: City Autocomplete Combobox */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="space-y-1.5"
          >
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-1.5 font-mono text-xs font-black text-[#09562C] uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#09562C]" />
                <span>City</span>
              </label>
              <span className="font-mono text-[10px] text-[#0E6D38] font-bold">
                Optional
              </span>
            </div>

            <SearchableCombobox
              value={builderData.city || ''}
              onChange={(val) => onChange('city', val)}
              options={CITY_SUGGESTIONS}
              placeholder="e.g. Chennai"
              searchPlaceholder="Search your city..."
              icon={<MapPin className="w-4 h-4 text-[#09562C]" />}
              allowCustom={true}
              customLabelPrefix="Set city as"
            />
          </motion.div>

          {/* FIELD 5: One Word That Describes You Tag Selector */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="space-y-1.5 pt-1"
          >
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-1.5 font-mono text-xs font-black text-[#09562C] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#09562C]" />
                <span>One Word That Describes You</span>
              </label>
              <span className="font-mono text-[10px] text-[#0E6D38] font-bold">
                Optional
              </span>
            </div>

            <TagSelector
              value={builderData.oneWord || ''}
              onChange={(val) => onChange('oneWord', val)}
              suggestions={ONE_WORD_SUGGESTIONS}
            />
          </motion.div>
        </form>
      </div>
    </div>
  );
};
