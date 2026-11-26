import React, { useState } from 'react';
import { Camera, FileText, Award, Eye, Cpu, LucideIcon } from 'lucide-react';

interface AdaptiveImageProps {
  src?: string;
  assetPath?: string;
  alt: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'card' | 'cert';
  type?: 'profile' | 'cert' | 'vision' | 'rag' | 'robotics' | 'doc' | 'generic';
  label?: string;
  expectedDimensions?: string;
  className?: string;
  isCircular?: boolean;
  priority?: boolean;
}

export const AdaptiveImage: React.FC<AdaptiveImageProps> = ({
  src,
  assetPath,
  alt,
  aspectRatio = 'card',
  type = 'generic',
  label,
  expectedDimensions,
  className = '',
  isCircular = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const effectiveSrc = assetPath || src;

  // Aspect ratio classes
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-[16/10]',
    portrait: 'aspect-[3/4]',
    card: 'aspect-[16/10]',
    cert: 'aspect-[4/3]',
  }[aspectRatio];

  const getIcon = (): LucideIcon => {
    switch (type) {
      case 'profile':
        return Camera;
      case 'cert':
        return Award;
      case 'vision':
        return Eye;
      case 'robotics':
        return Cpu;
      case 'doc':
        return FileText;
      default:
        return Cpu;
    }
  };

  const Icon = getIcon();
  const showPlaceholder = !effectiveSrc || imageError;

  const hasBorderClass = className.includes('border-');
  const hasRoundedClass = className.includes('rounded-');
  const hasAspectClass = className.includes('aspect-') || className.includes('h-full');

  return (
    <div
      className={`relative overflow-hidden ${
        hasRoundedClass ? '' : isCircular ? 'rounded-full aspect-square' : 'rounded-2xl'
      } ${!isCircular && !hasAspectClass ? aspectClasses : ''} ${
        hasBorderClass ? '' : 'border border-dashed border-black/10 dark:border-white/10'
      } bg-[#FAF7F8] dark:bg-[#161619] group ${className}`}
    >
      {/* Real image if supplied */}
      {effectiveSrc && !imageError && (
        <img
          src={effectiveSrc}
          alt={alt}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Elegant Technical Blueprint Placeholder in Dark/Light Rose aesthetic */}
      {showPlaceholder && (
        <div className="absolute inset-0 w-full h-full flex flex-col justify-between p-4 sm:p-5 bg-[#FAF7F8] text-[#14151C] dark:bg-[#141417] dark:text-[#F4F4F6] select-none transition-colors">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />

          {/* Crosshair accents in corners */}
          <div className="absolute top-2 left-2 text-[9px] font-mono opacity-30 leading-none">+</div>
          <div className="absolute top-2 right-2 text-[9px] font-mono opacity-30 leading-none">+</div>
          <div className="absolute bottom-2 left-2 text-[9px] font-mono opacity-30 leading-none">+</div>
          <div className="absolute bottom-2 right-2 text-[9px] font-mono opacity-30 leading-none">+</div>

          {/* Top telemetry header */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#5C5E6B] dark:text-[#9A9AA3] border-b border-black/10 dark:border-white/10 pb-2">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E05A87] animate-pulse"></span>
              {type.toUpperCase()} // ASSET SLAB
            </span>
            {expectedDimensions && (
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 font-mono">
                {expectedDimensions}
              </span>
            )}
          </div>

          {/* Center Schematic Art / Icon with Rose Glow */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center px-4 py-2">
            <div className="w-12 h-12 rounded-full border border-dashed border-[#E05A87]/40 flex items-center justify-center bg-[#E05A87]/10 mb-2.5 group-hover:scale-105 transition-transform duration-300">
              <Icon className="w-5 h-5 text-[#E05A87] stroke-[1.8]" />
            </div>
            <p className="font-mono text-xs font-semibold tracking-tight text-[#14151C] dark:text-[#F4F4F6] max-w-[220px]">
              {label || alt}
            </p>
            <p className="text-[10px] font-mono text-[#5C5E6B] dark:text-[#9A9AA3] mt-1">
              [ Drop production asset to replace ]
            </p>
          </div>

          {/* Bottom metadata footer */}
          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-[#5C5E6B] dark:text-[#9A9AA3] pt-2 border-t border-black/10 dark:border-white/10">
            <span>RES: {expectedDimensions || 'AUTO'}</span>
            <span className="truncate max-w-[130px] text-right font-medium opacity-80">
              {effectiveSrc ? effectiveSrc.split('/').slice(-2).join('/') : 'AWAITING FILE'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
