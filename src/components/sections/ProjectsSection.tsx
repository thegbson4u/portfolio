import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { AdaptiveImage } from '../common/AdaptiveImage';
import { GitBranch, ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    'all',
    'GenAI & NLP',
    'Computer Vision',
    'Robotics & Perception',
    'Applied ML',
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 border-t border-[#11134F]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-[#11134F]/15">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#11134F]/70 mb-2">
              <span className="w-2 h-2 bg-[#11134F]"></span>
              SECTION // 04
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#11134F] tracking-tight uppercase">
              Featured Engineering Projects
            </h2>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-[#11134F]/70">
            <div>PRODUCTION REPOSITORIES & EXPERIMENTAL CODEBASES</div>
            <div>DETERMINISTIC SYSTEMS // REAL-WORLD TESTING</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#11134F]/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-tight transition-all duration-200 ${
                filter === cat
                  ? 'bg-[#11134F] text-[#FAF6CE] shadow-brutal-sm'
                  : 'border border-[#11134F]/30 text-[#11134F] hover:bg-[#11134F]/10'
              }`}
            >
              {cat === 'all' ? 'All Engineering Projects' : cat}
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

                  {/* Badge floating on image container */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#FAF6CE] border border-[#11134F] text-[#11134F] shadow-brutal-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl sm:text-2xl font-black text-[#11134F] tracking-tight mb-2 group-hover:text-[#1D2175] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#11134F]/85 font-medium leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                {/* Architectural Highlights */}
                <div className="space-y-1.5 mb-6 bg-[#FAF6CE] p-3 rounded-xl border border-[#11134F]/15">
                  <div className="text-[10px] font-mono font-bold uppercase text-[#11134F]/60 tracking-wider mb-1">
                    System Architecture:
                  </div>
                  {project.architecturalHighlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs font-mono text-[#11134F]/90">
                      <span className="text-[#11134F] font-bold">›</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-[#FAF6CE] border border-[#11134F]/20 text-[#11134F]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Action Links */}
              <div className="pt-4 border-t border-[#11134F]/15 flex items-center justify-between">
                {project.repositoryUrl ? (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#11134F] hover:underline"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-[#11134F]/50">
                    [Research Platform / Lab Access]
                  </span>
                )}

                <span className="text-[10px] font-mono text-[#11134F]/50">
                  ID: {project.id}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
