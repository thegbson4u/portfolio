import React, { useState } from 'react';
import { Github, Linkedin, Code, Mail, Phone, ArrowRight, ArrowUpRight, Copy, Check } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';

export const SocialAndFooterCta: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const socials = [
    {
      label: 'GitHub',
      handle: '@thegbson4u',
      url: personalInfo.socials.github,
      icon: Github,
    },
    {
      label: 'LinkedIn',
      handle: 'thegbson',
      url: personalInfo.socials.linkedin,
      icon: Linkedin,
    },
    {
      label: 'GeeksforGeeks',
      handle: '@thegbson',
      url: personalInfo.socials.geeksforgeeks,
      icon: Code,
    },
  ];

  return (
    <section id="contact" className="space-y-8 pt-4">
      {/* 1. Social & Contact Pill Cards Row */}
      <div className="space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-dashed border-black/10 dark:border-white/10 text-xs font-mono text-[#5C5E6B] dark:text-[#9A9AA3] uppercase">
          <span>Connect & Profiles</span>
          <span>Verified Channels</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-dashed border-black/15 dark:border-white/15 bg-white dark:bg-[#161619] hover:border-[#E05A87] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center text-[#14151C] dark:text-[#F4F4F6] group-hover:text-[#E05A87] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#14151C] dark:text-[#F4F4F6] group-hover:text-[#E05A87] transition-colors">
                      {s.label}
                    </div>
                    <div className="text-[10px] font-mono text-[#5C5E6B] dark:text-[#9A9AA3]">
                      {s.handle}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#5C5E6B] dark:text-[#9A9AA3] group-hover:text-[#E05A87] transition-colors" />
              </a>
            );
          })}
        </div>

        {/* Email & Phone Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {/* Email */}
          <div className="p-3.5 rounded-xl border border-dashed border-black/15 dark:border-white/15 bg-white dark:bg-[#161619] flex items-center justify-between">
            <div className="flex items-center gap-2.5 truncate mr-2">
              <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center text-[#E05A87] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="truncate">
                <div className="text-[10px] font-mono uppercase text-[#5C5E6B] dark:text-[#9A9AA3]">
                  Email
                </div>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="text-xs font-mono font-medium text-[#14151C] dark:text-[#F4F4F6] hover:text-[#E05A87] truncate block"
                >
                  {personalInfo.contact.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(personalInfo.contact.email, 'email')}
              className="p-1.5 rounded-lg border border-dashed border-black/15 dark:border-white/15 text-[#5C5E6B] dark:text-[#9A9AA3] hover:text-[#E05A87] transition-colors shrink-0"
              title="Copy email"
            >
              {copiedField === 'email' ? (
                <Check className="w-3.5 h-3.5 text-[#E05A87]" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Phone */}
          <div className="p-3.5 rounded-xl border border-dashed border-black/15 dark:border-white/15 bg-white dark:bg-[#161619] flex items-center justify-between">
            <div className="flex items-center gap-2.5 truncate mr-2">
              <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center text-[#E05A87] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="truncate">
                <div className="text-[10px] font-mono uppercase text-[#5C5E6B] dark:text-[#9A9AA3]">
                  Direct Call
                </div>
                <a
                  href={`tel:${personalInfo.contact.phone}`}
                  className="text-xs font-mono font-medium text-[#14151C] dark:text-[#F4F4F6] hover:text-[#E05A87] truncate block"
                >
                  {personalInfo.contact.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(personalInfo.contact.phone, 'phone')}
              className="p-1.5 rounded-lg border border-dashed border-black/15 dark:border-white/15 text-[#5C5E6B] dark:text-[#9A9AA3] hover:text-[#E05A87] transition-colors shrink-0"
              title="Copy phone"
            >
              {copiedField === 'phone' ? (
                <Check className="w-3.5 h-3.5 text-[#E05A87]" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Centered Italic Serif Closing CTA Banner */}
      <div className="rounded-2xl border border-dashed border-black/15 dark:border-white/15 bg-gradient-to-b from-[#F7F4F5] to-[#EFEBEB] dark:from-[#18181D] dark:to-[#121215] p-8 sm:p-12 text-center space-y-4">
        <h3 className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#14151C] dark:text-[#F4F4F6]">
          Have an idea? <br className="hidden sm:block" />
          <span className="text-[#C83E6B] dark:text-[#E05A87]">
            Let's build something together.
          </span>
        </h3>

        <p className="text-xs font-mono text-[#5C5E6B] dark:text-[#9A9AA3] max-w-md mx-auto leading-relaxed">
          Available for AI/ML engineering, edge computer vision, and autonomous robotics roles.
        </p>

        <div className="pt-2 flex justify-center">
          <a
            href={`mailto:${personalInfo.contact.email}?subject=Project%20Inquiry%20from%20Portfolio`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold bg-[#E05A87] hover:bg-[#C83E6B] text-white shadow-lg transition-all"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Clean Footer Line */}
      <footer className="pt-6 pb-20 md:pb-8 border-t border-dashed border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#5C5E6B] dark:text-[#9A9AA3]">
        <div>
          © {new Date().getFullYear()} Prince Kumar Maurya · Designed & Engineered
        </div>
        <div className="flex items-center gap-2">
          <span>AKTU '27</span>
          <span className="opacity-40">·</span>
          <span>Delhi NCR, India</span>
        </div>
      </footer>
    </section>
  );
};
