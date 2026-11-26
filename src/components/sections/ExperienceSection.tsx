import React from 'react';
import { experiences } from '../../data/experience';
import { Calendar, MapPin, Award } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-[#11134F]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 pb-6 border-b border-[#11134F]/15">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#11134F]/70 mb-2">
              <span className="w-2 h-2 bg-[#11134F]"></span>
              SECTION // 03
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#11134F] tracking-tight uppercase">
              Professional Experience
            </h2>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-[#11134F]/70">
            <div>INDUSTRY INTERNSHIPS & ENGINEERING SQUADS</div>
            <div>TRACK RECORD // APPLIED MACHINE LEARNING & CV</div>
          </div>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl border-2 border-[#11134F] bg-[#FAF6CE] shadow-brutal hover:shadow-brutal-lg transition-all duration-300 relative"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-[#11134F]/15">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase bg-[#11134F] text-[#FAF6CE]">
                      {exp.type.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono text-[#11134F]/70 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="text-xs font-mono text-[#11134F]/70 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#11134F] tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-base sm:text-lg font-bold text-[#11134F]/85 mt-0.5">
                    {exp.organization}
                  </div>
                </div>

                {exp.highlightMetric && (
                  <div className="lg:text-right">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#11134F]/30 bg-[#FAF6CE] text-xs font-mono font-semibold text-[#11134F] shadow-sm">
                      <Award className="w-3.5 h-3.5 text-[#11134F]" />
                      <span>{exp.highlightMetric}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Responsibilities */}
              <div className="my-6">
                <div className="text-xs font-mono font-bold uppercase text-[#11134F]/60 tracking-wider mb-3">
                  Scope of Impact & Mandate:
                </div>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#11134F] mt-2 shrink-0"></span>
                      <span className="text-sm text-[#11134F]/85 font-medium leading-relaxed">
                        {resp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies footer */}
              <div className="pt-4 border-t border-[#11134F]/15 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-semibold text-[#11134F]/70 mr-2">
                  STACK:
                </span>
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium border border-[#11134F]/20 bg-[#FAF6CE] text-[#11134F]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
