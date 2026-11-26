import React, { useState } from 'react';
import { skillCategories } from '../../data/skills';
import {
  BrainCircuit,
  Eye,
  Sparkles,
  Server,
  Code2,
  Cpu,
  Layers,
  ChevronRight,
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return BrainCircuit;
      case 'Eye':
        return Eye;
      case 'Sparkles':
        return Sparkles;
      case 'Server':
        return Server;
      case 'Code2':
        return Code2;
      case 'Cpu':
        return Cpu;
      default:
        return Layers;
    }
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-24 border-t border-[#11134F]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-[#11134F]/15">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#11134F]/70 mb-2">
              <span className="w-2 h-2 bg-[#11134F]"></span>
              SECTION // 02
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#11134F] tracking-tight uppercase">
              Technical Stack & Capabilities
            </h2>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-[#11134F]/70">
            <div>PERCEPTION • GENERATIVE AI • EMBEDDED SYSTEMS</div>
            <div>STRICT TYPINGS // HIGH-PERFORMANCE INFERENCE</div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#11134F]/10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-tight transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-[#11134F] text-[#FAF6CE] shadow-brutal-sm'
                : 'border border-[#11134F]/30 text-[#11134F] hover:bg-[#11134F]/10'
            }`}
          >
            All Disciplines ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-tight transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-[#11134F] text-[#FAF6CE] shadow-brutal-sm'
                  : 'border border-[#11134F]/30 text-[#11134F] hover:bg-[#11134F]/10'
              }`}
            >
              {cat.shortName}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const IconComponent = getCategoryIcon(category.iconName);

            return (
              <div
                key={category.id}
                className="group p-6 rounded-2xl border-2 border-[#11134F] bg-[#FAF6CE] shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Top Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#11134F]/15">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl border border-[#11134F] flex items-center justify-center bg-[#FAF6CE] text-[#11134F] group-hover:bg-[#11134F] group-hover:text-[#FAF6CE] transition-colors duration-200">
                        <IconComponent className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <h3 className="font-bold text-base text-[#11134F] tracking-tight">
                        {category.name}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#11134F]/30 bg-[#11134F]/5 text-[#11134F]">
                      {category.skills.length} SKILLS
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#11134F]/75 mb-5 font-medium leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#11134F]/25 bg-[#FAF6CE] text-xs font-mono font-medium text-[#11134F] hover:border-[#11134F] hover:bg-[#11134F]/5 transition-all"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#11134F]/60"></span>
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className="text-[9px] text-[#11134F]/60 ml-0.5">
                            [{skill.level}]
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#11134F]/10 flex items-center justify-between text-[10px] font-mono text-[#11134F]/60">
                  <span>DISCIPLINE // {category.shortName.toUpperCase()}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#11134F]/40 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
