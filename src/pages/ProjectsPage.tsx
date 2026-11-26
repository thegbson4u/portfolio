import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ProjectItem } from '../types';
import { AdaptiveImage } from '../components/common/AdaptiveImage';
import { GitBranch, ArrowUpRight, Code2, X, Terminal, CheckCircle2, Layers, Cpu, Database, Eye } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [activeDeepDiveProject, setActiveDeepDiveProject] = useState<ProjectItem | null>(null);

  const categories = [
    'all',
    'GenAI & NLP',
    'Computer Vision',
    'Applied ML',
    'Robotics & Perception',
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-6 border-b-2 border-[#11134F]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-signal mb-2">
              <span className="w-2 h-2 bg-signal"></span>
              SYSTEM REPOSITORY
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#11134F] tracking-tight uppercase">
              AI, GenAI & Vision Systems
            </h1>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-[#11134F]/75">
            <div>DETERMINISTIC INFERENCE // EDGE QUANTIZATION</div>
            <div>ALL 6 PRODUCTION & RESEARCH CODEBASES</div>
          </div>
        </div>

        {/* Filter Tabs (Horizontal scroll on mobile with touch-friendly targets) */}
        <div className="flex items-center gap-2 mb-10 pb-3 overflow-x-auto snap-x scrollbar-none border-b border-[#11134F]/15">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-mono font-bold tracking-tight whitespace-nowrap transition-all duration-200 snap-start flex items-center gap-1.5 ${
                filter === cat
                  ? 'bg-[#11134F] text-[#FAF6CE] shadow-brutal-sm'
                  : 'border border-[#11134F]/30 text-[#11134F] bg-[#FAF6CE] hover:bg-[#11134F]/10'
              }`}
            >
              <span>{cat === 'all' ? 'All Engineering Projects' : cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  filter === cat ? 'bg-signal text-[#FAF6CE]' : 'bg-[#11134F]/10 text-[#11134F]'
                }`}
              >
                {cat === 'all'
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="p-6 sm:p-7 rounded-2xl border-2 border-[#11134F] bg-[#FAF6CE] shadow-brutal hover:shadow-brutal-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Media Container with Adaptive Placeholder */}
                <div className="mb-6 relative">
                  <AdaptiveImage
                    src={project.assetPath}
                    alt={project.title}
                    aspectRatio="card"
                    type={
                      project.category === 'Computer Vision'
                        ? 'vision'
                        : project.category === 'Robotics & Perception'
                        ? 'robotics'
                        : project.category === 'GenAI & NLP'
                        ? 'rag'
                        : 'generic'
                    }
                    label={project.imagePlaceholder.label}
                    expectedDimensions={project.imagePlaceholder.dimensions}
                  />

                  {/* Floating Badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#FAF6CE] border border-[#11134F] text-[#11134F] shadow-brutal-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Title & Short Description */}
                <h2 className="text-xl sm:text-2xl font-black text-[#11134F] tracking-tight mb-2 group-hover:text-signal transition-colors">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#11134F]/85 font-medium leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                {/* Architectural Highlights */}
                <div className="space-y-1.5 mb-5 bg-[#FAF6CE] p-3.5 rounded-xl border border-[#11134F]/15">
                  <div className="text-[10px] font-mono font-bold uppercase text-[#11134F]/60 tracking-wider mb-1">
                    System Architecture:
                  </div>
                  {project.architecturalHighlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs font-mono text-[#11134F]/90">
                      <span className="text-signal font-bold">›</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#FAF6CE] border border-[#11134F]/20 text-[#11134F]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Action Links */}
              <div className="pt-4 border-t border-[#11134F]/15 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setActiveDeepDiveProject(project)}
                  className="min-h-[40px] inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border-1.5 border-[#11134F] bg-[#FAF6CE] text-xs font-mono font-bold text-[#11134F] hover:bg-[#11134F] hover:text-[#FAF6CE] transition-all shadow-brutal-sm active:translate-x-[1px] active:translate-y-[1px]"
                  aria-label={`Open architecture deep dive for ${project.title}`}
                >
                  <Terminal className="w-3.5 h-3.5 text-signal" />
                  <span>Architecture Deep-Dive</span>
                </button>

                <div className="flex items-center gap-3">
                  {project.repositoryUrl ? (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[40px] inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#11134F] hover:text-signal hover:underline"
                    >
                      <GitBranch className="w-3.5 h-3.5" />
                      <span>Codebase</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-[#11134F]/50">
                      [Research Lab Access]
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* INTERACTIVE ARCHITECTURE DEEP-DIVE MODAL / DRAWER */}
      <AnimatePresence>
        {activeDeepDiveProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#11134F]/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-[#FAF6CE] border-2 border-[#11134F] rounded-2xl shadow-brutal-lg w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden text-[#11134F]"
            >
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-5 border-b-2 border-[#11134F] bg-[#F2ECC0] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#11134F] text-[#FAF6CE] flex items-center justify-center">
                    <Terminal className="w-4 h-4 text-signal" />
                  </div>
                  <div>
                    <h3 className="font-mono font-black text-sm uppercase tracking-tight text-[#11134F]">
                      SYSTEM ARCHITECTURE DEEP-DIVE
                    </h3>
                    <p className="text-[11px] font-mono text-[#11134F]/70">
                      ID: {activeDeepDiveProject.id} • {activeDeepDiveProject.category}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveDeepDiveProject(null)}
                  className="p-1.5 rounded-lg border border-[#11134F] text-[#11134F] hover:bg-[#11134F] hover:text-[#FAF6CE] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#11134F] tracking-tight mb-2">
                    {activeDeepDiveProject.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#11134F]/85 font-medium leading-relaxed">
                    {activeDeepDiveProject.shortDescription}
                  </p>
                </div>

                {/* Data Flow Summary Pill */}
                {activeDeepDiveProject.dataFlowSummary && (
                  <div className="p-3.5 rounded-xl border border-[#11134F]/20 bg-[#FAF6CE] text-xs font-mono text-[#11134F]/90">
                    <span className="font-bold text-signal block mb-1 text-[10px] uppercase">
                      Pipeline Data Flow:
                    </span>
                    <span className="leading-relaxed">{activeDeepDiveProject.dataFlowSummary}</span>
                  </div>
                )}

                {/* Step-by-Step Architecture Pipeline */}
                {activeDeepDiveProject.architectureFlow && (
                  <div className="space-y-3">
                    <div className="text-xs font-mono font-bold uppercase text-[#11134F]/70 tracking-wider">
                      Algorithmic Execution Stages:
                    </div>
                    <div className="space-y-2.5">
                      {activeDeepDiveProject.architectureFlow.map((stage, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl border border-[#11134F]/20 bg-[#FAF6CE] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                        >
                          <div className="space-y-0.5">
                            <span className="font-bold text-xs font-mono text-[#11134F] block">
                              {stage.step}
                            </span>
                            <p className="text-xs text-[#11134F]/80">{stage.detail}</p>
                          </div>
                          <span className="self-start sm:self-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#11134F]/10 text-[#11134F] shrink-0 border border-[#11134F]/20">
                            {stage.tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Detailed Description Points */}
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold uppercase text-[#11134F]/70 tracking-wider">
                    Engineering Specifications:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#11134F]/85 font-medium">
                    {activeDeepDiveProject.detailedDescription.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-signal mt-1.5 shrink-0"></span>
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <div className="text-xs font-mono font-bold uppercase text-[#11134F]/70 tracking-wider mb-2">
                    Technologies & Modules:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeDeepDiveProject.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[#11134F] text-[#FAF6CE]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t-2 border-[#11134F] bg-[#F2ECC0] flex items-center justify-between">
                {activeDeepDiveProject.repositoryUrl ? (
                  <a
                    href={activeDeepDiveProject.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#11134F] text-[#FAF6CE] font-mono font-bold text-xs shadow-brutal-sm hover:bg-[#1D2175] transition-all"
                  >
                    <GitBranch className="w-4 h-4 text-signal" />
                    <span>View GitHub Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-[#11134F]/60">
                    Proprietary / Academic Research Platform
                  </span>
                )}

                <button
                  onClick={() => setActiveDeepDiveProject(null)}
                  className="px-4 py-2 rounded-xl border border-[#11134F] bg-[#FAF6CE] font-mono font-bold text-xs text-[#11134F] hover:bg-[#11134F] hover:text-[#FAF6CE] transition-all"
                >
                  Close Deep-Dive
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
