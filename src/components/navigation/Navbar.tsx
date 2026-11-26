import React, { useState, useEffect } from 'react';
import { Sun, Moon, Home, FolderGit2, Briefcase, Cpu, Mail } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'robotics', label: 'Robotics', icon: Cpu },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FAF8F8]/90 dark:bg-[#0E0E10]/80 border-b border-dashed border-black/10 dark:border-white/10 transition-colors">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand Mark in Stylized Script Font */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-1.5 text-left group focus:outline-none"
            aria-label="theGBson Home"
          >
            <span className="font-script text-2xl sm:text-3xl font-bold tracking-wide text-[#14151C] dark:text-[#F4F4F6] group-hover:text-[#C83E6B] dark:group-hover:text-[#E05A87] transition-colors">
              theGBson
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E05A87] inline-block mb-2"></span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Desktop Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-xs font-mono font-medium tracking-tight transition-colors py-1 ${
                    isActive
                      ? 'text-[#14151C] dark:text-[#F4F4F6] font-semibold'
                      : 'text-[#5C5E6B] dark:text-[#9A9AA3] hover:text-[#14151C] dark:hover:text-[#F4F4F6]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E05A87] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Theme Switcher Toggle Pill */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-dashed border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 hover:border-[#E05A87] text-[#5C5E6B] dark:text-[#9A9AA3] hover:text-[#14151C] dark:hover:text-[#F4F4F6] transition-all focus:outline-none"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <>
                <Moon className="w-3.5 h-3.5 text-[#E05A87]" />
                <span className="text-[11px] font-mono font-medium">Dark</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-[#C83E6B]" />
                <span className="text-[11px] font-mono font-medium">Light</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Floating Bottom Dock (< 768px) */}
      <nav
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-3 py-2 rounded-full border border-dashed border-black/15 dark:border-white/20 bg-white/95 dark:bg-[#161619]/95 backdrop-blur-md shadow-2xl flex items-center gap-1 sm:gap-2 transition-all"
        aria-label="Mobile Navigation Dock"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all min-h-[38px] ${
                isActive
                  ? 'bg-[#E05A87] text-white shadow-sm font-semibold'
                  : 'text-[#5C5E6B] dark:text-[#9A9AA3] hover:text-[#14151C] dark:hover:text-white'
              }`}
              aria-label={item.label}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className={isActive ? 'inline' : 'hidden sm:inline'}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
