import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Cpu, Binary } from 'lucide-react';

interface HeroPortraitProps {
  src?: string;
  alt: string;
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({
  src = '/assets/profile/portrait.png',
  alt = 'Prince Kumar Maurya',
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const hasRealImage = src && !imageError;

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-square mx-auto flex items-center justify-center select-none">
      {/* Decorative Outer Orbital Rings */}
      <div className="absolute inset-[-14px] sm:inset-[-20px] rounded-full border border-dashed border-[#11134F]/20 animate-[spin_60s_linear_infinite] pointer-events-none" />
      <div className="absolute inset-[-32px] rounded-full border border-[#11134F]/10 hidden sm:block pointer-events-none" />

      {/* Decorative Coordinate Marks on Cardinal Points */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#11134F]/60 bg-[#FAF6CE] px-1.5 py-0.5 border border-[#11134F]/20 rounded z-20">
        N 28°31'
      </div>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#11134F]/60 bg-[#FAF6CE] px-1.5 py-0.5 border border-[#11134F]/20 rounded z-20">
        E 77°30'
      </div>

      {/* Floating Badges */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute -left-4 sm:-left-6 top-10 sm:top-14 z-20 bg-[#FAF6CE] border border-[#11134F] px-3 py-1.5 rounded-full shadow-[2px_2px_0px_0px_#11134F] flex items-center gap-1.5"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
        <span className="text-[11px] font-mono font-medium text-[#11134F] tracking-tight">AI & CV Lead</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute -right-4 sm:-right-6 bottom-12 sm:bottom-16 z-20 bg-[#FAF6CE] border border-[#11134F] px-3 py-1.5 rounded-full shadow-[2px_2px_0px_0px_#11134F] flex items-center gap-1.5"
      >
        <Cpu className="w-3.5 h-3.5 text-[#11134F]" />
        <span className="text-[11px] font-mono font-medium text-[#11134F] tracking-tight">Robotics // ROS2</span>
      </motion.div>

      {/* Main Circular Portrait Container */}
      <div className="relative w-full h-full rounded-full border-2 border-[#11134F] overflow-hidden bg-[#F2ECC0] shadow-[6px_6px_0px_0px_#11134F]">
        {/* Real photo if user drops portrait.png */}
        {hasRealImage && (
          <img
            src={src}
            alt={alt}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover rounded-full transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* High-End Architectural Schematic Fallback */}
        {(!hasRealImage || !imageLoaded) && (
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#FAF6CE] to-[#EAE3B2]">
            {/* Engineering Grid */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `radial-gradient(#11134F 1px, transparent 1px)`,
                backgroundSize: '16px 16px',
              }}
            />

            {/* Neural Net Nodes / Vision Crosshairs */}
            <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[#11134F]/30 flex items-center justify-center mb-3">
              <div className="w-16 h-16 rounded-full border border-[#11134F]/40 flex items-center justify-center bg-[#FAF6CE]/80 shadow-sm">
                <Eye className="w-8 h-8 text-[#11134F] stroke-[1.5]" />
              </div>
              {/* Corner crosshairs */}
              <span className="absolute top-1 left-1 text-[8px] font-mono text-[#11134F]/50">+</span>
              <span className="absolute top-1 right-1 text-[8px] font-mono text-[#11134F]/50">+</span>
              <span className="absolute bottom-1 left-1 text-[8px] font-mono text-[#11134F]/50">+</span>
              <span className="absolute bottom-1 right-1 text-[8px] font-mono text-[#11134F]/50">+</span>
            </div>

            <h4 className="relative z-10 font-bold text-sm tracking-tight text-[#11134F]">
              Prince Kumar Maurya
            </h4>
            <p className="relative z-10 text-[11px] font-mono text-[#11134F]/70 mt-0.5">
              AI/ML & Computer Vision
            </p>

            <div className="relative z-10 mt-3 inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#11134F]/10 border border-[#11134F]/20 text-[9px] font-mono text-[#11134F]">
              <Binary className="w-2.5 h-2.5" />
              <span>public/assets/profile/portrait.png</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
