import React from 'react';
import { certificates } from '../../data/certificates';
import { AdaptiveImage } from '../common/AdaptiveImage';
import { Award, ShieldCheck } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 border-t border-[#11134F]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 pb-6 border-b border-[#11134F]/15">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#11134F]/70 mb-2">
              <span className="w-2 h-2 bg-[#11134F]"></span>
              SECTION // 06
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#11134F] tracking-tight uppercase">
              Certifications & Credentials
            </h2>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-[#11134F]/70">
            <div>ACADEMIC RIGOR & PROFESSIONAL MASTERY</div>
            <div>NPTEL IIT KGP • UDEMY • EMBEDDED ROS 2</div>
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl border-2 border-[#11134F] bg-[#FAF6CE] shadow-brutal hover:shadow-brutal-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Certificate Media Slab with Fixed 4:3 Aspect Ratio Placeholder */}
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

                {/* Issuer */}
                <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-[#11134F]/70">
                  <Award className="w-4 h-4 text-[#11134F]" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#11134F] tracking-tight mb-3 leading-snug">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#11134F]/85 font-medium leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Skills tags */}
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

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#11134F]/15 flex items-center justify-between text-[11px] font-mono text-[#11134F]/70">
                <span className="flex items-center gap-1 font-semibold text-[#11134F]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  Verified Credential
                </span>
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
