import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import { ArrowUpRight, Github, Linkedin, Code } from 'lucide-react';

export const CodingProfilesSection: React.FC = () => {
  const profiles = [
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
      metric: 'DSA & Algorithmic Problem Solving',
      badge: 'Core CS Foundations',
    },
  ];

  return (
    <section id="profiles" className="py-24 border-t border-[#11134F]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 pb-6 border-b border-[#11134F]/15">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#11134F]/70 mb-2">
              <span className="w-2 h-2 bg-[#11134F]"></span>
              SECTION // 08
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#11134F] tracking-tight uppercase">
              Coding Profiles & Network
            </h2>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-[#11134F]/70">
            <div>DEVELOPER REPOSITORIES • ALGORITHMIC PROFILES</div>
            <div>INDEPENDENT VERIFICATION // REAL-TIME DISPATCH</div>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile) => {
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

                  <h3 className="text-2xl font-black text-[#11134F] tracking-tight mb-1 group-hover:text-[#1D2175] transition-colors">
                    {profile.name}
                  </h3>
                  <div className="text-xs font-mono font-bold text-[#11134F]/70 mb-4">
                    {profile.handle}
                  </div>

                  <p className="text-xs sm:text-sm text-[#11134F]/85 font-medium leading-relaxed mb-6">
                    {profile.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#11134F]/15 flex items-center justify-between text-xs font-mono font-bold text-[#11134F]">
                  <span>{profile.metric}</span>
                  <div className="flex items-center gap-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <span>Visit Profile</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
