import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileDown, Terminal, MapPin, Sparkles, Cpu, Layers, Award, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { projects } from '../data/projects';
import { roboticsInitiatives } from '../data/robotics';
import { ventures } from '../data/ventures';
import { HeroPortrait } from '../components/hero/HeroPortrait';
import { AdaptiveImage } from '../components/common/AdaptiveImage';

export const HomePage: React.FC = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const primaryRobotics = roboticsInitiatives[0];
  const featuredVentures = ventures.slice(0, 2);

  return (
    <div className="pt-20 sm:pt-24 pb-16 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between pt-6 pb-12">
        {/* Engineering Quadrant Crosshairs & Telemetry Stamps */}
        <div className="absolute top-8 left-6 hidden xl:block font-mono text-[10px] text-[#11134F]/50 select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-signal animate-ping"></span>
            <span>SYS_STATUS: ONLINE // REAL-TIME DISPATCH</span>
          </div>
          <div>LOC: {personalInfo.contact.coordinates} • GREATER NOIDA, IN</div>
          <div>PERCEPTION: YOLOv8s-OBB / OPENCV / ROS 2</div>
        </div>

        <div className="absolute top-8 right-8 hidden xl:block font-mono text-[10px] text-[#11134F]/50 select-none text-right">
          <div>RESEARCH: IIT DELHI AMR (PROF. S.K. SAHA)</div>
          <div>COMPETITION: DD / ABU ROBOCON FINALIST</div>
          <div>GRADUATION: 2027 // AKTU CSE</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Bold Typography & Primary CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
              {/* Telemetry Status Pill */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-1.5 border-[#11134F] bg-[#FAF6CE] shadow-brutal-sm mb-5 text-[#11134F]"
              >
                <span className="w-2 h-2 rounded-full bg-signal animate-pulse"></span>
                <span className="text-[11px] font-mono font-bold tracking-tight">
                  N 28°31' / E 77°30' • GREATER NOIDA, IN
                </span>
                <span className="text-[#11134F]/30">•</span>
                <span className="text-[10px] font-mono text-signal font-bold uppercase">
                  {personalInfo.contact.availability}
                </span>
              </motion.div>

              {/* Oversized Bold Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-1 sm:space-y-2 mb-5"
              >
                <div className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#11134F]/70 font-bold flex items-center gap-2">
                  <span>PORTFOLIO & ENGINEERING LAB</span>
                  <span className="inline-block w-8 h-[1.5px] bg-[#11134F]/40"></span>
                  <span>EST. 2023 – 2027</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-[#11134F] tracking-tighter leading-[0.92] uppercase">
                  Prince<br />
                  <span className="relative inline-block text-[#11134F]">
                    Kumar
                  </span>
                  <br />
                  <span className="text-[#11134F] underline decoration-signal decoration-wavy decoration-2 underline-offset-8">
                    Maurya
                  </span>
                </h1>
              </motion.div>

              {/* Role Title & Sub-badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-5"
              >
                <div className="inline-block border-l-2 border-signal pl-4 py-1">
                  <p className="text-base sm:text-lg md:text-xl font-bold text-[#11134F] tracking-tight">
                    {personalInfo.roleTitle}
                  </p>
                  <p className="text-xs sm:text-sm font-mono text-[#11134F]/75 mt-0.5 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-signal" />
                    <span>{personalInfo.contact.location} • IEC College of Eng. & Tech (AKTU)</span>
                  </p>
                </div>
              </motion.div>

              {/* Introduction Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm sm:text-base md:text-lg text-[#11134F]/85 font-medium leading-relaxed max-w-2xl mb-8"
              >
                {personalInfo.introduction} Specialized in edge perception algorithms, deterministic sensor fusion in robotics arenas, and commercial client software.
              </motion.p>

              {/* Dual Primary CTAs + Resume */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto"
              >
                <Link
                  to="/projects"
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#11134F] text-[#FAF6CE] font-mono font-bold text-xs sm:text-sm tracking-tight shadow-brutal hover:bg-[#1D2175] hover:shadow-brutal-lg transition-all duration-200 active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  <Layers className="w-4 h-4" />
                  <span>Explore Systems</span>
                  <ArrowUpRight className="w-4 h-4 text-signal" />
                </Link>

                <Link
                  to="/ventures"
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-signal text-[#FAF6CE] border-1.5 border-[#11134F] font-mono font-bold text-xs sm:text-sm tracking-tight shadow-brutal hover:bg-[#B83A0F] hover:shadow-brutal-lg transition-all duration-200 active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Client & Raga Apps</span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-[#FAF6CE] text-[#11134F] rounded-full font-black">NEW</span>
                </Link>

                <a
                  href="/assets/documents/resume.pdf"
                  download="Prince_Kumar_Maurya_Resume.pdf"
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border-1.5 border-[#11134F] text-[#11134F] font-mono font-bold text-xs sm:text-sm tracking-tight bg-[#FAF6CE] shadow-brutal-sm hover:bg-[#11134F] hover:text-[#FAF6CE] transition-all duration-200 active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Resume (.PDF)</span>
                </a>
              </motion.div>
            </div>

            {/* Right Column: Circular Portrait with Orbital Telemetry */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full flex justify-center"
              >
                <HeroPortrait alt="Prince Kumar Maurya" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Ticker */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 pt-4 border-t border-[#11134F]/15">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#11134F]/75">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-signal" />
              <span className="font-bold text-[#11134F]">CORE DISCIPLINES:</span>
              <span>YOLOv8s-OBB Vision</span>
              <span className="text-[#11134F]/30">•</span>
              <span>RAG Knowledge Retrieval</span>
              <span className="text-[#11134F]/30">•</span>
              <span>ROS 2 Autonomous Systems</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden md:inline font-bold">IEC COLLEGE OF ENG. & TECH / AKTU</span>
              <span className="hidden md:inline text-[#11134F]/30">•</span>
              <Link to="/contact" className="font-bold text-signal hover:underline flex items-center gap-1">
                <span>Direct Inquiries</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ENGINEERING METRICS & CORE STACK STRIP */}
      <section className="py-12 border-y-2 border-[#11134F] bg-[#F2ECC0]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl border-1.5 border-[#11134F] bg-[#FAF6CE] shadow-brutal-sm flex flex-col justify-between">
              <div className="text-3xl sm:text-4xl font-black text-[#11134F] font-mono flex items-center justify-between">
                <span>06+</span>
                <Layers className="w-5 h-5 text-signal" />
              </div>
              <div className="text-xs font-mono font-bold text-[#11134F]/80 uppercase mt-2">
                Production AI & Robotics Systems
              </div>
              <div className="text-[11px] text-[#11134F]/60 mt-1">
                Open-source repositories & research codebases
              </div>
            </div>

            <div className="p-5 rounded-2xl border-1.5 border-[#11134F] bg-[#FAF6CE] shadow-brutal-sm flex flex-col justify-between">
              <div className="text-3xl sm:text-4xl font-black text-[#11134F] font-mono flex items-center justify-between">
                <span>IIT-D</span>
                <Cpu className="w-5 h-5 text-signal" />
              </div>
              <div className="text-xs font-mono font-bold text-[#11134F]/80 uppercase mt-2">
                IIT Delhi Research Platform
              </div>
              <div className="text-[11px] text-[#11134F]/60 mt-1">
                TOTO AMR guided by Prof. Dr. Subir Kumar Saha
              </div>
            </div>

            <div className="p-5 rounded-2xl border-1.5 border-[#11134F] bg-[#FAF6CE] shadow-brutal-sm flex flex-col justify-between">
              <div className="text-3xl sm:text-4xl font-black text-[#11134F] font-mono flex items-center justify-between">
                <span>ABU/DD</span>
                <Award className="w-5 h-5 text-signal" />
              </div>
              <div className="text-xs font-mono font-bold text-[#11134F]/80 uppercase mt-2">
                Robocon Automation Head
              </div>
              <div className="text-[11px] text-[#11134F]/60 mt-1">
                Team Rudhra Co-Leader & Perception Engineer
              </div>
            </div>

            <div className="p-5 rounded-2xl border-1.5 border-[#11134F] bg-[#FAF6CE] shadow-brutal-sm flex flex-col justify-between">
              <div className="text-3xl sm:text-4xl font-black text-[#11134F] font-mono flex items-center justify-between">
                <span>RAGA</span>
                <Sparkles className="w-5 h-5 text-signal" />
              </div>
              <div className="text-xs font-mono font-bold text-[#11134F]/80 uppercase mt-2">
                Client & Raga App Suite
              </div>
              <div className="text-[11px] text-[#11134F]/60 mt-1">
                Custom full-stack web builds & AI workflows
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED WORK PREVIEWS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b-2 border-[#11134F]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-signal mb-1">
              <span className="w-2 h-2 bg-signal"></span>
              PORTFOLIO SECTORS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#11134F] tracking-tight uppercase">
              Featured Engineering Showcases
            </h2>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1 font-bold text-[#11134F] hover:text-signal hover:underline"
            >
              <span>All 6 Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-[#11134F]/30">•</span>
            <Link
              to="/ventures"
              className="inline-flex items-center gap-1 font-bold text-signal hover:underline"
            >
              <span>Ventures & Raga Apps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 rounded-2xl border-2 border-[#11134F] bg-[#FAF6CE] shadow-brutal hover:shadow-brutal-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="mb-4 relative">
                  <AdaptiveImage
                    src={project.assetPath}
                    alt={project.title}
                    aspectRatio="card"
                    type={project.category === 'Computer Vision' ? 'vision' : 'rag'}
                    label={project.imagePlaceholder.label}
                    expectedDimensions={project.imagePlaceholder.dimensions}
                  />
                  <div className="absolute top-2.5 left-2.5 z-20">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FAF6CE] border border-[#11134F] text-[#11134F]">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-black text-[#11134F] tracking-tight mb-2 group-hover:text-signal transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#11134F]/85 font-medium leading-relaxed mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-[#11134F]/15 flex items-center justify-between">
                <Link
                  to="/projects"
                  className="text-xs font-mono font-bold text-[#11134F] group-hover:text-signal hover:underline flex items-center gap-1"
                >
                  <span>Architecture Deep-Dive</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                {project.repositoryUrl && (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono font-bold text-[#11134F] hover:underline"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Robotics & Client Ventures Teaser Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Robotics Teaser Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border-2 border-[#11134F] bg-[#FAF6CE] shadow-brutal flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#11134F]/15">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#11134F]">
                  <Cpu className="w-4 h-4 text-signal" />
                  <span>AUTONOMOUS FIELD ROBOTICS</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#11134F] text-[#FAF6CE]">
                  TEAM RUDHRA // ROBOCON
                </span>
              </div>

              <h3 className="text-2xl font-black text-[#11134F] tracking-tight mb-2">
                {primaryRobotics.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#11134F]/85 font-medium leading-relaxed mb-4">
                {primaryRobotics.summary} Includes real-time camera tracking, oriented basketball hoop acquisition, and pneumatic firing actuation over sub-millisecond WebSockets.
              </p>

              <div className="grid grid-cols-2 gap-2 mb-4 font-mono text-xs">
                <div className="p-2.5 rounded-lg border border-[#11134F]/20 bg-[#FAF6CE]">
                  <span className="text-[10px] text-[#11134F]/60 block uppercase">Perception Stack</span>
                  <span className="font-bold text-[#11134F]">OpenCV + YOLOv8 + Optical</span>
                </div>
                <div className="p-2.5 rounded-lg border border-[#11134F]/20 bg-[#FAF6CE]">
                  <span className="text-[10px] text-[#11134F]/60 block uppercase">Role Mandate</span>
                  <span className="font-bold text-[#11134F]">Co-Leader & Automation Head</span>
                </div>
              </div>
            </div>

            <Link
              to="/robotics"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#11134F] hover:text-signal hover:underline pt-2"
            >
              <span>Explore Robotics Hardware & IIT Delhi AMR Platform</span>
              <ArrowUpRight className="w-4 h-4 text-signal" />
            </Link>
          </div>

          {/* Client Engineering & Raga Apps Teaser Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border-2 border-[#11134F] bg-[#FAF6CE] shadow-brutal flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#11134F]/15">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#11134F]">
                  <Sparkles className="w-4 h-4 text-signal" />
                  <span>CLIENT & RAGA APPS</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-signal text-[#FAF6CE] font-bold">
                  COMMERCIAL SUITE
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#11134F] tracking-tight mb-2">
                Bespoke Client Engineering & App Ecosystem
              </h3>
              <p className="text-xs sm:text-sm text-[#11134F]/85 font-medium leading-relaxed mb-4">
                Delivering high-performance full-stack web builds, real-time robotics consoles, and AI workflow automations under the Raga Apps suite.
              </p>

              <div className="space-y-2 mb-4">
                {featuredVentures.map((v) => (
                  <div key={v.id} className="p-2.5 rounded-lg border border-[#11134F]/20 flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-[#11134F]">{v.title}</span>
                    <span className="text-[10px] text-signal font-bold">{v.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/ventures"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-signal hover:underline pt-2"
            >
              <span>View Raga Apps & Client Solutions Showcase</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ABOUT & PHILOSOPHY OVERVIEW */}
      <section className="py-16 border-t-2 border-[#11134F] bg-[#F2ECC0]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-mono font-bold tracking-widest uppercase text-signal">
                CORE PHILOSOPHY
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#11134F] tracking-tight">
                Deterministic computer vision, edge model quantization, and verified software architectures.
              </h2>
              <p className="text-xs sm:text-sm text-[#11134F]/85 font-medium leading-relaxed max-w-2xl">
                {personalInfo.bioDetailed[1]}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'Oriented Bounding Boxes (YOLOv8s-OBB)',
                  'Vector Retrieval (FAISS, Sentence Transformers)',
                  'ROS 2 Node Architecture & 2D LiDAR SLAM',
                  'High-Throughput Web Services (FastAPI)',
                  'Bespoke Client Web Applications',
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-[#11134F]/25 bg-[#FAF6CE] text-xs font-mono font-medium text-[#11134F]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-signal" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                to="/experience"
                className="p-5 rounded-2xl border-1.5 border-[#11134F] bg-[#FAF6CE] shadow-brutal-sm hover:shadow-brutal transition-all"
              >
                <div className="text-xs font-mono text-[#11134F]/60 uppercase">Career History</div>
                <div className="text-base font-bold text-[#11134F] mt-1">
                  DECTIFY Tech • Neocambrian AI • Team Rudhra
                </div>
                <div className="text-xs font-mono text-signal mt-2 flex items-center gap-1">
                  <span>View Full Experience & Certs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              <Link
                to="/contact"
                className="p-5 rounded-2xl border-1.5 border-[#11134F] bg-signal text-[#FAF6CE] shadow-brutal-sm hover:shadow-brutal transition-all"
              >
                <div className="text-xs font-mono text-[#FAF6CE]/80 uppercase">Get in Touch</div>
                <div className="text-base font-bold text-[#FAF6CE] mt-1">
                  Available for AI/ML Roles & Client Projects
                </div>
                <div className="text-xs font-mono text-[#FAF6CE] mt-2 flex items-center gap-1 font-bold">
                  <span>Send Direct Inquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
