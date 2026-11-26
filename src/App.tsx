import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/navigation/Navbar';
import { ProfileHeroCard } from './components/home/ProfileHeroCard';
import { StreakAndGitHubCard } from './components/home/StreakAndGitHubCard';
import { WhoIsPrinceSection } from './components/home/WhoIsPrinceSection';
import { ExperienceAccordionCard } from './components/home/ExperienceAccordionCard';
import { ProjectsListSection } from './components/home/ProjectsListSection';
import { RoboticsShowcaseSection } from './components/home/RoboticsShowcaseSection';
import { SocialAndFooterCta } from './components/home/SocialAndFooterCta';
import { AssetManifestModal } from './components/common/AssetManifestModal';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FAF8F8] dark:bg-[#0E0E10] text-[#14151C] dark:text-[#F4F4F6] transition-colors duration-300 relative selection:bg-[#E05A87] selection:text-white overflow-x-hidden">
        {/* Sticky Desktop Header & Mobile Floating Dock */}
        <Navbar />

        {/* Centered Main Column with Subtle Dashed Vertical Guides on Desktop */}
        <div className="max-w-[820px] mx-auto px-4 sm:px-6 relative sm:dashed-guide-l sm:dashed-guide-r min-h-[calc(100vh-4rem)] overflow-x-hidden">
          {/* Main Content Flow */}
          <main id="home" className="py-6 sm:py-8 space-y-6 sm:space-y-8 overflow-x-hidden">
            {/* 1. Hero / Profile Card */}
            <ProfileHeroCard />

            {/* 2. Sprint / Streak Matrix & GitHub Activity */}
            <StreakAndGitHubCard />

            {/* 3. Who is Prince? & Tech Stack */}
            <WhoIsPrinceSection />

            {/* 4. Experience Accordion Card */}
            <ExperienceAccordionCard />

            {/* 5. Filterable Projects List */}
            <ProjectsListSection />

            {/* 6. Robotics & Autonomous Platforms */}
            <RoboticsShowcaseSection />

            {/* 7. Social Links & Footer CTA */}
            <SocialAndFooterCta />
          </main>
        </div>

        {/* Production Asset Manifest Inspector */}
        <AssetManifestModal />
      </div>
    </ThemeProvider>
  );
};

export default App;
