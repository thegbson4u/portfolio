import { CertificateItem } from '../types';

export const certificates: CertificateItem[] = [
  {
    id: 'nptel-nlp',
    title: 'Natural Language Processing',
    issuer: 'NPTEL — IIT Kharagpur',
    credentialBadge: 'Elite Certificate',
    date: 'Certified Academic Credential',
    description:
      'Rigorous academic certification administered by Indian Institute of Technology Kharagpur, covering syntactic parsing, semantic analysis, probabilistic language modeling, transformer mechanics, and sequence transduction.',
    skillsCovered: [
      'NLP Fundamentals',
      'Word & Sentence Embeddings',
      'Transformers & Attention',
      'Language Modeling',
      'Information Extraction',
    ],
    assetPath: '/assets/certificates/nptel-nlp.png',
    placeholderText: 'NPTEL IIT KHARAGPUR // ELITE NLP CREDENTIAL',
  },
  {
    id: 'udemy-ds-ml-dl',
    title: 'Complete Data Science, Machine Learning, Deep Learning & NLP Bootcamp',
    issuer: 'Udemy',
    credentialBadge: 'Comprehensive Mastery',
    date: 'Verified Bootcamp Certificate',
    description:
      'End-to-end practical mastery program spanning statistical analysis, feature engineering, classic ML classifiers, convolutional neural networks, recurrent networks, and production pipeline deployment.',
    skillsCovered: [
      'Machine Learning & Deep Learning',
      'TensorFlow & PyTorch',
      'Statistical Data Analysis',
      'Scikit-learn Pipelines',
      'NLP Sequence Models',
    ],
    assetPath: '/assets/certificates/udemy-bootcamp.png',
    placeholderText: 'UDEMY // DATA SCIENCE, ML, DL & NLP BOOTCAMP',
  },
  {
    id: 'udemy-ros2',
    title: 'ROS 2 for Beginners (Robot Operating System 2)',
    issuer: 'Udemy',
    credentialBadge: 'Robotics Engineering',
    date: 'Verified Robotics Credential',
    description:
      'In-depth engineering curriculum on ROS 2 Humble/Iron architecture: node lifecycles, topics, publisher-subscriber communication, services, actions, launch files, parameter servers, and multi-robot architectures.',
    skillsCovered: [
      'ROS 2 Architecture',
      'Nodes, Topics & Services',
      'Actions & Parameters',
      'rclpy Python API',
      'Distributed Robot Middleware',
    ],
    assetPath: '/assets/certificates/ros2.png',
    placeholderText: 'UDEMY // ROS 2 FOR BEGINNERS CREDENTIAL',
  },
];
