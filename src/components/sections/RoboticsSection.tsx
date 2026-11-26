import React from 'react';
import { roboticsInitiatives } from '../../data/robotics';
import { AdaptiveImage } from '../common/AdaptiveImage';
import { Compass, ArrowUpRight } from 'lucide-react';

export const RoboticsSection: React.FC = () => {
  return (
    <section id="robotics" className="py-24 border-t border-[#11134F]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 pb-6 border-b border-[#11134F]/15">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#11134F]/70 mb-2">
              <span className="w-2 h-2 bg-[#11134F]"></span>
              SECTION // 05
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#11134F] tracking-tight uppercase">
              Robotics & Autonomous Systems
            </h2>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-[#11134F]/70">
            <div>TEAM RUDHRA (IEC) & IIT DELHI TOTO PLATFORM</div>
            <div>ROS 2 • COMPUTER VISION • PERCEPTION PIPELINES</div>
          </div>
        </div>

        {/* Initiatives Breakdown */}
        <div className="space-y-16">
          {roboticsInitiatives.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-10 rounded-2xl border-2 border-[#11134F] bg-[#FAF6CE] shadow-brutal relative"
            >
              {/* Header Bar */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#11134F]/15">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-[#11134F] text-[#FAF6CE]">
                      {item.eventOrPlatform}
                    </span>
                    <span className="text-xs font-mono text-[#11134F]/70">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#11134F] tracking-tight">
                    {item.title}
                  </h3>
                  <div className="text-base font-bold text-[#11134F]/85 mt-1">
                    {item.role} {item.mentorOrOrg && `• ${item.mentorOrOrg}`}
                  </div>
                </div>

                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-1.5 border-[#11134F] text-xs font-mono font-bold text-[#11134F] hover:bg-[#11134F] hover:text-[#FAF6CE] transition-all shadow-brutal-sm self-start lg:self-center"
                  >
                    <span>Robotics Codebase</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-[#11134F]/85 font-medium leading-relaxed my-6">
                {item.summary}
              </p>

              {/* Main Content Layout: Media & Specs */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-start">
                {/* Media Container */}
                <div className="lg:col-span-5">
                  <AdaptiveImage
                    src={`${item.assetFolder}main.png`}
                    alt={item.title}
                    aspectRatio="video"
                    type="robotics"
                    label={`${item.id.toUpperCase()} // HARDWARE PLATFORM`}
                    expectedDimensions="1280 × 800"
                  />
                  <div className="mt-2 text-[10px] font-mono text-[#11134F]/60 flex items-center justify-between px-1">
                    <span>DIR: {item.assetFolder}</span>
                    <span>STATUS: RECEPTIVE</span>
                  </div>
                </div>

                {/* Technical Specifications Ledger */}
                <div className="lg:col-span-7 bg-[#FAF6CE] border border-[#11134F]/20 rounded-xl p-5 shadow-sm">
                  <div className="text-xs font-mono font-bold uppercase text-[#11134F] tracking-wider mb-3 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#11134F]" />
                    <span>Perception & Hardware Architecture:</span>
                  </div>
                  <div className="space-y-2.5 font-mono text-xs">
                    {item.specifications.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 border-b border-[#11134F]/10 gap-1"
                      >
                        <span className="text-[#11134F]/60 uppercase">{spec.label}:</span>
                        <span className="font-semibold text-[#11134F] text-left sm:text-right">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical Pillars Grid */}
              <div className="mt-6 pt-6 border-t border-[#11134F]/15">
                <div className="text-xs font-mono font-bold uppercase text-[#11134F]/60 tracking-wider mb-4">
                  Engineering Pillars & Core Mandates:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.technicalPillars.map((pillar, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-4 rounded-xl border border-[#11134F]/15 bg-[#FAF6CE] hover:border-[#11134F]/40 transition-colors"
                    >
                      <h4 className="font-bold text-sm text-[#11134F] mb-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#11134F]"></span>
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-[#11134F]/80 leading-relaxed mb-3 font-normal">
                        {pillar.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {pillar.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono font-medium border border-[#11134F]/20 text-[#11134F]"
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
      </div>
    </section>
  );
};
