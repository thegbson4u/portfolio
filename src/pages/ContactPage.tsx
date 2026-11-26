import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { personalInfo } from '../data/personalInfo';
import { Mail, Phone, MapPin, Send, Copy, Check, FileDown, MessageSquare, Sparkles, Briefcase, ArrowUpRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [inquiryType, setInquiryType] = useState<'technical' | 'client'>('technical');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    timelineOrBudget: '',
    message: '',
  });

  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'client') {
      setInquiryType('client');
      setFormData((prev) => ({
        ...prev,
        subject: 'Client Project / Raga Apps Inquiry',
      }));
    } else {
      setInquiryType('technical');
      setFormData((prev) => ({
        ...prev,
        subject: 'Technical Role / AI Engineering Opportunity',
      }));
    }
  }, [searchParams]);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      formData.subject || (inquiryType === 'client' ? 'Client Inquiry for Prince' : 'Engineering Inquiry for Prince')
    );
    const bodyContent = `Type: ${inquiryType === 'client' ? 'Client Web & AI Project' : 'Technical Hiring / Collaboration'}
Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization || 'N/A'}
Scope / Timeline: ${formData.timelineOrBudget || 'N/A'}

Message:
${formData.message}`;

    const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${mailSubject}&body=${encodeURIComponent(
      bodyContent
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-6 border-b-2 border-[#11134F]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-signal mb-2">
              <span className="w-2 h-2 bg-signal"></span>
              DIRECT DISPATCH PROTOCOL
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#11134F] tracking-tight uppercase">
              Contact & Collaboration
            </h1>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-[#11134F]/75">
            <div>RESPONSE TIME: &lt;24 HOURS // DELHI NCR • REMOTE</div>
            <div>VERIFIED CHANNELS // DIRECT PROTOCOL</div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info, Copy Cards, Resume Trigger */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-[#11134F] tracking-tight">
              Let's engineer deterministic AI systems or deploy your next client web build.
            </h2>
            <p className="text-sm text-[#11134F]/85 font-medium leading-relaxed">
              Available for full-time AI/ML, Computer Vision, and Robotics engineering roles, as well as bespoke client contracts under the Raga Apps ecosystem.
            </p>

            <div className="space-y-4 pt-2">
              {/* Email Card */}
              <div className="p-4 rounded-xl border-1.5 border-[#11134F] bg-[#FAF6CE] shadow-brutal-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#11134F] text-[#FAF6CE] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-signal" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase text-[#11134F]/60">
                      ELECTRONIC MAIL
                    </div>
                    <a
                      href={`mailto:${personalInfo.contact.email}`}
                      className="text-sm font-mono font-bold text-[#11134F] hover:underline hover:text-signal break-all"
                    >
                      {personalInfo.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.contact.email, 'email')}
                  className="p-2 rounded-lg border border-[#11134F]/20 text-[#11134F] hover:bg-[#11134F]/10 transition-colors ml-2 shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-signal" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl border-1.5 border-[#11134F] bg-[#FAF6CE] shadow-brutal-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#11134F] text-[#FAF6CE] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-signal" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase text-[#11134F]/60">
                      TELEPHONE / DIRECT CALL
                    </div>
                    <a
                      href={`tel:${personalInfo.contact.phone}`}
                      className="text-sm font-mono font-bold text-[#11134F] hover:underline hover:text-signal"
                    >
                      {personalInfo.contact.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.contact.phone, 'phone')}
                  className="p-2 rounded-lg border border-[#11134F]/20 text-[#11134F] hover:bg-[#11134F]/10 transition-colors ml-2 shrink-0"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-signal" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl border-1.5 border-[#11134F] bg-[#FAF6CE] shadow-brutal-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#11134F] text-[#FAF6CE] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-signal" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase text-[#11134F]/60">
                    GEOGRAPHIC LOCATION
                  </div>
                  <div className="text-sm font-mono font-bold text-[#11134F]">
                    {personalInfo.contact.location}
                  </div>
                  <div className="text-[10px] font-mono text-[#11134F]/70">
                    Coordinates: {personalInfo.contact.coordinates} • IEC CET (AKTU)
                  </div>
                </div>
              </div>

              {/* Resume Trigger Card */}
              <div className="p-4 rounded-xl border-2 border-[#11134F] bg-[#F2ECC0] shadow-brutal-sm flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-[#11134F] uppercase">
                    OFFICIAL CURRICULUM VITAE
                  </div>
                  <div className="text-[11px] font-mono text-[#11134F]/70">
                    PDF Document // Updated 2026 – 2027
                  </div>
                </div>
                <a
                  href="/assets/documents/resume.pdf"
                  download="Prince_Kumar_Maurya_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#11134F] text-[#FAF6CE] text-xs font-mono font-bold hover:bg-[#1D2175] transition-all shadow-sm"
                >
                  <FileDown className="w-3.5 h-3.5 text-signal" />
                  <span>Download .PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dual-Mode Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#11134F] bg-[#FAF6CE] shadow-brutal">
              {/* Dual-Mode Selector Tabs */}
              <div className="flex items-center gap-2 mb-6 p-1 rounded-xl bg-[#F2ECC0] border border-[#11134F]/20">
                <button
                  type="button"
                  onClick={() => {
                    setInquiryType('technical');
                    setFormData((prev) => ({
                      ...prev,
                      subject: 'Technical Role / AI Engineering Opportunity',
                    }));
                  }}
                  className={`flex-1 min-h-[44px] py-2 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all ${
                    inquiryType === 'technical'
                      ? 'bg-[#11134F] text-[#FAF6CE] shadow-brutal-sm'
                      : 'text-[#11134F] hover:bg-[#FAF6CE]'
                  }`}
                >
                  <Briefcase className="w-4 h-4 text-signal" />
                  <span>Hiring / Technical Role</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setInquiryType('client');
                    setFormData((prev) => ({
                      ...prev,
                      subject: 'Client Project / Raga Apps Inquiry',
                    }));
                  }}
                  className={`flex-1 min-h-[44px] py-2 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all ${
                    inquiryType === 'client'
                      ? 'bg-signal text-[#FAF6CE] shadow-brutal-sm'
                      : 'text-[#11134F] hover:bg-[#FAF6CE]'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Client Website / Raga Apps</span>
                </button>
              </div>

              <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#11134F]/15 text-xs font-mono font-bold text-[#11134F]">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-signal" />
                  <span>
                    {inquiryType === 'client'
                      ? 'CLIENT ENGINEERING INTAKE PROTOCOL'
                      : 'TECHNICAL RECRUITMENT DISPATCH'}
                  </span>
                </div>
                <span className="text-[10px] text-signal font-bold uppercase">
                  {inquiryType === 'client' ? '• COMMERCIAL INQUIRY' : '• TALENT ACQUISITION'}
                </span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#11134F]/70 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border-1.5 border-[#11134F] bg-[#FAF6CE] text-sm font-mono text-[#11134F] placeholder-[#11134F]/40 focus:outline-none focus:ring-2 focus:ring-signal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#11134F]/70 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@engineering.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border-1.5 border-[#11134F] bg-[#FAF6CE] text-sm font-mono text-[#11134F] placeholder-[#11134F]/40 focus:outline-none focus:ring-2 focus:ring-signal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#11134F]/70 mb-1.5">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Robotics Labs / Enterprise Tech"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border-1.5 border-[#11134F] bg-[#FAF6CE] text-sm font-mono text-[#11134F] placeholder-[#11134F]/40 focus:outline-none focus:ring-2 focus:ring-signal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#11134F]/70 mb-1.5">
                      {inquiryType === 'client' ? 'Estimated Scope / Timeline' : 'Target Role / Level'}
                    </label>
                    <input
                      type="text"
                      placeholder={inquiryType === 'client' ? 'e.g. 4-6 weeks / Full-stack app' : 'e.g. AI/ML Engineer / Perception'}
                      value={formData.timelineOrBudget}
                      onChange={(e) => setFormData({ ...formData, timelineOrBudget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border-1.5 border-[#11134F] bg-[#FAF6CE] text-sm font-mono text-[#11134F] placeholder-[#11134F]/40 focus:outline-none focus:ring-2 focus:ring-signal"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[#11134F]/70 mb-1.5">
                    Subject Header *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border-1.5 border-[#11134F] bg-[#FAF6CE] text-sm font-mono text-[#11134F] placeholder-[#11134F]/40 focus:outline-none focus:ring-2 focus:ring-signal"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[#11134F]/70 mb-1.5">
                    Project Context / Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={
                      inquiryType === 'client'
                        ? 'Describe your desired web build, AI workflow integration, or Raga Apps requirements...'
                        : 'Describe your team mandate, technical challenges, or recruitment process...'
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border-1.5 border-[#11134F] bg-[#FAF6CE] text-sm font-mono text-[#11134F] placeholder-[#11134F]/40 focus:outline-none focus:ring-2 focus:ring-signal resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[50px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#11134F] text-[#FAF6CE] font-mono font-bold text-sm tracking-tight shadow-brutal hover:bg-signal hover:shadow-brutal-lg transition-all duration-200 active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  <Send className="w-4 h-4 text-signal" />
                  <span>Transmit Protocol via Email</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
