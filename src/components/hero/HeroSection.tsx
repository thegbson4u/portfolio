import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileDown, Terminal, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import { HeroPortrait } from './HeroPortrait';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between overflow-hidden"
    >
      {/* Decorative Technical Grid / Elements */}
      <div className="absolute top-24 left-6 hidden xl:block font-mono text-[10px] text-[#11134F]/40 select-none">
        <div>SYS_LOC: {personalInfo.contact.coordinates}</div>
        <div>SPEC: AI/ML & COMPUTER VISION</div>
        <div>FRAMEWORK: ROS2 / PYTORCH / YOLOv8</div>
      </div>

      <div className="absolute top-24 right-8 hidden xl:block font-mono text-[10px] text-[#11134F]/40 select-none text-right">
        <div>GRADUATION // 2027</div>
        <div>IEC COLLEGE / AKTU</div>
        <div>STATUS: ACTIVE DISPATCH</div>
      </div>

      {/* Crosshair accents */}
      <div className="absolute top-32 left-1/4 text-[#11134F]/25 font-mono text-sm hidden md:block">+</div>
      <div className="absolute bottom-40 right-1/3 text-[#11134F]/25 font-mono text-sm hidden md:block">+</div>
      <div className="absolute top-1/2 left-10 text-[#11134F]/20 font-mono text-xs hidden lg:block">[0x01_PERCEPTION]</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Editorial Hero Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Minimal Sub-Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#11134F] bg-[#FAF6CE] shadow-brutal-sm mb-6 text-[#11134F]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
              <span className="text-xs font-mono font-bold tracking-tight">
                {personalInfo.contact.availability}
              </span>
            </motion.div>

            {/* Oversized Bold Typography Reference */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1 sm:space-y-2 mb-6"
            >
              <div className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#11134F]/70 font-semibold flex items-center gap-2">
                <span>PORTFOLIO</span>
                <span className="inline-block w-6 h-[1.5px] bg-[#11134F]/40"></span>
                <span>2025 – 2027</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-[#11134F] tracking-tighter leading-[0.95] uppercase">
                Prince<br />
                <span className="relative inline-block">
                  Kumar
                </span>
                <br />
                <span className="text-[#11134F] underline decoration-[#11134F]/30 decoration-wavy decoration-2 underline-offset-8">
                  Maurya
                </span>
              </h1>
            </motion.div>

            {/* Sub-headline / Title Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-block border-l-2 border-[#11134F] pl-4 py-1">
                <p className="text-base sm:text-lg md:text-xl font-bold text-[#11134F] tracking-tight">
                  {personalInfo.roleTitle}
                </p>
                <p className="text-sm font-mono text-[#11134F]/75 mt-1 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#11134F]" />
                  <span>{personalInfo.contact.location}</span>
                </p>
              </div>
            </motion.div>

            {/* Introduction Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-[#11134F]/85 font-medium leading-relaxed max-w-2xl mb-8"
            >
              {personalInfo.introduction}
            </motion.p>

            {/* Action Buttons: Minimal Outlined Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#11134F] text-[#FAF6CE] font-mono font-bold text-xs sm:text-sm tracking-tight shadow-brutal hover:bg-[#1D2175] hover:shadow-brutal-lg transition-all duration-200 active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <span>View Engineering Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="/assets/documents/resume.pdf"
                download="Prince_Kumar_Maurya_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-1.5 border-[#11134F] text-[#11134F] font-mono font-bold text-xs sm:text-sm tracking-tight bg-[#FAF6CE] shadow-brutal-sm hover:bg-[#11134F] hover:text-[#FAF6CE] transition-all duration-200 active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-1.5 border-[#11134F]/50 text-[#11134F] font-mono font-semibold text-xs sm:text-sm tracking-tight hover:border-[#11134F] hover:bg-[#11134F]/5 transition-all duration-200"
              >
                <span>Direct Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Circular Portrait matching visual reference */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full flex justify-center"
            >
              <HeroPortrait alt="Prince Kumar Maurya" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Technical Telemetry Ticker */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 pt-6 border-t border-[#11134F]/15">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#11134F]/75">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#11134F]" />
            <span className="font-bold text-[#11134F]">CORE FOCUS:</span>
            <span>Edge Computer Vision</span>
            <span className="text-[#11134F]/30">•</span>
            <span>RAG & Vector Retrieval</span>
            <span className="text-[#11134F]/30">•</span>
            <span>Robotics Perception</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline">IEC CET / AKTU (2027)</span>
            <span className="hidden md:inline text-[#11134F]/30">•</span>
            <a
              href="https://github.com/thegbson4u"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#11134F] hover:underline"
            >
              github.com/thegbson4u ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
