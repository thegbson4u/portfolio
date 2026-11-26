import React, { useState } from 'react';
import { assetManifest } from '../../data/assetManifest';
import { Database, X, Info } from 'lucide-react';

export const AssetManifestModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Trigger Pill */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 md:bottom-5 right-5 z-30 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-dashed border-black/20 dark:border-white/20 bg-white/95 dark:bg-[#161619]/90 backdrop-blur-md text-xs font-mono font-medium text-[#5C5E6B] dark:text-[#9A9AA3] hover:text-[#E05A87] hover:border-[#E05A87] transition-all shadow-lg"
        title="View Production Asset Manifest"
      >
        <Database className="w-3.5 h-3.5 text-[#E05A87]" />
        <span className="hidden sm:inline">Asset Manifest</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#E05A87] animate-pulse"></span>
      </button>

      {/* Modal Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#161619] border border-dashed border-black/20 dark:border-white/20 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden text-[#14151C] dark:text-[#F4F4F6]">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-dashed border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
              <div className="flex items-center gap-2.5">
                <Database className="w-5 h-5 text-[#E05A87]" />
                <div>
                  <h3 className="font-mono font-bold text-sm uppercase tracking-tight">
                    Production Asset Manifest & Registry
                  </h3>
                  <p className="text-[11px] font-mono text-[#5C5E6B] dark:text-[#9A9AA3]">
                    Directory: public/assets/ · Adaptive Fallbacks Active
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg border border-dashed border-black/20 dark:border-white/20 text-[#5C5E6B] dark:text-[#9A9AA3] hover:text-[#14151C] dark:hover:text-[#F4F4F6] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content List */}
            <div className="p-6 overflow-y-auto space-y-4">
              <div className="p-3.5 rounded-xl border border-dashed border-[#E05A87]/30 bg-[#E05A87]/5 text-xs font-mono text-[#5C5E6B] dark:text-[#9A9AA3] flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#E05A87] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  The portfolio uses an adaptive architectural asset pipeline. Every section features a dedicated SVG technical blueprint placeholder that gracefully flips to your production photo or certificate as soon as the file is dropped into the specified location.
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-dashed border-black/10 dark:border-white/10 text-[#5C5E6B] dark:text-[#9A9AA3] uppercase text-[10px]">
                      <th className="py-2.5 px-3">Section</th>
                      <th className="py-2.5 px-3">Path</th>
                      <th className="py-2.5 px-3">Dimensions</th>
                      <th className="py-2.5 px-3">Ratio</th>
                      <th className="py-2.5 px-3">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dashed divide-black/10 dark:divide-white/10">
                    {assetManifest.map((entry) => (
                      <tr key={entry.key} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                        <td className="py-2.5 px-3 font-bold text-[#E05A87] whitespace-nowrap">
                          {entry.section}
                        </td>
                        <td className="py-2.5 px-3 font-semibold whitespace-nowrap">
                          <code>{entry.assetPath}</code>
                        </td>
                        <td className="py-2.5 px-3 text-[#5C5E6B] dark:text-[#9A9AA3] whitespace-nowrap">
                          {entry.expectedDimensions}
                        </td>
                        <td className="py-2.5 px-3 text-[#5C5E6B] dark:text-[#9A9AA3] whitespace-nowrap">
                          {entry.aspectRatio}
                        </td>
                        <td className="py-2.5 px-3 text-[#5C5E6B] dark:text-[#9A9AA3]">
                          {entry.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-dashed border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-[#5C5E6B] dark:text-[#9A9AA3]">
                Total Tracked Assets: {assetManifest.length}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-1.5 rounded-full border border-dashed border-black/20 dark:border-white/20 text-[#14151C] dark:text-[#F4F4F6] hover:border-[#E05A87] hover:text-[#E05A87] transition-colors"
              >
                Close Manifest
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
