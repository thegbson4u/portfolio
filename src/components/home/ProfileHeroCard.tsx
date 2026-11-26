import React, { useState, useEffect } from 'react';
import { BadgeCheck, ArrowRight, FileDown, MapPin } from 'lucide-react';
import { AdaptiveImage } from '../common/AdaptiveImage';

const ROLES = [
  'AI/ML Engineer',
  'Computer Vision Developer',
  'Generative AI Specialist',
  'Robotics Systems Builder',
];

export const ProfileHeroCard: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = ROLES[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full rounded-2xl border border-dashed border-black/15 dark:border-white/15 bg-white dark:bg-[#161619] p-3 sm:p-4 transition-colors">
      {/* Top Banner Video & Overlapping Avatar */}
      <div className="relative">
        <div className="h-44 sm:h-56 w-full overflow-hidden rounded-2xl border border-dashed border-black/15 dark:border-white/15 bg-gradient-to-br from-[#ECE8E9] via-[#F5E6EC] to-[#EAE6E8] dark:from-[#1E1E24] dark:via-[#2A1824] dark:to-[#121217]">
          <video
            src="/assets/profile/hero-bg.mp4"
            poster="/assets/profile/hero-poster.png"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />

          {/* Top telemetry in banner */}
          <div className="absolute top-3 left-3 text-[10px] font-mono text-[#5C5E6B] dark:text-[#9A9AA3] bg-white/70 dark:bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md border border-black/10 dark:border-white/10 flex items-center gap-1.5 z-10 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E05A87] animate-ping" />
            <span>RESEARCH & EDGE CV DISPATCH</span>
          </div>

          <div className="absolute top-3 right-3 text-[10px] font-mono text-[#5C5E6B] dark:text-[#9A9AA3] hidden sm:block bg-white/70 dark:bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md border border-black/10 dark:border-white/10 z-10 pointer-events-none">
            <span>AKTU '27 • ROS2 / OBB</span>
          </div>
        </div>

        {/* Overlapping Avatar and Action CTAs row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-12 px-2 sm:px-3 mb-4 gap-4">
          <div className="relative z-10 ml-2 sm:ml-5 h-24 w-24 overflow-hidden rounded-full border-2 border-rose-500 shadow-xl bg-[#FAF8F8] dark:bg-[#161619]">
            <AdaptiveImage
              assetPath="/assets/profile/portrait.png"
              alt="Prince Kumar Maurya"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Action CTAs aligned right on desktop */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 z-10">
            <button
              onClick={scrollToProjects}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-semibold bg-[#E05A87] hover:bg-[#C83E6B] text-white shadow-sm transition-all focus:outline-none"
            >
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="/assets/documents/resume.pdf"
              download="Prince_Kumar_Maurya_Resume.pdf"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-semibold border border-dashed border-black/25 dark:border-white/25 bg-black/5 dark:bg-white/5 text-[#14151C] dark:text-[#F4F4F6] hover:border-[#E05A87] hover:text-[#E05A87] transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>View Resume</span>
              <span className="text-[10px] text-[#5C5E6B] dark:text-[#9A9AA3]">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Identity & Cycling Role Line */}
      <div className="px-2 sm:px-3">
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#14151C] dark:text-[#F4F4F6]">
              Prince Kumar Maurya
            </h1>
            <BadgeCheck className="w-5 h-5 text-[#C83E6B] dark:text-[#E05A87]" />
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E05A87]/15 text-[#C83E6B] dark:text-[#E05A87] font-bold border border-[#E05A87]/30">
              Open to Roles
            </span>
          </div>

          {/* Cycling Rose Typewriter Role */}
          <div className="font-mono text-sm sm:text-base font-semibold text-[#C83E6B] dark:text-[#E05A87] h-6 flex items-center">
            <span>{displayText}</span>
            <span className="inline-block w-[2px] h-4 bg-[#E05A87] ml-0.5 animate-pulse" />
          </div>

          {/* Location & Academic Meta */}
          <p className="text-xs font-mono text-[#5C5E6B] dark:text-[#9A9AA3] flex items-center gap-1.5 flex-wrap pt-0.5">
            <MapPin className="w-3.5 h-3.5 text-[#E05A87] shrink-0" />
            <span>B.Tech CSE '27</span>
            <span className="opacity-40">·</span>
            <span>Greater Noida, India</span>
            <span className="opacity-40">·</span>
            <span>28.4744° N, 77.5040° E</span>
          </p>
        </div>
      </div>
    </div>
  );
};
