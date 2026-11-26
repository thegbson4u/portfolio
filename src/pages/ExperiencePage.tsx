import React from 'react';
import { experiences } from '../data/experience';
import { educationList } from '../data/education';
import { certificates } from '../data/certificates';
import { personalInfo } from '../data/personalInfo';
import { AdaptiveImage } from '../components/common/AdaptiveImage';
import { Calendar, MapPin, Award, GraduationCap, BookOpen, CheckCircle2, ShieldCheck, ArrowUpRight, Github, Linkedin, Code } from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  const codingProfiles = [
    {
      name: 'GitHub',
      handle: '@thegbson4u',
      url: personalInfo.socials.github,
      description:
        'Open-source AI/ML repositories, real-time computer vision inference systems, ROS 2 autonomous robotics pipelines, and LangChain RAG applications.',
      icon: Github,
      metric: 'Active Repositories & Implementations',
      badge: 'Version Control',
    },
    {
      name: 'LinkedIn',
      handle: 'Prince Kumar Maurya',
      url: personalInfo.socials.linkedin,
      description:
        'Professional engineering network, robotics competition dispatches, technical publications, and academic milestones.',
      icon: Linkedin,
      metric: 'Verified Professional Network',
      badge: 'Engineering Community',
    },
    {
      name: 'GeeksforGeeks',
      handle: '@thegbson',
      url: personalInfo.socials.geeksforgeeks,
      description:
        'Continuous problem-solving practice covering Data Structures & Algorithms, dynamic programming, tree traversals, and algorithmic optimization.',
      icon: Code,
      metric: 'DSA & Algorithmic Practice',
      badge: 'Core CS Foundations',
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b-2 border-[#11134F]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-signal mb-2">
              <span className="w-2 h-2 bg-signal"></span>
              BACKGROUND & CREDENTIALS
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#11134F] tracking-tight uppercase">
              Experience, Education & Certs
            </h1>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-[#11134F]/75">
            <div>INDUSTRY INTERNSHIPS • ROBOCON SQUAD • ACADEMIC RECORD</div>
            <div>VERIFIED TRACK RECORD // 2023 – 2027</div>
          </div>
        </div>

        {/* 1. PROFESSIONAL EXPERIENCE TIMELINE */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-signal"></span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#11134F] tracking-tight uppercase">
              Professional Experience & Leadership
            </h2>
          </div>

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
                      <span className="text-xs font-mono text-[#11134F]/70 flex items-center gap-1 font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-signal" />
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
                    <div className="text-base sm:text-lg font-bold text-signal mt-0.5">
                      {exp.organization}
                    </div>
                  </div>

                  {exp.highlightMetric && (
                    <div className="lg:text-right">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#11134F]/30 bg-[#FAF6CE] text-xs font-mono font-semibold text-[#11134F] shadow-sm">
                        <Award className="w-3.5 h-3.5 text-signal" />
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
                        <span className="w-1.5 h-1.5 rounded-full bg-signal mt-2 shrink-0"></span>
                        <span className="text-sm text-[#11134F]/85 font-medium leading-relaxed">
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-[#11134F]/15 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#11134F]/70 mr-2">
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

        {/* 2. ACADEMIC CREDENTIALS */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-signal"></span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#11134F] tracking-tight uppercase">
              Academic Foundation
            </h2>
          </div>

          <div className="space-y-8">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-10 rounded-2xl border-2 border-[#11134F] bg-[#FAF6CE] shadow-brutal relative overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#11134F]/15">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#11134F] text-[#FAF6CE] flex items-center justify-center shrink-0 shadow-sm">
                      <GraduationCap className="w-6 h-6 text-signal" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                        <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-[#11134F] text-[#FAF6CE]">
                          UNDERGRADUATE
                        </span>
                        <span className="text-xs font-mono text-[#11134F]/70 flex items-center gap-1 font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-signal" />
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

                {edu.highlights && (
                  <div className="mt-6">
                    <div className="text-xs font-mono font-bold uppercase text-[#11134F]/60 tracking-wider mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-signal" />
                      <span>Curricular Scope & Research Leadership:</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {edu.highlights.map((hl, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2.5 p-3 rounded-xl border border-[#11134F]/15 bg-[#FAF6CE]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-signal mt-0.5 shrink-0" />
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

        {/* 3. VERIFIED CERTIFICATIONS */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-signal"></span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#11134F] tracking-tight uppercase">
              Verified Certifications (4:3 Credentials)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl border-2 border-[#11134F] bg-[#FAF6CE] shadow-brutal hover:shadow-brutal-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-5 relative">
                    <AdaptiveImage
                      src={cert.assetPath}
                      alt={cert.title}
                      aspectRatio="cert"
                      type="cert"
                      label={cert.placeholderText}
                      expectedDimensions="1200 × 900"
                    />
                    {cert.credentialBadge && (
                      <div className="absolute top-3 right-3 z-20">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#11134F] text-[#FAF6CE] shadow-sm">
                          {cert.credentialBadge}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-signal">
                    <Award className="w-4 h-4" />
                    <span>{cert.issuer}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#11134F] tracking-tight mb-3 leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-[#11134F]/85 font-medium leading-relaxed mb-5">
                    {cert.description}
                  </p>

                  <div className="space-y-1 mb-6">
                    <div className="text-[10px] font-mono uppercase font-bold text-[#11134F]/60">
                      Core Curriculum:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono font-medium border border-[#11134F]/20 bg-[#FAF6CE] text-[#11134F]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#11134F]/15 flex items-center justify-between text-[11px] font-mono text-[#11134F]/70">
                  <span className="flex items-center gap-1 font-semibold text-[#11134F]">
                    <ShieldCheck className="w-3.5 h-3.5 text-signal" />
                    Verified Credential
                  </span>
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. CODING PROFILES & DEVELOPER REPOSITORIES */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-signal"></span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#11134F] tracking-tight uppercase">
              Coding Profiles & Open-Source Network
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {codingProfiles.map((profile) => {
              const Icon = profile.icon;
              return (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-7 rounded-2xl border-2 border-[#11134F] bg-[#FAF6CE] shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#11134F]/15">
                      <div className="w-12 h-12 rounded-xl border-1.5 border-[#11134F] bg-[#FAF6CE] text-[#11134F] flex items-center justify-center group-hover:bg-[#11134F] group-hover:text-[#FAF6CE] transition-colors duration-200 shadow-brutal-sm">
                        <Icon className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full border border-[#11134F]/30 bg-[#11134F]/5 text-[#11134F]">
                        {profile.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-[#11134F] tracking-tight mb-1 group-hover:text-signal transition-colors">
                      {profile.name}
                    </h3>
                    <div className="text-xs font-mono font-bold text-signal mb-4">
                      {profile.handle}
                    </div>

                    <p className="text-xs sm:text-sm text-[#11134F]/85 font-medium leading-relaxed mb-6">
                      {profile.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#11134F]/15 flex items-center justify-between text-xs font-mono font-bold text-[#11134F]">
                    <span>{profile.metric}</span>
                    <div className="flex items-center gap-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-signal">
                      <span>Visit Profile</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
