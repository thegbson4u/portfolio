export interface PersonalInfo {
  name: string;
  titles: string[];
  roleTitle: string;
  tagline: string;
  introduction: string;
  bioDetailed: string[];
  education: Education[];
  contact: {
    email: string;
    phone: string;
    location: string;
    availability: string;
    coordinates: string;
  };
  socials: {
    github: string;
    linkedin: string;
    geeksforgeeks: string;
    email: string;
  };
}

export interface Education {
  degree: string;
  institution: string;
  university: string;
  graduationYear: string;
  period: string;
  location: string;
  highlights?: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  shortName: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    isKey?: boolean;
    category?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'internship' | 'leadership' | 'research';
  focus: string;
  responsibilities: string[];
  technologies: string[];
  highlightMetric?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'GenAI & NLP' | 'Computer Vision' | 'Robotics & Perception' | 'Applied ML';
  shortDescription: string;
  detailedDescription: string[];
  technologies: string[];
  repositoryUrl?: string;
  liveDemoUrl?: string;
  imagePlaceholder: {
    type: 'kfs' | 'fasalgpt' | 'rag' | 'shl' | 'basketball' | 'toto' | 'default';
    caption: string;
    label: string;
    dimensions: string;
  };
  assetPath?: string;
  featured: boolean;
  architecturalHighlights: string[];
  architectureFlow?: {
    step: string;
    detail: string;
    tech: string;
  }[];
  dataFlowSummary?: string;
}

export interface RoboticsItem {
  id: string;
  title: string;
  eventOrPlatform: string;
  role: string;
  period: string;
  mentorOrOrg?: string;
  summary: string;
  technicalPillars: {
    title: string;
    description: string;
    tags: string[];
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  assetFolder: string;
  githubUrl?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  credentialBadge?: string;
  date?: string;
  description: string;
  skillsCovered: string[];
  verificationUrl?: string;
  assetPath: string;
  placeholderText: string;
}

export interface VentureItem {
  id: string;
  title: string;
  tagline: string;
  category: 'raga-app' | 'client-solution';
  badge: string;
  status: 'Production Live' | 'Active Release' | 'Deployed Client' | 'Beta Architecture';
  description: string;
  deliverables: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  technologies: string[];
  architectureSpec: {
    frontend?: string;
    backend?: string;
    aiModelOrEngine?: string;
    infrastructure?: string;
    dataPipeline?: string;
  };
  liveUrl?: string;
  githubUrl?: string;
  caseStudyHighlights?: string[];
  assetPath?: string;
  placeholderLabel: string;
}
