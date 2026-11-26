import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Terminal, Sparkles, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF6CE] border-t-2 border-[#11134F] py-12 text-[#11134F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#11134F]/15 items-start">
          {/* Brand & Mandate */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 font-black text-lg tracking-tight">
              <span className="w-6 h-6 rounded border border-[#11134F] flex items-center justify-center font-mono text-xs bg-[#11134F] text-[#FAF6CE]">
                P
              </span>
              <span>PRINCE KUMAR MAURYA</span>
            </div>
            <p className="text-xs text-[#11134F]/80 font-medium max-w-sm leading-relaxed">
              AI/ML Engineer, Computer Vision Developer & Robotics Automation Lead. Building deterministic perception pipelines, autonomous field systems, and full-stack client solutions.
            </p>
            <div className="text-[11px] font-mono text-[#11134F]/70 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-signal" />
              <span>COORDINATES: {personalInfo.contact.coordinates} // AKTU '27</span>
            </div>
          </div>

          {/* Quick Index */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-mono font-bold uppercase text-[#11134F]/60 tracking-wider">
              System Architecture Routes:
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono font-semibold">
              <Link to="/" className="hover:underline hover:text-signal transition-colors">
                › Overview / Home
              </Link>
              <Link to="/projects" className="hover:underline hover:text-signal transition-colors">
                › AI & CV Systems
              </Link>
              <Link to="/robotics" className="hover:underline hover:text-signal transition-colors">
                › Robotics & ROS 2
              </Link>
              <Link to="/ventures" className="hover:underline hover:text-signal transition-colors flex items-center gap-1">
                <span>› Ventures & Raga</span>
                <span className="text-[9px] bg-signal text-[#FAF6CE] px-1 rounded font-bold">NEW</span>
              </Link>
              <Link to="/experience" className="hover:underline hover:text-signal transition-colors">
                › Experience & Certs
              </Link>
              <Link to="/contact" className="hover:underline hover:text-signal transition-colors">
                › Direct Dispatch
              </Link>
            </div>
          </div>

          {/* Back to Top & Telemetry */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-1.5 border-[#11134F] text-xs font-mono font-bold hover:bg-[#11134F] hover:text-[#FAF6CE] transition-all shadow-brutal-sm active:translate-x-[1px] active:translate-y-[1px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

            <div className="text-[10px] font-mono text-[#11134F]/70 text-left md:text-right">
              <div>STATUS: READY FOR AI/CV DISPATCH</div>
              <div>public/assets/README.md</div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#11134F]/70">
          <div>
            © {new Date().getFullYear()} Prince Kumar Maurya. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/thegbson4u"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-bold"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/thegbson/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-bold"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="https://www.geeksforgeeks.org/profile/thegbson"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-bold"
            >
              GeeksforGeeks
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
