import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-[#11134F]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 pb-6 border-b border-[#11134F]/15">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#11134F]/70 mb-2">
              <span className="w-2 h-2 bg-[#11134F]"></span>
              SECTION // 01
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#11134F] tracking-tight uppercase">
              About & Engineering Philosophy
            </h2>
          </div>
          <div className="text-right font-mono text-xs text-[#11134F]/70">
            <div>SYSTEM ARCHITECTURE & PERCEPTION</div>
            <div>AUTONOMY // EDGE INFERENCE</div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#11134F] leading-snug">
              Bridging mathematical machine learning with hard physical-world robotics and deterministic software pipelines.
            </h3>

            {personalInfo.bioDetailed.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base text-[#11134F]/85 leading-relaxed font-normal"
              >
                {paragraph}
              </p>
            ))}

            {/* Core Competencies Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Real-Time Spatial Computer Vision (YOLOv8-OBB, OpenCV)',
                'Retrieval-Augmented Generation (FAISS, LangChain, LLMs)',
                'Robotics Middleware & Sensor Fusion (ROS 2, LiDAR)',
                'Production REST Microservices (FastAPI, Python)',
                'Dataset Curation & Edge Quantization',
                'Embedded Linux Hardware Integration (RPi 5)',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl border border-[#11134F]/15 bg-[#FAF6CE] shadow-sm hover:border-[#11134F]/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#11134F] mt-0.5 shrink-0" />
                  <span className="text-xs font-mono font-medium text-[#11134F] leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Educational & Structural Fact Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Academic Snapshot Card */}
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#11134F] bg-[#FAF6CE] shadow-brutal relative overflow-hidden">
              <div className="absolute top-3 right-4 font-mono text-[10px] text-[#11134F]/40">
                CREDENTIALS // 01
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#11134F] text-[#FAF6CE] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[#11134F]/70">
                    ACADEMIC FOUNDATION
                  </h4>
                  <p className="text-lg font-bold text-[#11134F]">
                    B.Tech Computer Science & Eng.
                  </p>
                </div>
              </div>

              <div className="space-y-2 border-t border-[#11134F]/15 pt-4 font-mono text-xs text-[#11134F]/85">
                <div className="flex justify-between py-1 border-b border-[#11134F]/10">
                  <span className="text-[#11134F]/60">INSTITUTION:</span>
                  <span className="font-semibold text-right">IEC College of Eng. & Tech</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#11134F]/10">
                  <span className="text-[#11134F]/60">AFFILIATION:</span>
                  <span className="font-semibold text-right">AKTU (State Technical Univ)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#11134F]/10">
                  <span className="text-[#11134F]/60">GRADUATION:</span>
                  <span className="font-bold text-[#11134F]">2027</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#11134F]/60">ROBOTICS LEAD:</span>
                  <span className="font-semibold text-right">Team Rudhra (Automation Head)</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border-1.5 border-[#11134F] bg-[#FAF6CE] shadow-brutal-sm">
                <div className="text-2xl sm:text-3xl font-black text-[#11134F] font-mono">
                  06+
                </div>
                <div className="text-xs font-mono font-semibold text-[#11134F]/75 mt-1 uppercase">
                  Production & Research Projects
                </div>
              </div>

              <div className="p-4 rounded-xl border-1.5 border-[#11134F] bg-[#FAF6CE] shadow-brutal-sm">
                <div className="text-2xl sm:text-3xl font-black text-[#11134F] font-mono">
                  02
                </div>
                <div className="text-xs font-mono font-semibold text-[#11134F]/75 mt-1 uppercase">
                  Robocon Arenas (ABU / DD)
                </div>
              </div>

              <div className="p-4 rounded-xl border-1.5 border-[#11134F] bg-[#FAF6CE] shadow-brutal-sm">
                <div className="text-2xl sm:text-3xl font-black text-[#11134F] font-mono">
                  03
                </div>
                <div className="text-xs font-mono font-semibold text-[#11134F]/75 mt-1 uppercase">
                  Verified Industry & NPTEL Certs
                </div>
              </div>

              <div className="p-4 rounded-xl border-1.5 border-[#11134F] bg-[#FAF6CE] shadow-brutal-sm">
                <div className="text-2xl sm:text-3xl font-black text-[#11134F] font-mono">
                  IIT-D
                </div>
                <div className="text-xs font-mono font-semibold text-[#11134F]/75 mt-1 uppercase">
                  TOTO Mobile Robot Research
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
