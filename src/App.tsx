import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/common/Navigation';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { AssetManifestModal } from './components/common/AssetManifestModal';

import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { RoboticsPage } from './pages/RoboticsPage';
import { VenturesPage } from './pages/VenturesPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ContactPage } from './pages/ContactPage';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.22, ease: 'easeInOut' }}
        className="flex-1 w-full"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/robotics" element={<RoboticsPage />} />
          <Route path="/ventures" element={<VenturesPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FAF6CE] text-[#11134F] font-sans antialiased selection:bg-[#11134F] selection:text-[#FAF6CE] flex flex-col justify-between">
        <ScrollToTop />
        
        {/* Global Persistent Navigation Header */}
        <Navigation />

        {/* Routed Main Viewports with Page Transitions */}
        <main className="flex-1 flex flex-col">
          <AnimatedRoutes />
        </main>

        {/* Global Persistent Footer */}
        <Footer />

        {/* Accessible Production Asset Manifest Inspector */}
        <AssetManifestModal />
      </div>
    </BrowserRouter>
  );
};

export default App;
