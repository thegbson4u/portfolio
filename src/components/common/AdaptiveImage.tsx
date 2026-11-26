import React, { useState } from 'react';
import { Camera, FileText, Award, Eye, Cpu, LucideIcon } from 'lucide-react';

interface AdaptiveImageProps {
  src?: string;
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

  const showPlaceholder = !src || imageError;

  return (
    <div
      className={`relative overflow-hidden ${isCircular ? 'rounded-full aspect-square' : 'rounded-2xl'} ${
        !isCircular ? aspectClasses : ''
      } bg-[#FAF6CE] border-1.5 border-[#11134F]/20 group ${className}`}
    >
      {/* Real image if supplied */}
      {src && !imageError && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Elegant Technical Blueprint Placeholder */}
      {showPlaceholder && (
        <div className="absolute inset-0 w-full h-full flex flex-col justify-between p-5 bg-[#FAF6CE] select-none text-[#11134F]">
          {/* Engineering grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#11134F 1px, transparent 1px), radial-gradient(#11134F 1px, #FAF6CE 1px)`,
              backgroundSize: '24px 24px',
              backgroundPosition: '0 0, 12px 12px',
            }}
          />

          {/* Crosshair accents in corners */}
          <div className="absolute top-2 left-2 text-[10px] font-mono text-[#11134F]/40 leading-none">+</div>
          <div className="absolute top-2 right-2 text-[10px] font-mono text-[#11134F]/40 leading-none">+</div>
          <div className="absolute bottom-2 left-2 text-[10px] font-mono text-[#11134F]/40 leading-none">+</div>
          <div className="absolute bottom-2 right-2 text-[10px] font-mono text-[#11134F]/40 leading-none">+</div>

          {/* Top telemetry header */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#11134F]/70 border-b border-[#11134F]/10 pb-2">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#11134F]/40 animate-pulse"></span>
              {type.toUpperCase()} // ASSET SLAB
            </span>
            {expectedDimensions && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#11134F]/5 text-[#11134F]/80">
                {expectedDimensions}
              </span>
            )}
          </div>

          {/* Center Schematic Art / Icon */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center px-4 py-2">
            <div className="w-14 h-14 rounded-full border border-[#11134F]/25 flex items-center justify-center bg-[#FAF6CE] shadow-sm mb-3 group-hover:scale-105 transition-transform duration-300">
              <Icon className="w-6 h-6 text-[#11134F]/80 stroke-[1.5]" />
            </div>
            <p className="font-mono text-xs font-semibold text-[#11134F] tracking-tight max-w-[240px]">
              {label || alt}
            </p>
            <p className="text-[10px] font-mono text-[#11134F]/60 mt-1">
              [ Drop production asset to replace ]
            </p>
          </div>

          {/* Bottom metadata footer */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#11134F]/60 pt-2 border-t border-[#11134F]/10">
            <span>RES: {expectedDimensions || 'AUTO'}</span>
            <span className="truncate max-w-[140px] text-right font-medium text-[#11134F]/80">
              {src ? src.split('/').slice(-2).join('/') : 'AWAITING FILE'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
