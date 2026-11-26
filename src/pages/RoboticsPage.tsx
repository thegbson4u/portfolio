import React from 'react';
import { roboticsInitiatives } from '../data/robotics';
import { AdaptiveImage } from '../components/common/AdaptiveImage';
import { Cpu, Compass, ArrowUpRight, Terminal, Shield, GitBranch, Radio, CheckCircle2 } from 'lucide-react';

export const RoboticsPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b-2 border-[#11134F]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-signal mb-2">
              <span className="w-2 h-2 bg-signal"></span>
              AUTONOMOUS FIELD & RESEARCH PLATFORMS
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#11134F] tracking-tight uppercase">
              Robotics & Autonomous Systems
            </h1>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-[#11134F]/75">
            <div>TEAM RUDHRA (IEC) & IIT DELHI TOTO PLATFORM</div>
            <div>ROS 2 • 2D LIDAR SLAM • SENSOR FUSION</div>
          </div>
        </div>

        {/* Overview Banner */}
        <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#11134F] bg-[#F2ECC0]/70 shadow-brutal mb-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-signal">
              <Radio className="w-4 h-4 animate-pulse text-signal" />
              <span>PHYSICAL ROBOTICS ARENA & LAB EXECUTION</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#11134F] tracking-tight">
              Engineering deterministic autonomy under national competition constraints.
            </h2>
            <p className="text-xs sm:text-sm text-[#11134F]/85 font-medium leading-relaxed">
              Leading the automation division at Team Rudhra across DD Robocon 2026 and ABU Robocon 2025. Bridging high-level neural vision (YOLOv8s-OBB) with low-level microcontrollers, LiDAR SLAM, and real-time state machines.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 shrink-0 font-mono text-xs">
            <div className="p-3 rounded-xl border border-[#11134F]/20 bg-[#FAF6CE]">
              <span className="text-[10px] text-[#11134F]/60 block uppercase">Telemetry Freq</span>
              <span className="text-lg font-black text-[#11134F]">60 Hz IPC</span>
            </div>
            <div className="p-3 rounded-xl border border-[#11134F]/20 bg-[#FAF6CE]">
              <span className="text-[10px] text-[#11134F]/60 block uppercase">SLAM Precision</span>
              <span className="text-lg font-black text-[#11134F]">2D Costmap</span>
            </div>
          </div>
        </div>

        {/* Initiatives Breakdown */}
        <div className="space-y-16">
          {roboticsInitiatives.map((item) => (
            <section
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
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#11134F] tracking-tight">
                    {item.title}
                  </h2>
                  <div className="text-sm sm:text-base font-bold text-signal mt-1">
                    {item.role} {item.mentorOrOrg && `• ${item.mentorOrOrg}`}
                  </div>
                </div>

                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-full border-1.5 border-[#11134F] text-xs font-mono font-bold text-[#11134F] hover:bg-[#11134F] hover:text-[#FAF6CE] transition-all shadow-brutal-sm self-start lg:self-center"
                  >
                    <GitBranch className="w-3.5 h-3.5 text-signal" />
                    <span>Robotics Codebase</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-[#11134F]/85 font-medium leading-relaxed my-6">
                {item.summary}
              </p>

              {/* Main Content Layout: Media & Hardware Specification Matrix */}
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
                    <span>ASSET DIR: {item.assetFolder}</span>
                    <span className="text-signal font-bold">VERIFIED PLATFORM</span>
                  </div>
                </div>

                {/* Technical Specifications Matrix */}
                <div className="lg:col-span-7 bg-[#FAF6CE] border border-[#11134F]/20 rounded-xl p-5 sm:p-6 shadow-sm">
                  <div className="text-xs font-mono font-bold uppercase text-[#11134F] tracking-wider mb-4 flex items-center gap-2 pb-2 border-b border-[#11134F]/15">
                    <Compass className="w-4 h-4 text-signal" />
                    <span>Hardware & Sensor Specification Matrix:</span>
                  </div>
                  <div className="space-y-3 font-mono text-xs">
                    {item.specifications.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-[#11134F]/10 gap-1"
                      >
                        <span className="text-[#11134F]/60 uppercase font-bold">{spec.label}:</span>
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
                <div className="text-xs font-mono font-bold uppercase text-[#11134F]/70 tracking-wider mb-4 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-signal" />
                  <span>Engineering Pillars & Core Mandates:</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.technicalPillars.map((pillar, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-4 sm:p-5 rounded-xl border border-[#11134F]/15 bg-[#FAF6CE] hover:border-[#11134F]/40 transition-colors"
                    >
                      <h3 className="font-bold text-sm text-[#11134F] mb-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-signal"></span>
                        {pillar.title}
                      </h3>
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
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
