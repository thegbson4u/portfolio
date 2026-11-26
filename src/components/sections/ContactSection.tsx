import React, { useState } from 'react';
import { personalInfo } from '../../data/personalInfo';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 border-t border-[#11134F]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 pb-6 border-b border-[#11134F]/15">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#11134F]/70 mb-2">
              <span className="w-2 h-2 bg-[#11134F]"></span>
              SECTION // 09
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#11134F] tracking-tight uppercase">
              Get in Touch
            </h2>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-[#11134F]/70">
            <div>AI/ML & COMPUTER VISION ROLES // RESEARCH INQUIRIES</div>
            <div>DIRECT PROTOCOL DISPATCH</div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Telemetry */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-black text-[#11134F] tracking-tight">
              Let's engineer the future of intelligent systems together.
            </h3>
            <p className="text-sm text-[#11134F]/85 font-medium leading-relaxed">
              Whether you are looking to hire for AI/ML engineering, computer vision perception, RAG deployments, or robotics collaboration, I am eager to connect.
            </p>

            <div className="space-y-4 pt-2">
              {/* Email Card */}
              <div className="p-4 rounded-xl border-1.5 border-[#11134F] bg-[#FAF6CE] shadow-brutal-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#11134F] text-[#FAF6CE] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase text-[#11134F]/60">
                      ELECTRONIC MAIL
                    </div>
                    <a
                      href={`mailto:${personalInfo.contact.email}`}
                      className="text-sm font-mono font-bold text-[#11134F] hover:underline break-all"
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
                    <Check className="w-4 h-4 text-emerald-700" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl border-1.5 border-[#11134F] bg-[#FAF6CE] shadow-brutal-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#11134F] text-[#FAF6CE] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase text-[#11134F]/60">
                      TELEPHONE / DIRECT CALL
                    </div>
                    <a
                      href={`tel:${personalInfo.contact.phone}`}
                      className="text-sm font-mono font-bold text-[#11134F] hover:underline"
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
                    <Check className="w-4 h-4 text-emerald-700" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl border-1.5 border-[#11134F] bg-[#FAF6CE] shadow-brutal-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#11134F] text-[#FAF6CE] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase text-[#11134F]/60">
                    GEOGRAPHIC LOCATION
                  </div>
                  <div className="text-sm font-mono font-bold text-[#11134F]">
                    {personalInfo.contact.location}
                  </div>
                  <div className="text-[10px] font-mono text-[#11134F]/70">
                    Coordinates: {personalInfo.contact.coordinates}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Dispatch Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#11134F] bg-[#FAF6CE] shadow-brutal">
              <div className="flex items-center gap-2 pb-4 mb-6 border-b border-[#11134F]/15 text-xs font-mono font-bold text-[#11134F]">
                <MessageSquare className="w-4 h-4" />
                <span>DISPATCH TRANSMISSION PROTOCOL</span>
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
                      className="w-full px-3.5 py-2.5 rounded-lg border-1.5 border-[#11134F] bg-[#FAF6CE] text-sm font-mono text-[#11134F] placeholder-[#11134F]/40 focus:outline-none focus:ring-2 focus:ring-[#11134F]"
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
                      className="w-full px-3.5 py-2.5 rounded-lg border-1.5 border-[#11134F] bg-[#FAF6CE] text-sm font-mono text-[#11134F] placeholder-[#11134F]/40 focus:outline-none focus:ring-2 focus:ring-[#11134F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[#11134F]/70 mb-1.5">
                    Subject / Project Context *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Computer Vision Role / AI Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border-1.5 border-[#11134F] bg-[#FAF6CE] text-sm font-mono text-[#11134F] placeholder-[#11134F]/40 focus:outline-none focus:ring-2 focus:ring-[#11134F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[#11134F]/70 mb-1.5">
                    Transmission Content *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project, team opportunity or technical inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border-1.5 border-[#11134F] bg-[#FAF6CE] text-sm font-mono text-[#11134F] placeholder-[#11134F]/40 focus:outline-none focus:ring-2 focus:ring-[#11134F] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#11134F] text-[#FAF6CE] font-mono font-bold text-sm tracking-tight shadow-brutal hover:bg-[#1D2175] hover:shadow-brutal-lg transition-all duration-200 active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message via Email Protocol</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
