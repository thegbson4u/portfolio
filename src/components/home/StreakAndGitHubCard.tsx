import React, { useState } from 'react';
import { Flame, GitCommit, Github, ArrowUpRight } from 'lucide-react';

export const StreakAndGitHubCard: React.FC = () => {
  const [hoveredCell, setHoveredCell] = useState<{ label: string; count: number } | null>(null);

  // Generate realistic research streak cells (7 rows x 15 columns)
  const streakWeeks = 15;
  const daysPerWeek = 7;
  const sprintData = React.useMemo(() => {
    const data: number[][] = [];
    for (let w = 0; w < streakWeeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < daysPerWeek; d++) {
        // High intensity towards recent weeks
        const factor = (w + 1) / streakWeeks;
        const rand = Math.sin(w * 0.8 + d * 0.4) * 0.5 + 0.5;
        const val = rand * factor > 0.35 ? Math.floor(rand * 5) + 1 : 0;
        week.push(val);
      }
      data.push(week);
    }
    return data;
  }, []);

  // GitHub contribution months
  const months = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];

  const getRoseColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-[#E05A87]/25 dark:bg-[#E05A87]/30';
      case 2:
        return 'bg-[#E05A87]/50 dark:bg-[#E05A87]/55';
      case 3:
        return 'bg-[#E05A87]/75 dark:bg-[#E05A87]/80';
      case 4:
      case 5:
        return 'bg-[#C83E6B] dark:bg-[#E05A87]';
      default:
        return 'bg-black/5 dark:bg-white/5';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* 1. SPRINT / STREAK CARD */}
      <div className="rounded-2xl border border-dashed border-black/15 dark:border-white/15 bg-white dark:bg-[#161619] p-4 sm:p-5 flex flex-col justify-between transition-colors">
        <div>
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-dashed border-black/10 dark:border-white/10">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-[#E05A87]/15 text-[#E05A87]">
                <Flame className="w-4 h-4 fill-current" />
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-wide text-[#14151C] dark:text-[#F4F4F6]">
                locked in
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#E05A87] bg-[#E05A87]/10 px-2 py-0.5 rounded-full border border-[#E05A87]/25">
              128-DAY RESEARCH STREAK
            </span>
          </div>

          <p className="text-xs font-mono text-[#5C5E6B] dark:text-[#9A9AA3] mb-3">
            Daily AI/ML model architecture tuning, Robocon sensor fusion, and RAG retrieval experiments.
          </p>

          {/* Matrix Grid */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 items-center justify-center sm:justify-start">
            {sprintData.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1.5">
                {week.map((level, dIdx) => (
                  <div
                    key={dIdx}
                    onMouseEnter={() =>
                      setHoveredCell({
                        label: `Day ${wIdx * 7 + dIdx + 1}`,
                        count: level > 0 ? level * 2 + 1 : 0,
                      })
                    }
                    onMouseLeave={() => setHoveredCell(null)}
                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-sm transition-transform hover:scale-125 cursor-pointer ${getRoseColor(
                      level
                    )}`}
                    title={`${level > 0 ? level * 2 + 1 : 0} research commits`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="pt-3 mt-3 border-t border-dashed border-black/10 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-[#5C5E6B] dark:text-[#9A9AA3]">
          <span>
            {hoveredCell ? (
              <strong className="text-[#E05A87]">{hoveredCell.count} build hours logged</strong>
            ) : (
              'Consistent Execution'
            )}
          </span>
          <div className="flex items-center gap-1.5">
            <span>Less</span>
            <span className="w-2.5 h-2.5 rounded-sm bg-black/5 dark:bg-white/5" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#E05A87]/30" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#E05A87]/60" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#E05A87]" />
            <span>More</span>
          </div>
        </div>
      </div>

      {/* 2. GITHUB ACTIVITY CARD */}
      <div className="rounded-2xl border border-dashed border-black/15 dark:border-white/15 bg-white dark:bg-[#161619] p-4 sm:p-5 flex flex-col justify-between transition-colors">
        <div>
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-dashed border-black/10 dark:border-white/10">
            <a
              href="https://github.com/thegbson4u"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group focus:outline-none"
            >
              <span className="p-1.5 rounded-lg bg-black/5 dark:bg-white/5 text-[#14151C] dark:text-[#F4F4F6] group-hover:text-[#E05A87] transition-colors">
                <Github className="w-4 h-4" />
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-wide text-[#14151C] dark:text-[#F4F4F6] group-hover:text-[#E05A87] transition-colors">
                github activity
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#5C5E6B] dark:text-[#9A9AA3] group-hover:text-[#E05A87] transition-colors" />
            </a>
            <span className="text-[10px] font-mono text-[#5C5E6B] dark:text-[#9A9AA3]">
              @thegbson4u
            </span>
          </div>

          <div className="flex items-baseline justify-between mb-3">
            <span className="text-xl sm:text-2xl font-black font-mono text-[#14151C] dark:text-[#F4F4F6]">
              640+ <span className="text-xs font-normal text-[#5C5E6B] dark:text-[#9A9AA3]">contributions</span>
            </span>
            <span className="text-[11px] font-mono text-[#C83E6B] dark:text-[#E05A87] font-semibold">
              in 2025 – 2026
            </span>
          </div>

          {/* Mini month header */}
          <div className="flex justify-between text-[9px] font-mono text-[#5C5E6B] dark:text-[#9A9AA3] px-1 mb-1.5">
            {months.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>

          {/* Matrix Grid */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 items-center justify-center sm:justify-start">
            {sprintData.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1.5">
                {week.map((level, dIdx) => {
                  const altLevel = (level + (wIdx % 2)) % 5;
                  return (
                    <div
                      key={dIdx}
                      className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-sm transition-transform hover:scale-125 cursor-pointer ${getRoseColor(
                        altLevel
                      )}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="pt-3 mt-3 border-t border-dashed border-black/10 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-[#5C5E6B] dark:text-[#9A9AA3]">
          <span className="flex items-center gap-1.5">
            <GitCommit className="w-3.5 h-3.5 text-[#E05A87]" />
            <span>Active Repositories</span>
          </span>
          <div className="flex items-center gap-1.5">
            <span>Less</span>
            <span className="w-2.5 h-2.5 rounded-sm bg-black/5 dark:bg-white/5" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#E05A87]/30" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#E05A87]/60" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#E05A87]" />
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
};
