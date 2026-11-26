import { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: 'dectify',
    role: 'Machine Learning Intern',
    organization: 'DECTIFY Technologies Pvt. Ltd.',
    location: 'Remote / Hybrid',
    period: 'August 2026 – October 2026',
    type: 'internship',
    focus: 'Applied Machine Learning & Predictive Pipeline Development',
    responsibilities: [
      'Engineered and evaluated machine learning models for production workflows, focusing on data preprocessing, feature selection, and inference latency reduction.',
      'Constructed automated evaluation harnesses for classification and regression tasks using Scikit-learn and PyTorch.',
      'Collaborated with engineering teams to package and expose machine learning models through robust REST API interfaces.',
    ],
    technologies: ['Python', 'Machine Learning', 'PyTorch', 'Scikit-learn', 'FastAPI', 'Pandas'],
    highlightMetric: 'Production Model Pipeline Deployment',
  },
  {
    id: 'neocambrian',
    role: 'Data Collection Intern',
    organization: 'Neocambrian AI',
    location: 'Remote',
    period: 'June 2026 – July 2026',
    type: 'internship',
    focus: 'Dataset Curating, Annotation Schemas & Vision Data Engineering',
    responsibilities: [
      'Structured high-fidelity multi-class datasets for specialized computer vision and neural training pipelines.',
      'Designed quality verification routines, automated data validation scripts, and bounding box annotation protocols.',
      'Analyzed distribution anomalies and dataset imbalance to enhance model generalization for real-world deployments.',
    ],
    technologies: ['Python', 'Computer Vision Data', 'Annotation Schemas', 'Data Validation', 'OpenCV'],
    highlightMetric: 'Curated High-Quality Vision Datasets',
  },
  {
    id: 'team-rudhra',
    role: 'Co-Leader, Automation Head & Computer Vision Engineer',
    organization: 'Team Rudhra – Robotics Club IEC',
    location: 'IEC College of Engineering & Technology',
    period: 'DD ROBOCON 2026 / ABU ROBOCON 2025',
    type: 'leadership',
    focus: 'Robotic Perception, Autonomous Navigation & Real-time Vision Pipelines',
    responsibilities: [
      'Co-led multi-disciplinary robotics squad in designing and executing end-to-end competition robots for DD ROBOCON 2026 and ABU ROBOCON 2025.',
      'Spearheaded automation architecture: integrated ROS 2 node graph, LiDAR slam, sensor fusion, and actuator telemetry.',
      'Engineered real-time computer vision pipelines for ball detection, ring localization, and goal-post alignment under dynamic lighting conditions.',
      'Developed proprietary training datasets and tuned YOLO models for low-latency edge inference on onboard compute units.',
    ],
    technologies: ['ROS2', 'Python', 'OpenCV', 'YOLOv8', 'LiDAR', 'Sensor Fusion', 'Linux', 'WebSockets'],
    highlightMetric: 'Autonomous Perception & Field Execution at National Level',
  },
];
