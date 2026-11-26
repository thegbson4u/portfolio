import React from 'react';
import { educationList } from '../../data/education';
import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 border-t border-[#11134F]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 pb-6 border-b border-[#11134F]/15">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#11134F]/70 mb-2">
              <span className="w-2 h-2 bg-[#11134F]"></span>
              SECTION // 07
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#11134F] tracking-tight uppercase">
              Academic Background
            </h2>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-[#11134F]/70">
            <div>COMPUTER SCIENCE & ENGINEERING</div>
            <div>COHORT 2023 – 2027 // GREATER NOIDA, INDIA</div>
          </div>
        </div>

        {/* Education Item */}
        <div className="space-y-8">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-10 rounded-2xl border-2 border-[#11134F] bg-[#FAF6CE] shadow-brutal relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#11134F]/15">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#11134F] text-[#FAF6CE] flex items-center justify-center shrink-0 shadow-sm">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-[#11134F] text-[#FAF6CE]">
                        UNDERGRADUATE
                      </span>
                      <span className="text-xs font-mono text-[#11134F]/70 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                      <span className="text-xs font-mono text-[#11134F]/70 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-[#11134F] tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-base sm:text-lg font-bold text-[#11134F]/85 mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs font-mono text-[#11134F]/70 mt-0.5">
                      Affiliated to {edu.university}
                    </p>
                  </div>
                </div>

                <div className="lg:text-right font-mono text-xs">
                  <span className="inline-block px-3 py-1.5 rounded-lg border border-[#11134F] bg-[#FAF6CE] font-bold text-[#11134F] shadow-brutal-sm">
                    GRADUATION YEAR: {edu.graduationYear}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              {edu.highlights && (
                <div className="mt-6">
                  <div className="text-xs font-mono font-bold uppercase text-[#11134F]/60 tracking-wider mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#11134F]" />
                    <span>Curricular Scope & Research Leadership:</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {edu.highlights.map((hl, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl border border-[#11134F]/15 bg-[#FAF6CE]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#11134F] mt-0.5 shrink-0" />
                        <span className="text-xs text-[#11134F]/85 font-medium leading-relaxed">
                          {hl}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
