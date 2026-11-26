import { RoboticsItem } from '../types';

export const roboticsInitiatives: RoboticsItem[] = [
  {
    id: 'robocon-initiative',
    title: 'DD ROBOCON 2026 & ABU ROBOCON 2025',
    eventOrPlatform: 'Asia-Pacific Robot Contest (ABU / DD Robocon)',
    role: 'Co-Leader & Automation Head, Computer Vision Engineer',
    period: '2024 – 2026',
    mentorOrOrg: 'Team Rudhra — Robotics Club, IEC College of Engineering & Technology',
    summary:
      'Directing autonomous systems architecture, real-time spatial computer vision, and team operations for international robotic competition arenas.',
    technicalPillars: [
      {
        title: 'Computer Vision & Real-Time Tracking',
        description:
          'Constructed high-speed target acquisition pipelines utilizing OpenCV and custom YOLO models for detecting game elements, oriented baskets, and adversarial obstacles under dynamic arena lighting.',
        tags: ['OpenCV', 'YOLOv8', 'Object Tracking', 'Camera Calibration'],
      },
      {
        title: 'Robotic Perception & Autonomous Navigation',
        description:
          'Engineered coordinate transform trees, sensor fusion with IMU and wheel encoders, and deterministic state-machine planners executing complex tasks autonomously.',
        tags: ['State Machines', 'Sensor Fusion', 'Localization', 'Path Planning'],
      },
      {
        title: 'Dataset Engineering & Model Optimization',
        description:
          'Captured and annotated custom arena datasets, synthesized augmentations, and quantized neural networks for ultra-low latency inference on edge compute platforms.',
        tags: ['Custom Datasets', 'Model Quantization', 'Edge Inference', 'Data Validation'],
      },
      {
        title: 'Engineering Leadership & Multidisciplinary Automation',
        description:
          'Co-leading a high-performance squad of mechanical, electronics, and software engineers; establishing CI/CD software practices and rapid hardware-in-the-loop testing cycles.',
        tags: ['Technical Leadership', 'Systems Architecture', 'HIL Testing', 'Team Mentorship'],
      },
    ],
    specifications: [
      { label: 'Competition Scope', value: 'National & Asia-Pacific Robotic Arenas' },
      { label: 'Role Mandate', value: 'Co-Leader, Automation Head & Vision Lead' },
      { label: 'Perception Stack', value: 'OpenCV + YOLOv8 + Optical Odometry' },
      { label: 'Communication Protocol', value: 'Low-latency IPC & WebSockets' },
    ],
    assetFolder: '/assets/robotics/robocon/',
    githubUrl: 'https://github.com/thegbson4u/Semi-Automatic-Basketball-Playing-Robot-ABU-Robocon-2025',
  },
  {
    id: 'toto-platform',
    title: 'TOTO Autonomous Mobile Robot (AMR)',
    eventOrPlatform: 'IIT Delhi Mobile Robotics Research Platform',
    role: 'Perception & ROS 2 Navigation Engineer',
    period: '2024 – Present',
    mentorOrOrg: 'Guided by Prof. (Dr.) Subir Kumar Saha, IIT Delhi',
    summary:
      'Developing research-grade autonomous mobile base capabilities with 2D LiDAR SLAM, ROS 2 node architecture, and embedded Linux orchestration.',
    technicalPillars: [
      {
        title: 'ROS 2 Humble / Iron Graph Architecture',
        description:
          'Authored modular ROS 2 nodes for actuator communication, wheel odometry publishing, and sensor telemetry bridging between hardware and Linux.',
        tags: ['ROS2', 'Node Graphs', 'rclpy', 'Embedded Linux'],
      },
      {
        title: 'LiDAR SLAM & Environment Mapping',
        description:
          'Implemented Cartographer / Slam Toolbox algorithms for high-resolution 2D occupancy grid generation and loop closure in indoor academic environments.',
        tags: ['LiDAR', 'SLAM', 'Occupancy Grid', 'Loop Closure'],
      },
      {
        title: 'Edge Compute Integration on Raspberry Pi 5',
        description:
          'Orchestrated multi-threaded perception daemons on Raspberry Pi 5, optimizing CPU/thermal throttle profiles during sustained autonomy trials.',
        tags: ['Raspberry Pi 5', 'Linux Daemons', 'System Profiling', 'Thermal Management'],
      },
    ],
    specifications: [
      { label: 'Research Platform', value: 'TOTO Mobile Robot (IIT Delhi)' },
      { label: 'Academic Mentor', value: 'Prof. (Dr.) Subir Kumar Saha (IIT Delhi)' },
      { label: 'Onboard Compute', value: 'Raspberry Pi 5 (Linux 64-bit)' },
      { label: 'Primary Sensors', value: '2D LiDAR, 9-DOF IMU, Rotary Encoders' },
    ],
    assetFolder: '/assets/robotics/toto/',
  },
];
