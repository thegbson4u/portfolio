import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ventures } from '../data/ventures';
import { VentureItem } from '../types';
import { AdaptiveImage } from '../components/common/AdaptiveImage';
import { Sparkles, ArrowUpRight, CheckCircle2, Terminal, Code2, Layers, Cpu, ExternalLink, ShieldCheck, Clock } from 'lucide-react';

export const VenturesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'raga-app' | 'client-solution'>('all');

  const ragaApps = ventures.filter((v) => v.category === 'raga-app');
  const clientSolutions = ventures.filter((v) => v.category === 'client-solution');

  const displayedVentures =
    activeTab === 'all'
      ? ventures
      : ventures.filter((v) => v.category === activeTab);

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-6 border-b-2 border-[#11134F]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-signal mb-2">
              <span className="w-2 h-2 bg-signal"></span>
              COMMERCIAL ENGINEERING & ECOSYSTEM
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#11134F] tracking-tight uppercase">
              Client Solutions & Raga Apps
            </h1>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-[#11134F]/75">
            <div>BESPOKE WEB BUILDS • AI INTEGRATIONS • RAGA APPS</div>
            <div>PRODUCTION SLA // MEASURABLE BUSINESS IMPACT</div>
          </div>
        </div>

        {/* Hero Callout / Value Proposition */}
        <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#11134F] bg-[#F2ECC0]/80 shadow-brutal mb-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-signal">
              <Sparkles className="w-4 h-4 text-signal" />
              <span>FULL-STACK AI & WEB ENGINEERING PRACTICE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#11134F] tracking-tight">
              Transforming complex AI research into production web software and client tools.
            </h2>
            <p className="text-xs sm:text-sm text-[#11134F]/85 font-medium leading-relaxed">
              Under the <strong>Raga Apps</strong> umbrella and through bespoke client contracts, I engineer responsive web applications, low-latency telemetry consoles, automated document parsers, and custom RAG retrieval architectures.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <Link
              to="/contact?type=client"
              className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-signal text-[#FAF6CE] font-mono font-bold text-xs shadow-brutal hover:bg-[#B83A0F] transition-all"
            >
              <span>Start a Project / Client Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="mailto:mauryaprince631@gmail.com?subject=Client%20Project%20Inquiry%20via%20Portfolio"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border-1.5 border-[#11134F] text-xs font-mono font-bold text-[#11134F] bg-[#FAF6CE] hover:bg-[#11134F] hover:text-[#FAF6CE] transition-all shadow-brutal-sm"
            >
              <span>Direct Email Dispatch</span>
            </a>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 mb-10 pb-3 overflow-x-auto snap-x scrollbar-none border-b border-[#11134F]/15">
          <button
            onClick={() => setActiveTab('all')}
            className={`min-h-[44px] px-5 py-2 rounded-full text-xs font-mono font-bold tracking-tight whitespace-nowrap transition-all duration-200 snap-start flex items-center gap-2 ${
              activeTab === 'all'
                ? 'bg-[#11134F] text-[#FAF6CE] shadow-brutal-sm'
                : 'border border-[#11134F]/30 text-[#11134F] bg-[#FAF6CE] hover:bg-[#11134F]/10'
            }`}
          >
            <span>All Ventures ({ventures.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('raga-app')}
            className={`min-h-[44px] px-5 py-2 rounded-full text-xs font-mono font-bold tracking-tight whitespace-nowrap transition-all duration-200 snap-start flex items-center gap-2 ${
              activeTab === 'raga-app'
                ? 'bg-signal text-[#FAF6CE] shadow-brutal-sm'
                : 'border border-[#11134F]/30 text-[#11134F] bg-[#FAF6CE] hover:bg-[#11134F]/10'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Raga Apps Suite ({ragaApps.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('client-solution')}
            className={`min-h-[44px] px-5 py-2 rounded-full text-xs font-mono font-bold tracking-tight whitespace-nowrap transition-all duration-200 snap-start flex items-center gap-2 ${
              activeTab === 'client-solution'
                ? 'bg-[#11134F] text-[#FAF6CE] shadow-brutal-sm'
                : 'border border-[#11134F]/30 text-[#11134F] bg-[#FAF6CE] hover:bg-[#11134F]/10'
            }`}
          >
            <span>Client Web & AI Engineering ({clientSolutions.length})</span>
          </button>
        </div>

        {/* Showcase Grid */}
        <div className="space-y-12">
          {displayedVentures.map((item) => (
            <article
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl border-2 border-[#11134F] bg-[#FAF6CE] shadow-brutal hover:shadow-brutal-lg transition-all duration-300"
            >
              {/* Card Top Banner */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#11134F]/15">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span
                      className={`px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                        item.category === 'raga-app'
                          ? 'bg-signal text-[#FAF6CE]'
                          : 'bg-[#11134F] text-[#FAF6CE]'
                      }`}
                    >
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-signal flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse"></span>
                      <span>{item.status}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#11134F] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-mono text-[#11134F]/75 mt-0.5 font-semibold">
                    {item.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    to="/contact?type=client"
                    className="min-h-[40px] inline-flex items-center gap-1.5 px-4 py-2 rounded-full border-1.5 border-[#11134F] bg-[#FAF6CE] text-xs font-mono font-bold text-[#11134F] hover:bg-[#11134F] hover:text-[#FAF6CE] transition-all shadow-brutal-sm"
                  >
                    <span>Inquire for Similar Build</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  {item.liveUrl && (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[40px] inline-flex items-center gap-1 px-3 py-2 rounded-full border border-[#11134F]/30 text-xs font-mono font-bold text-[#11134F] hover:bg-[#11134F]/10 transition-all"
                    >
                      <span>Preview</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description & Metrics Grid */}
              <div className="my-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-sm text-[#11134F]/85 font-medium leading-relaxed">
                    {item.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-1.5 pt-2">
                    <div className="text-[10px] font-mono font-bold uppercase text-[#11134F]/60 tracking-wider mb-2">
                      Key Engineering Deliverables:
                    </div>
                    {item.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#11134F]/90 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-signal shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics Callout Strip */}
                <div className="lg:col-span-5 bg-[#FAF6CE] border border-[#11134F]/20 rounded-xl p-5 shadow-sm space-y-3">
                  <div className="text-xs font-mono font-bold uppercase text-[#11134F] tracking-wider pb-2 border-b border-[#11134F]/15 flex items-center justify-between">
                    <span>Performance Metrics & SLA</span>
                    <ShieldCheck className="w-4 h-4 text-signal" />
                  </div>
                  <div className="grid grid-cols-2 gap-3 font-mono">
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-2.5 rounded-lg border border-[#11134F]/10 bg-[#FAF6CE]">
                        <span className="text-[10px] text-[#11134F]/60 uppercase block truncate">
                          {m.label}
                        </span>
                        <span className="text-sm font-black text-[#11134F] block mt-0.5">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Specification Ledger */}
                  <div className="pt-2 text-[11px] font-mono text-[#11134F]/75 space-y-1">
                    {item.architectureSpec.frontend && (
                      <div><strong className="text-[#11134F]">UI Stack:</strong> {item.architectureSpec.frontend}</div>
                    )}
                    {item.architectureSpec.backend && (
                      <div><strong className="text-[#11134F]">Backend:</strong> {item.architectureSpec.backend}</div>
                    )}
                    {item.architectureSpec.aiModelOrEngine && (
                      <div><strong className="text-[#11134F]">Model / Engine:</strong> {item.architectureSpec.aiModelOrEngine}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Technologies Tag Footer */}
              <div className="pt-4 border-t border-[#11134F]/15 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-xs font-mono font-bold text-[#11134F]/70 mr-1">STACK:</span>
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-[#FAF6CE] border border-[#11134F]/20 text-[#11134F]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="text-[10px] font-mono text-[#11134F]/50">
                  REF // {item.id}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl border-2 border-[#11134F] bg-[#11134F] text-[#FAF6CE] shadow-brutal flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#FAF6CE]">
              Have an AI, Computer Vision, or Full-Stack project in mind?
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF6CE]/80 font-mono">
              From responsive client web platforms to custom neural perception workflows, let's build something exceptional.
            </p>
          </div>

          <Link
            to="/contact?type=client"
            className="min-h-[50px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-signal text-[#FAF6CE] font-mono font-bold text-xs sm:text-sm tracking-tight shadow-brutal hover:bg-[#B83A0F] transition-all shrink-0 active:translate-x-1 active:translate-y-1"
          >
            <span>Inquire for Client Engineering</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
