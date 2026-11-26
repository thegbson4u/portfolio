import React from 'react';
import { Terminal } from 'lucide-react';
import { skillCategories } from '../../data/skills';

export const WhoIsPrinceSection: React.FC = () => {
  return (
    <section className="rounded-2xl border border-dashed border-black/15 dark:border-white/15 bg-white dark:bg-[#161619] p-5 sm:p-7 transition-colors">
      {/* Editorial Serif Heading */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-dashed border-black/10 dark:border-white/10">
        <h2 className="font-serif italic text-3xl sm:text-4xl font-normal tracking-tight text-[#14151C] dark:text-[#F4F4F6]">
          Who is Prince?
        </h2>
        <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-[#5C5E6B] dark:text-[#9A9AA3]">
          BIO & STACK
        </span>
      </div>

      {/* Narrative with Selective Bold Highlights */}
      <div className="space-y-4 text-xs sm:text-sm text-[#5C5E6B] dark:text-[#9A9AA3] leading-relaxed font-sans mb-8">
        <p>
          I am an <strong className="text-[#14151C] dark:text-[#F4F4F6] font-semibold">AI/ML Engineer, Computer Vision Developer, and Robotics Perception Specialist</strong> pursuing my B.Tech in Computer Science & Engineering at <strong className="text-[#14151C] dark:text-[#F4F4F6] font-semibold">IEC College of Engineering and Technology (AKTU, Class of 2027)</strong>.
        </p>

        <p>
          My work focuses on bridging mathematical deep learning with hard physical-world robotics and deterministic software pipelines. I specialize in deploying <strong className="text-[#C83E6B] dark:text-[#E05A87] font-semibold">YOLOv8s-OBB (Oriented Bounding Box)</strong> perception pipelines for robotic manipulation, constructing low-latency <strong className="text-[#C83E6B] dark:text-[#E05A87] font-semibold">RAG architectures</strong> using FAISS and LangChain, and orchestrating <strong className="text-[#C83E6B] dark:text-[#E05A87] font-semibold">ROS 2 autonomous mobile robots (AMRs)</strong> with 2D LiDAR SLAM, IMU sensor fusion, and embedded Linux.
        </p>

        <p>
          As Co-Leader and Automation Head at <strong className="text-[#14151C] dark:text-[#F4F4F6] font-semibold">Team Rudhra</strong>, I direct end-to-end computer vision and autonomy across <strong className="text-[#14151C] dark:text-[#F4F4F6] font-semibold">DD Robocon 2026 & ABU Robocon 2025</strong>. Additionally, I contribute to the <strong className="text-[#14151C] dark:text-[#F4F4F6] font-semibold">TOTO Autonomous Mobile Robot platform</strong> at IIT Delhi under the guidance of <strong className="text-[#14151C] dark:text-[#F4F4F6] font-semibold">Prof. (Dr.) Subir Kumar Saha</strong>.
        </p>
      </div>

      {/* Categorized Tech Stack Pills */}
      <div>
        <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase tracking-wider text-[#14151C] dark:text-[#F4F4F6]">
          <Terminal className="w-3.5 h-3.5 text-[#E05A87]" />
          <span>Core Engineering Stack & Capabilities</span>
        </div>

        <div className="space-y-4">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="space-y-2">
              <div className="text-[11px] font-mono text-[#5C5E6B] dark:text-[#9A9AA3] font-semibold">
                {cat.name}:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-dashed border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-xs font-mono text-[#14151C] dark:text-[#F4F4F6] hover:border-[#E05A87]/50 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E05A87]" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
