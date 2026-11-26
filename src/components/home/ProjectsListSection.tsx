import React, { useState, useEffect } from 'react';
import { projects } from '../../data/projects';
import { ProjectItem } from '../../types';
import { AdaptiveImage } from '../common/AdaptiveImage';
import { GitBranch, ArrowUpRight, Terminal, X, ChevronRight } from 'lucide-react';

export const ProjectsListSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  // Keyboard accessibility: Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    if (activeModalProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModalProject]);

  const categories = [
    { key: 'all', label: 'All', count: projects.length },
    { key: 'GenAI & NLP', label: 'GenAI & NLP', count: projects.filter((p) => p.category === 'GenAI & NLP').length },
    { key: 'Computer Vision', label: 'Computer Vision', count: projects.filter((p) => p.category === 'Computer Vision').length },
    { key: 'Robotics & Perception', label: 'Robotics & Perception', count: projects.filter((p) => p.category === 'Robotics & Perception').length },
    { key: 'Applied ML', label: 'Applied ML', count: projects.filter((p) => p.category === 'Applied ML').length },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-dashed border-black/10 dark:border-white/10">
        <div>
          <h2 className="font-serif italic text-3xl sm:text-4xl font-normal tracking-tight text-[#14151C] dark:text-[#F4F4F6]">
            Projects
          </h2>
          <p className="text-xs font-mono text-[#5C5E6B] dark:text-[#9A9AA3] mt-1">
            Production GenAI, edge computer vision, and autonomous robotics platforms.
          </p>
        </div>
        <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-[#5C5E6B] dark:text-[#9A9AA3] self-start sm:self-auto">
          6 CODEBASES
        </span>
      </div>

      {/* Filter Tabs with Counts (Horizontal scroll on mobile with hidden scrollbar) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => setFilter(cat.key)}
            className={`min-h-[38px] px-3.5 py-1.5 rounded-full text-xs font-mono font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
              filter === cat.key
                ? 'bg-[#E05A87] text-white font-semibold shadow-sm'
                : 'border border-dashed border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-[#5C5E6B] dark:text-[#9A9AA3] hover:text-[#14151C] dark:hover:text-[#F4F4F6]'
            }`}
          >
            <span>{cat.label}</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${filter === cat.key ? 'bg-white/20' : 'bg-black/10 dark:bg-white/10'}`}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Project Cards (Horizontal Split on Desktop, Stacked on Mobile) */}
      <div className="space-y-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl border border-dashed border-black/15 dark:border-white/15 bg-white dark:bg-[#161619] p-4 sm:p-5 flex flex-col md:flex-row gap-5 transition-all group"
          >
            {/* Left Column: 16:10 Media Slab */}
            <div className="w-full md:w-[280px] lg:w-[310px] shrink-0">
              <AdaptiveImage
                src={project.assetPath}
                alt={project.title}
                aspectRatio="video"
                type={
                  project.category === 'Computer Vision'
                    ? 'vision'
                    : project.category === 'Robotics & Perception'
                    ? 'robotics'
                    : 'rag'
                }
                label={project.imagePlaceholder.label}
                expectedDimensions={project.imagePlaceholder.dimensions}
                className="w-full h-full rounded-xl"
              />
            </div>

            {/* Right Column: Content & Actions */}
            <div className="flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E05A87]/15 text-[#C83E6B] dark:text-[#E05A87] font-semibold border border-[#E05A87]/25">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#5C5E6B] dark:text-[#9A9AA3]">
                    ID: {project.id}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#14151C] dark:text-[#F4F4F6] group-hover:text-[#E05A87] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-[#5C5E6B] dark:text-[#9A9AA3] leading-relaxed mt-1 line-clamp-2">
                  {project.shortDescription}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/5 dark:bg-white/5 text-[#5C5E6B] dark:text-[#9A9AA3] border border-black/5 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Row */}
              <div className="pt-3 border-t border-dashed border-black/10 dark:border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-mono font-medium text-[#C83E6B] dark:text-[#E05A87] hover:underline flex items-center gap-1 focus:outline-none"
                >
                  <span>Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                {project.repositoryUrl ? (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-semibold text-[#14151C] dark:text-[#F4F4F6] hover:text-[#E05A87] flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E05A87]" />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-[#5C5E6B] dark:text-[#9A9AA3] italic">
                    IIT Delhi Research
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Architecture Deep-Dive Drawer / Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveModalProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[90vh] rounded-2xl border border-dashed border-black/20 dark:border-white/20 bg-white dark:bg-[#161619] p-5 sm:p-6 overflow-y-auto text-[#14151C] dark:text-[#F4F4F6] shadow-2xl space-y-5"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-dashed border-black/10 dark:border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#E05A87]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  SYSTEM ARCHITECTURE // {activeModalProject.id}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg border border-dashed border-black/20 dark:border-white/20 text-[#5C5E6B] dark:text-[#9A9AA3] hover:text-[#14151C] dark:hover:text-[#F4F4F6] transition-colors"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Title & Desc */}
            <div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E05A87]/15 text-[#C83E6B] dark:text-[#E05A87] font-semibold border border-[#E05A87]/25">
                {activeModalProject.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mt-1.5">
                {activeModalProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5E6B] dark:text-[#9A9AA3] leading-relaxed mt-2">
                {activeModalProject.shortDescription}
              </p>
            </div>

            {/* Data flow summary */}
            {activeModalProject.dataFlowSummary && (
              <div className="p-3.5 rounded-xl border border-dashed border-[#E05A87]/30 bg-[#E05A87]/5 text-xs font-mono">
                <span className="font-bold text-[#E05A87] block mb-1 uppercase text-[10px]">
                  Pipeline Data Flow:
                </span>
                <span className="leading-relaxed text-[#14151C] dark:text-[#F4F4F6]">
                  {activeModalProject.dataFlowSummary}
                </span>
              </div>
            )}

            {/* Stage-by-stage pipeline */}
            {activeModalProject.architectureFlow && (
              <div className="space-y-2.5">
                <div className="text-[11px] font-mono font-bold uppercase text-[#5C5E6B] dark:text-[#9A9AA3]">
                  Execution Stages:
                </div>
                <div className="space-y-2">
                  {activeModalProject.architectureFlow.map((flow, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-3 rounded-xl border border-dashed border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
                    >
                      <div className="space-y-0.5">
                        <span className="text-xs font-mono font-bold text-[#C83E6B] dark:text-[#E05A87] block">
                          {flow.step}
                        </span>
                        <p className="text-xs text-[#5C5E6B] dark:text-[#9A9AA3]">
                          {flow.detail}
                        </p>
                      </div>
                      <span className="self-start sm:self-center px-2 py-0.5 rounded text-[10px] font-mono bg-[#E05A87]/15 text-[#C83E6B] dark:text-[#E05A87] font-semibold border border-[#E05A87]/25 shrink-0">
                        {flow.tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architectural Highlights */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-bold uppercase text-[#5C5E6B] dark:text-[#9A9AA3]">
                Architectural Highlights:
              </div>
              <ul className="space-y-1.5 text-xs text-[#5C5E6B] dark:text-[#9A9AA3]">
                {activeModalProject.architecturalHighlights.map((hl, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E05A87] mt-1.5 shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.technologies.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/10 dark:bg-white/10 text-[#14151C] dark:text-[#F4F4F6]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-dashed border-black/10 dark:border-white/10 flex items-center justify-between">
              {activeModalProject.repositoryUrl ? (
                <a
                  href={activeModalProject.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-semibold bg-[#E05A87] hover:bg-[#C83E6B] text-white shadow-sm"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>View GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs font-mono text-[#5C5E6B] dark:text-[#9A9AA3] italic">
                  Academic Platform
                </span>
              )}

              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono border border-dashed border-black/20 dark:border-white/20 text-[#5C5E6B] dark:text-[#9A9AA3] hover:text-[#14151C] dark:hover:text-[#F4F4F6]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
