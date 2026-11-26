import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, FileDown, Terminal, Sparkles, Layers, Cpu, Briefcase, Mail, Home } from 'lucide-react';

interface NavItem {
  label: string;
  path: string;
  icon: React.ElementType;
  badge?: string;
}

const navItems: NavItem[] = [
  { label: 'Overview', path: '/', icon: Home },
  { label: 'Projects', path: '/projects', icon: Layers },
  { label: 'Robotics', path: '/robotics', icon: Cpu },
  { label: 'Ventures & Raga', path: '/ventures', icon: Sparkles, badge: 'NEW' },
  { label: 'Experience', path: '/experience', icon: Briefcase },
  { label: 'Contact', path: '/contact', icon: Mail },
];

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 sm:h-[72px] flex items-center ${
        isScrolled
          ? 'bg-[#FAF6CE]/95 backdrop-blur-md border-b-2 border-[#11134F] shadow-sm'
          : 'bg-[#FAF6CE] border-b-2 border-[#11134F]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 text-[#11134F] font-bold text-lg tracking-tight focus:outline-none"
            aria-label="Prince Kumar Maurya Home"
          >
            <div className="w-9 h-9 rounded-xl border-1.5 border-[#11134F] flex items-center justify-center font-mono text-xs font-black bg-[#FAF6CE] group-hover:bg-[#11134F] group-hover:text-[#FAF6CE] transition-all duration-200 shadow-brutal-sm">
              PKM
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-black tracking-tight leading-none text-[#11134F] uppercase">
                Prince Kumar Maurya
              </span>
              <span className="text-[10px] font-mono font-bold text-[#11134F]/70 tracking-wider leading-tight mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse"></span>
                <span>AI/ML & CV • ROBOTICS</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`relative px-3 py-1.5 text-xs font-mono font-bold tracking-tight rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#FAF6CE] bg-[#11134F] shadow-brutal-sm'
                      : 'text-[#11134F]/80 hover:text-[#11134F] hover:bg-[#11134F]/10'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold uppercase ${
                        isActive
                          ? 'bg-signal text-[#FAF6CE]'
                          : 'bg-signal/15 text-signal border border-signal/30'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs: Resume & Inquire */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="/assets/documents/resume.pdf"
              download="Prince_Kumar_Maurya_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold text-[#11134F] border-1.5 border-[#11134F] rounded-full hover:bg-[#11134F] hover:text-[#FAF6CE] transition-all duration-200 shadow-brutal-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
              title="Download official CV / Resume"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <Link
              to="/contact?type=client"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono font-bold text-[#FAF6CE] bg-signal border-1.5 border-[#11134F] rounded-full hover:bg-[#B83A0F] transition-all duration-200 shadow-brutal-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            >
              <span>Hire / Collaborate</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border-1.5 border-[#11134F] text-[#11134F] bg-[#FAF6CE] hover:bg-[#11134F] hover:text-[#FAF6CE] transition-colors focus:outline-none shadow-brutal-sm"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Slide-Down with generous 48px+ touch targets) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-16 sm:top-[72px] left-0 right-0 bottom-0 bg-[#FAF6CE] z-40 border-b-2 border-[#11134F] overflow-y-auto px-5 pt-4 pb-12 flex flex-col justify-between animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-2">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#11134F]/15 text-xs font-mono text-[#11134F]/70">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-signal" />
                <span>SYSTEM ROUTE CONSOLE</span>
              </span>
              <span className="text-[10px] bg-[#11134F]/10 px-2 py-0.5 rounded font-mono">
                GREATER NOIDA • IN
              </span>
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`w-full min-h-[52px] px-4 py-3 rounded-xl border-1.5 font-mono text-sm font-bold flex items-center justify-between transition-all duration-200 ${
                    isActive
                      ? 'bg-[#11134F] text-[#FAF6CE] border-[#11134F] shadow-brutal-sm'
                      : 'bg-[#FAF6CE] text-[#11134F] border-[#11134F]/25 hover:border-[#11134F] hover:bg-[#11134F]/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                        isActive
                          ? 'bg-[#FAF6CE] text-[#11134F] border-[#FAF6CE]'
                          : 'bg-[#FAF6CE] text-[#11134F] border-[#11134F]/30'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{item.label}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-mono font-bold bg-signal text-[#FAF6CE]">
                        {item.badge}
                      </span>
                    )}
                    <span className="text-xs font-mono">{isActive ? '● ACTIVE' : '→'}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile Drawer Bottom Actions */}
          <div className="pt-6 border-t border-[#11134F]/20 space-y-3">
            <Link
              to="/contact?type=client"
              className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono font-bold text-[#FAF6CE] bg-signal border-2 border-[#11134F] rounded-xl shadow-brutal-sm"
            >
              <span>Start Client Project / Raga Apps Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="/assets/documents/resume.pdf"
                download="Prince_Kumar_Maurya_Resume.pdf"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono font-bold text-[#11134F] border-1.5 border-[#11134F] rounded-xl bg-[#FAF6CE] shadow-brutal-sm"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume (.PDF)</span>
              </a>

              <a
                href="https://github.com/thegbson4u"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono font-bold text-[#11134F] border-1.5 border-[#11134F] rounded-xl bg-[#FAF6CE] shadow-brutal-sm"
              >
                <span>GitHub ↗</span>
              </a>
            </div>

            <div className="text-center font-mono text-[10px] text-[#11134F]/60 pt-2">
              COORD: 28.4744° N, 77.5040° E • AKTU '27
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
