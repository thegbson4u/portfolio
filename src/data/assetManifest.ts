export interface AssetManifestEntry {
  key: string;
  section: string;
  assetPath: string;
  expectedDimensions: string;
  aspectRatio: string;
  format: 'png' | 'jpg' | 'pdf' | 'svg';
  description: string;
  placeholderLabel: string;
}

export const assetManifest: AssetManifestEntry[] = [
  {
    key: 'profile-portrait',
    section: 'Hero & About Me',
    assetPath: '/assets/profile/portrait.png',
    expectedDimensions: '800 × 800 px',
    aspectRatio: '1:1',
    format: 'png',
    description: 'High-resolution square headshot of Prince Kumar Maurya with neutral/light background or alpha transparency.',
    placeholderLabel: 'PROFILE // PORTRAIT [PRINCE KUMAR MAURYA]',
  },
  {
    key: 'resume-document',
    section: 'Navigation, Hero & Contact',
    assetPath: '/assets/documents/resume.pdf',
    expectedDimensions: 'Standard A4 / Letter',
    aspectRatio: '1:1.414',
    format: 'pdf',
    description: 'Official verified PDF Curriculum Vitae / Resume of Prince Kumar Maurya.',
    placeholderLabel: 'OFFICIAL RESUME // PDF DOCUMENT',
  },
  {
    key: 'cert-nptel-nlp',
    section: 'Certifications',
    assetPath: '/assets/certificates/nptel-nlp.png',
    expectedDimensions: '1200 × 900 px',
    aspectRatio: '4:3',
    format: 'png',
    description: 'NPTEL Elite Certificate for Natural Language Processing issued by IIT Kharagpur.',
    placeholderLabel: 'CERTIFICATE // NPTEL IIT KGP NLP (ELITE)',
  },
  {
    key: 'cert-udemy-bootcamp',
    section: 'Certifications',
    assetPath: '/assets/certificates/udemy-bootcamp.png',
    expectedDimensions: '1200 × 900 px',
    aspectRatio: '4:3',
    format: 'png',
    description: 'Complete Data Science, Machine Learning, Deep Learning and NLP Bootcamp certificate from Udemy.',
    placeholderLabel: 'CERTIFICATE // UDEMY DS, ML, DL & NLP BOOTCAMP',
  },
  {
    key: 'cert-ros2',
    section: 'Certifications',
    assetPath: '/assets/certificates/ros2.png',
    expectedDimensions: '1200 × 900 px',
    aspectRatio: '4:3',
    format: 'png',
    description: 'ROS 2 for Beginners certificate issued by Udemy.',
    placeholderLabel: 'CERTIFICATE // UDEMY ROS 2 BEGINNERS',
  },
  {
    key: 'project-kfs',
    section: 'Featured Projects',
    assetPath: '/assets/projects/kfs/preview.png',
    expectedDimensions: '1280 × 800 px',
    aspectRatio: '16:10',
    format: 'png',
    description: 'Screenshot or diagram of KFS Real-Time Detection System with YOLOv8s-OBB angle indicators.',
    placeholderLabel: 'KFS-OBB // VISION DETECTION ENGINE',
  },
  {
    key: 'project-fasalgpt',
    section: 'Featured Projects',
    assetPath: '/assets/projects/fasalgpt/preview.png',
    expectedDimensions: '1280 × 800 px',
    aspectRatio: '16:10',
    format: 'png',
    description: 'FASALGPT Agriculture Advisory application interface showing disease diagnosis & weather advisory.',
    placeholderLabel: 'FASALGPT // AI AGRICULTURE ADVISORY',
  },
  {
    key: 'project-rag',
    section: 'Featured Projects',
    assetPath: '/assets/projects/rag/preview.png',
    expectedDimensions: '1280 × 800 px',
    aspectRatio: '16:10',
    format: 'png',
    description: 'Conversational Assessment & Smart Document QA vector retrieval architecture diagram / Streamlit UI.',
    placeholderLabel: 'RAG // CONVERSATIONAL ASSESSMENT & QA',
  },
  {
    key: 'project-basketball-robot',
    section: 'Featured Projects & Robotics',
    assetPath: '/assets/projects/basketball-robot/preview.png',
    expectedDimensions: '1280 × 800 px',
    aspectRatio: '16:10',
    format: 'png',
    description: 'Target tracking and pneumatic trajectory mechanism for ABU Robocon 2025 basketball robot.',
    placeholderLabel: 'BASKETBALL ROBOT // ABU ROBOCON 2025',
  },
  {
    key: 'robotics-robocon',
    section: 'Robotics and Leadership',
    assetPath: '/assets/robotics/robocon/main.png',
    expectedDimensions: '1280 × 800 px',
    aspectRatio: '16:10',
    format: 'png',
    description: 'Team Rudhra DD Robocon 2026 / ABU Robocon 2025 robot assembly, arena trials, and vision calibration.',
    placeholderLabel: 'TEAM RUDHRA // ROBOCON PERCEPTION SUITE',
  },
  {
    key: 'robotics-toto',
    section: 'Robotics and Leadership',
    assetPath: '/assets/robotics/toto/main.png',
    expectedDimensions: '1280 × 800 px',
    aspectRatio: '16:10',
    format: 'png',
    description: 'TOTO Autonomous Mobile Robot platform developed under Prof. (Dr.) Subir Kumar Saha at IIT Delhi.',
    placeholderLabel: 'TOTO MOBILE ROBOT // IIT DELHI PLATFORM',
  },
];
