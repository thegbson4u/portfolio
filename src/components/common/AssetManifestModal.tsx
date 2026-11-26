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
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 px-3.5 py-2 rounded-full border-1.5 border-[#11134F] bg-[#FAF6CE] text-[#11134F] text-xs font-mono font-bold shadow-brutal hover:bg-[#11134F] hover:text-[#FAF6CE] transition-all duration-200 active:translate-x-1 active:translate-y-1 active:shadow-none"
        title="View Production Asset Manifest"
      >
        <Database className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Asset Manifest</span>
        <span className="sm:hidden">Assets</span>
        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
      </button>

      {/* Modal Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#11134F]/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF6CE] border-2 border-[#11134F] rounded-2xl shadow-brutal-lg w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden text-[#11134F]">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b-2 border-[#11134F] bg-[#F2ECC0]">
              <div className="flex items-center gap-2.5">
                <Database className="w-5 h-5 text-[#11134F]" />
                <div>
                  <h3 className="font-mono font-black text-sm uppercase tracking-tight text-[#11134F]">
                    Production Asset Manifest & Registry
                  </h3>
                  <p className="text-[11px] font-mono text-[#11134F]/70">
                    Directory: public/assets/ • Adaptive Fallbacks Active
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg border border-[#11134F] text-[#11134F] hover:bg-[#11134F] hover:text-[#FAF6CE] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content List */}
            <div className="p-6 overflow-y-auto space-y-4">
              <div className="p-3.5 rounded-xl border border-[#11134F]/20 bg-[#FAF6CE] text-xs font-mono text-[#11134F]/80 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#11134F] shrink-0 mt-0.5" />
                <span>
                  The portfolio uses a resilient architectural asset pipeline. Every section features a dedicated SVG technical blueprint placeholder that gracefully flips to your production photo or certificate as soon as the file is dropped into the specified location.
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#11134F] text-[#11134F] uppercase text-[10px]">
                      <th className="py-2.5 px-3">Section</th>
                      <th className="py-2.5 px-3">Path</th>
                      <th className="py-2.5 px-3">Dimensions</th>
                      <th className="py-2.5 px-3">Ratio</th>
                      <th className="py-2.5 px-3">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#11134F]/15">
                    {assetManifest.map((entry) => (
                      <tr key={entry.key} className="hover:bg-[#11134F]/5 transition-colors">
                        <td className="py-2.5 px-3 font-bold text-[#11134F] whitespace-nowrap">
                          {entry.section}
                        </td>
                        <td className="py-2.5 px-3 font-semibold text-[#11134F] whitespace-nowrap">
                          <code>{entry.assetPath}</code>
                        </td>
                        <td className="py-2.5 px-3 text-[#11134F]/80 whitespace-nowrap">
                          {entry.expectedDimensions}
                        </td>
                        <td className="py-2.5 px-3 text-[#11134F]/80 whitespace-nowrap">
                          {entry.aspectRatio}
                        </td>
                        <td className="py-2.5 px-3 text-[#11134F]/85">
                          {entry.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t-2 border-[#11134F] bg-[#F2ECC0] flex items-center justify-between text-xs font-mono">
              <span className="text-[#11134F]/70">
                Total Tracked Assets: {assetManifest.length}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-1.5 rounded-lg border border-[#11134F] bg-[#FAF6CE] font-bold text-[#11134F] hover:bg-[#11134F] hover:text-[#FAF6CE] transition-colors"
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
