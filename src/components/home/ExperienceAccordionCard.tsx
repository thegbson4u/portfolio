import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { experiences } from '../../data/experience';

export const ExperienceAccordionCard: React.FC = () => {
  // First item open by default
  const [openId, setOpenId] = useState<string | null>(experiences[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="rounded-2xl border border-dashed border-black/15 dark:border-white/15 bg-white dark:bg-[#161619] p-5 sm:p-7 transition-colors">
      {/* Editorial Serif Heading */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-dashed border-black/10 dark:border-white/10">
        <h2 className="font-serif italic text-3xl sm:text-4xl font-normal tracking-tight text-[#14151C] dark:text-[#F4F4F6]">
          Experience
        </h2>
        <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-[#5C5E6B] dark:text-[#9A9AA3]">
          WORK HISTORY
        </span>
      </div>

      {/* Accordion Rows */}
      <div className="divide-y divide-dashed divide-black/10 dark:divide-white/10">
        {experiences.map((exp) => {
          const isOpen = openId === exp.id;
          return (
            <div key={exp.id} className="py-4 first:pt-1 last:pb-1">
              <button
                onClick={() => toggleAccordion(exp.id)}
                className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 text-left group focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm sm:text-base font-bold text-[#14151C] dark:text-[#F4F4F6] group-hover:text-[#E05A87] transition-colors">
                      {exp.organization}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 text-[#5C5E6B] dark:text-[#9A9AA3] border border-black/10 dark:border-white/10">
                      {exp.type.toUpperCase()}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-[#5C5E6B] dark:text-[#9A9AA3] flex items-center gap-1.5 flex-wrap">
                    <span className="text-[#C83E6B] dark:text-[#E05A87] font-medium">
                      {exp.role}
                    </span>
                    <span className="opacity-40">·</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-2.5 shrink-0 pt-0.5 sm:pt-0">
                  <span className="text-[11px] font-mono text-[#5C5E6B] dark:text-[#9A9AA3] max-w-[220px] sm:max-w-none">
                    {exp.period}
                  </span>
                  <div className={`p-1 rounded-md text-[#5C5E6B] dark:text-[#9A9AA3] group-hover:text-[#14151C] dark:group-hover:text-[#F4F4F6] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#E05A87]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Expandable Content Drawer */}
              {isOpen && (
                <div className="mt-4 pt-3 border-t border-dashed border-black/5 dark:border-white/5 space-y-3 animate-in fade-in duration-200">
                  <p className="text-xs text-[#5C5E6B] dark:text-[#9A9AA3] font-mono italic">
                    Focus: {exp.focus}
                  </p>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs text-[#14151C] dark:text-[#F4F4F6] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E05A87] mt-1.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    <span className="text-[10px] font-mono text-[#5C5E6B] dark:text-[#9A9AA3] mr-1 uppercase">
                      Stack:
                    </span>
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/5 dark:bg-white/5 text-[#5C5E6B] dark:text-[#9A9AA3] border border-black/5 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
