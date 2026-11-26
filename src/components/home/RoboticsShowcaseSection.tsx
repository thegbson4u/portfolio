import React from 'react';
import { roboticsInitiatives } from '../../data/robotics';
import { AdaptiveImage } from '../common/AdaptiveImage';
import { Compass, ArrowUpRight, GitBranch } from 'lucide-react';

export const RoboticsShowcaseSection: React.FC = () => {
  return (
    <section id="robotics" className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-dashed border-black/10 dark:border-white/10">
        <div>
          <h2 className="font-serif italic text-3xl sm:text-4xl font-normal tracking-tight text-[#14151C] dark:text-[#F4F4F6]">
            Robotics
          </h2>
          <p className="text-xs font-mono text-[#5C5E6B] dark:text-[#9A9AA3] mt-1">
            Autonomous perception, 2D LiDAR SLAM, and real-time arena platforms.
          </p>
        </div>
        <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-[#5C5E6B] dark:text-[#9A9AA3] self-start sm:self-auto">
          FIELD & LAB PERCEPTION
        </span>
      </div>

      {/* Robotics Cards */}
      <div className="space-y-5">
        {roboticsInitiatives.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-dashed border-black/15 dark:border-white/15 bg-white dark:bg-[#161619] p-5 sm:p-6 transition-colors space-y-5"
          >
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-dashed border-black/10 dark:border-white/10">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-[#E05A87]/15 text-[#C83E6B] dark:text-[#E05A87] border border-[#E05A87]/25">
                    {item.eventOrPlatform}
                  </span>
                  <span className="text-xs font-mono text-[#5C5E6B] dark:text-[#9A9AA3]">
                    {item.period}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#14151C] dark:text-[#F4F4F6]">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-[#C83E6B] dark:text-[#E05A87] font-medium mt-0.5">
                  {item.role} {item.mentorOrOrg && `· ${item.mentorOrOrg}`}
                </p>
              </div>

              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold border border-dashed border-black/20 dark:border-white/20 text-[#14151C] dark:text-[#F4F4F6] hover:border-[#E05A87] hover:text-[#E05A87] transition-all"
                >
                  <GitBranch className="w-3.5 h-3.5 text-[#E05A87]" />
                  <span>Codebase</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-[#5C5E6B] dark:text-[#9A9AA3] leading-relaxed">
              {item.summary}
            </p>

            {/* Media & Specification Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
              <div className="md:col-span-5">
                <AdaptiveImage
                  src={`${item.assetFolder}main.png`}
                  alt={item.title}
                  aspectRatio="video"
                  type="robotics"
                  label={`${item.id.toUpperCase()} // PLATFORM`}
                  expectedDimensions="1280 × 800"
                  className="rounded-xl w-full"
                />
              </div>

              <div className="md:col-span-7 p-4 rounded-xl border border-dashed border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 space-y-2.5">
                <div className="text-[11px] font-mono font-bold uppercase text-[#14151C] dark:text-[#F4F4F6] flex items-center gap-1.5 pb-1 border-b border-dashed border-black/10 dark:border-white/10">
                  <Compass className="w-3.5 h-3.5 text-[#E05A87]" />
                  <span>Hardware & Sensor Specification Matrix:</span>
                </div>
                <div className="space-y-1.5 font-mono text-xs">
                  {item.specifications.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex justify-between py-1 border-b border-black/5 dark:border-white/5 gap-2 text-[11px]"
                    >
                      <span className="text-[#5C5E6B] dark:text-[#9A9AA3] uppercase font-medium">
                        {spec.label}:
                      </span>
                      <span className="text-[#14151C] dark:text-[#F4F4F6] font-semibold text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Pillars */}
            <div className="pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.technicalPillars.map((p, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-3.5 rounded-xl border border-dashed border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 space-y-1"
                  >
                    <div className="text-xs font-bold text-[#14151C] dark:text-[#F4F4F6] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E05A87]" />
                      <span>{p.title}</span>
                    </div>
                    <p className="text-[11px] text-[#5C5E6B] dark:text-[#9A9AA3] leading-relaxed">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1.5">
                      {p.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.2 rounded text-[9px] font-mono bg-black/5 dark:bg-white/5 text-[#5C5E6B] dark:text-[#9A9AA3]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
