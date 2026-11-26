import { ProjectItem } from '../types';

export const projects: ProjectItem[] = [
  {
    id: 'shl-assessment-agent',
    title: 'Conversational Assessment Recommendation System',
    category: 'GenAI & NLP',
    shortDescription:
      'Conversational RAG agent delivering context-aware, semantic assessment recommendations with vector retrieval and LLM synthesis.',
    detailedDescription: [
      'Engineered an enterprise-grade retrieval-augmented generation (RAG) system that parses candidate profiles, evaluates prerequisite skills, and matches optimal skill assessments.',
      'Constructed dense semantic search vectors using Sentence Transformers cached in FAISS indices for sub-50ms query similarity matching.',
      'Exposed modular inference pipelines via FastAPI with an interactive Streamlit operational dashboard for interactive candidate testing.',
    ],
    technologies: ['Python', 'FastAPI', 'FAISS', 'Sentence Transformers', 'LLM', 'Streamlit'],
    repositoryUrl: 'https://github.com/thegbson4u/shl-assessment-agent',
    imagePlaceholder: {
      type: 'rag',
      caption: 'Conversational RAG Architecture & Vector Indexing Pipeline',
      label: 'SHL-AGENT // RAG PIPELINE',
      dimensions: '1280 × 800',
    },
    assetPath: '/assets/projects/rag/preview.png',
    featured: true,
    architecturalHighlights: [
      'Dense vector indexing with FAISS & Sentence Transformers',
      'Asynchronous FastAPI microservice architecture',
      'Contextual prompt synthesis with grounded citation retrieval',
    ],
    dataFlowSummary: 'Candidate Profile Ingestion → Embedding Vectorizer → Top-K Cosine FAISS Query → Grounded Context Assembler → LLM Evaluation → Structured Recommendation Output',
    architectureFlow: [
      {
        step: '01. Ingestion & Preprocessing',
        detail: 'Candidate resume text or job role description parsed, sanitized, and tokenized with Sentence Transformers.',
        tech: 'Python / Tokenizer'
      },
      {
        step: '02. Vector Embedding & Indexing',
        detail: 'Transforms inputs into 384-dimensional dense vectors stored in a memory-mapped FAISS index.',
        tech: 'FAISS / SentenceTransformers'
      },
      {
        step: '03. Similarity Match & Guardrails',
        detail: 'Top-K semantic similarity search retrieves relevant skill benchmarks while discarding hallucinated attributes.',
        tech: 'Cosine Similarity / NumPy'
      },
      {
        step: '04. LLM Synthesis & API Delivery',
        detail: 'Asynchronous FastAPI service prompts LLM with strict grounding constraints and delivers JSON responses to Streamlit.',
        tech: 'FastAPI / Asyncio / Streamlit'
      }
    ]
  },
  {
    id: 'kfs-detection',
    title: 'KFS Real-Time Detection System',
    category: 'Computer Vision',
    shortDescription:
      'High-throughput real-time object detection engine utilizing YOLOv8s-OBB (Oriented Bounding Boxes) for robotic spatial alignment.',
    detailedDescription: [
      'Developed an edge-ready perception system utilizing YOLOv8s-OBB to capture object rotation angles, critical for robotic arm grasping and autonomous pickup.',
      'Optimized OpenCV video stream processing with custom NumPy affine transformations to minimize inference latency during multi-stream telemetry.',
      'Packaged into a live Streamlit web deployment for real-time video feed inference, bounding angle metrics, and confidence threshold tuning.',
    ],
    technologies: ['Python', 'YOLOv8s-OBB', 'OpenCV', 'Streamlit', 'NumPy'],
    repositoryUrl: 'https://github.com/thegbson4u/kfs-streamlit-deploy',
    imagePlaceholder: {
      type: 'kfs',
      caption: 'YOLOv8s Oriented Bounding Box (OBB) Spatial Alignment',
      label: 'KFS-OBB // VISION ENGINE',
      dimensions: '1280 × 800',
    },
    assetPath: '/assets/projects/kfs/preview.png',
    featured: true,
    architecturalHighlights: [
      'Rotated bounding box (OBB) angle calculation for robotic manipulation',
      'Frame-by-frame OpenCV tensor transformations',
      'Interactive confidence and IOU threshold controls',
    ],
    dataFlowSummary: 'Camera Frame Stream → Tensor Preprocessing & Affine Alignment → YOLOv8s-OBB Forward Pass → Rotated Angle Extraction (theta) → WebGL/Streamlit Telemetry Display',
    architectureFlow: [
      {
        step: '01. Video Feed Ingestion',
        detail: 'High-FPS camera streams ingested and converted to normalized tensor frames via OpenCV cv2.VideoCapture.',
        tech: 'OpenCV / NumPy'
      },
      {
        step: '02. Tensor Preprocessing & Augmentation',
        detail: 'Color-space correction, resolution normalization (640x640), and affine rotation matrices applied.',
        tech: 'Python / Affine Transform'
      },
      {
        step: '03. YOLOv8s-OBB Inference',
        detail: 'Neural forward pass computes rotated bounding polygons (x_center, y_center, width, height, theta).',
        tech: 'Ultralytics PyTorch / CUDA'
      },
      {
        step: '04. Robotic Pose Output & Visualization',
        detail: 'Extracted spatial angle vectors formatted for robotic arm pickup trajectories and rendered with Streamlit overlay.',
        tech: 'Streamlit / Telemetry'
      }
    ]
  },
  {
    id: 'fasalgpt',
    title: 'FASALGPT – AI Agriculture Advisory System',
    category: 'Applied ML',
    shortDescription:
      'Multi-modal agricultural intelligence suite combining CNN plant disease classification, Scikit-learn crop advisory, and OpenWeather real-time telemetry.',
    detailedDescription: [
      'Architected an end-to-end precision farming assistant integrating Computer Vision and predictive machine learning models.',
      'Trained a custom Convolutional Neural Network (CNN) in TensorFlow to detect crop foliage diseases from uploaded leaf imagery with high validation accuracy.',
      'Integrated real-time meteorological indicators from OpenWeather API alongside soil N-P-K parameters to recommend optimal crop yields.',
    ],
    technologies: ['Python', 'Machine Learning', 'CNN', 'TensorFlow', 'Scikit-learn', 'Streamlit', 'OpenWeather API'],
    repositoryUrl: 'https://github.com/thegbson4u/FASALGPT',
    imagePlaceholder: {
      type: 'fasalgpt',
      caption: 'Agricultural Multi-Model Diagnostic & Climate Fusion',
      label: 'FASALGPT // AGRI-AI SYSTEM',
      dimensions: '1280 × 800',
    },
    assetPath: '/assets/projects/fasalgpt/preview.png',
    featured: true,
    architecturalHighlights: [
      'TensorFlow CNN pipeline for botanical leaf disease diagnosis',
      'Feature engineering with Scikit-learn for soil-climate crop matching',
      'Live OpenWeather API synchronization',
    ],
    dataFlowSummary: 'Foliage Photo Upload + Soil N-P-K Inputs → CNN Disease Classification + OpenWeather API Sync → Scikit-learn Predictive Advisory → Actionable Treatment Dashboard',
    architectureFlow: [
      {
        step: '01. Dual-Stream Data Collection',
        detail: 'Accepts photographic leaf imagery and tabular farmer soil metrics (Nitrogen, Phosphorus, Potassium, pH).',
        tech: 'Streamlit UI'
      },
      {
        step: '02. CNN Image Diagnosis',
        detail: 'Deep CNN classifier trained in TensorFlow processes foliage imagery and identifies specific plant pathogens.',
        tech: 'TensorFlow / Keras CNN'
      },
      {
        step: '03. Meteorological Data Fusion',
        detail: 'Live OpenWeather REST API fetches micro-climate temperature, humidity, and rainfall forecasts.',
        tech: 'REST API / JSON'
      },
      {
        step: '04. Predictive Recommendation Engine',
        detail: 'Scikit-learn ensemble model predicts crop yield suitability and outputs preventative chemical treatment regimens.',
        tech: 'Scikit-learn / Streamlit'
      }
    ]
  },
  {
    id: 'smart-document-qa',
    title: 'Smart Document QA System',
    category: 'GenAI & NLP',
    shortDescription:
      'Intelligent document comprehension system leveraging LangChain, FAISS semantic embeddings, and LLM text generation.',
    detailedDescription: [
      'Built a document question-answering architecture that ingests complex technical documents, chunks content recursively, and preserves section hierarchy.',
      'Employed FAISS vector indexing to perform top-k cosine similarity retrieval on dense text embeddings.',
      'Integrated LangChain retrieval chains with LLM prompt guards to eliminate hallucinations and output verifiable source attribution.',
    ],
    technologies: ['Python', 'LangChain', 'FAISS', 'NLP', 'LLM'],
    repositoryUrl: 'https://github.com/thegbson4u/Smart-Document-QA-System-NLP-RAG-LLM-',
    imagePlaceholder: {
      type: 'rag',
      caption: 'Hierarchical Document Chunking & Vector Cosine Similarity Search',
      label: 'DOC-QA // SEMANTIC RETRIEVAL',
      dimensions: '1280 × 800',
    },
    assetPath: '/assets/projects/rag/preview.png',
    featured: false,
    architecturalHighlights: [
      'Recursive character text chunking with overlap preservation',
      'LangChain conversational QA chain with citation backing',
      'Memory buffer for multi-turn contextual inquiries',
    ],
    dataFlowSummary: 'PDF / Text Docs → Recursive Chunking with Header Preservation → FAISS Vector Store Index → LangChain Conversational Chain → Source-Attributed Answer Synthesis',
    architectureFlow: [
      {
        step: '01. Document Ingestion & Chunking',
        detail: 'RecursiveCharacterTextSplitter extracts document text preserving paragraph semantics with 200-char overlap.',
        tech: 'LangChain TextSplitter'
      },
      {
        step: '02. Dense Vector Indexing',
        detail: 'Hugging Face sentence embeddings generate vector representations indexed into local FAISS database.',
        tech: 'FAISS / Hugging Face'
      },
      {
        step: '03. Conversational Memory & Context Retrieval',
        detail: 'Combines multi-turn conversational history buffer with top-3 similarity search chunks.',
        tech: 'LangChain ConversationBuffer'
      },
      {
        step: '04. Grounded Answer Synthesis',
        detail: 'LLM synthesizes response with page-number citations, refusing to extrapolate beyond provided source documents.',
        tech: 'LLM / Prompt Engineering'
      }
    ]
  },
  {
    id: 'basketball-robot',
    title: 'Semi-Automatic Basketball Playing Robot',
    category: 'Robotics & Perception',
    shortDescription:
      'Autonomous robotics platform integrating computer vision hoop tracking, trajectory calculation, and WebSocket real-time actuation telemetry.',
    detailedDescription: [
      'Designed and engineered for ABU Robocon 2025 competition requirements: developed computer vision target acquisition for hoop and ball detection.',
      'Integrated low-latency WebSocket communication layer between edge perception processors and microcontrollers for pneumatic launcher timing.',
      'Implemented real-time camera calibration to account for lighting shifts, lens distortion, and dynamic depth calculation.',
    ],
    technologies: ['Robotics', 'Computer Vision', 'Python', 'OpenCV', 'WebSockets', 'Actuation Control'],
    repositoryUrl: 'https://github.com/thegbson4u/Semi-Automatic-Basketball-Playing-Robot-ABU-Robocon-2025',
    imagePlaceholder: {
      type: 'basketball',
      caption: 'Target Localization, Trajectory Geometry & WebSocket Telemetry',
      label: 'ROBOCON 2025 // BASKETBALL BOT',
      dimensions: '1280 × 800',
    },
    assetPath: '/assets/projects/basketball-robot/preview.png',
    featured: true,
    architecturalHighlights: [
      'Real-time OpenCV target centroid tracking & depth estimation',
      'Sub-millisecond WebSocket IPC between Python vision engine and motor drivers',
      'Dynamic launch trajectory calculation based on distance curves',
    ],
    dataFlowSummary: 'Monocular Arena Camera → OpenCV Centroid & Depth Geometry → Ballistic Trajectory Curve Engine → Sub-millisecond WebSocket Dispatch → Microcontroller Pneumatic Firing',
    architectureFlow: [
      {
        step: '01. Monocular Target Acquisition',
        detail: 'Calibrated arena camera captures hoop rims and ball positions, applying HSV thresholding and contour hierarchy.',
        tech: 'OpenCV / Camera Calibration'
      },
      {
        step: '02. Spatial Depth Estimation',
        detail: 'Calculates Euclidean distance and angular azimuth from camera coordinates to the target hoop ring.',
        tech: 'Perspective Geometry / NumPy'
      },
      {
        step: '03. Parabolic Trajectory Computation',
        detail: 'Kinematic equations calculate requisite pneumatic launch pressure and barrel elevation angle in real time.',
        tech: 'Physics Kinematics Engine'
      },
      {
        step: '04. WebSocket Actuator Trigger',
        detail: 'Sub-millisecond WebSocket messages trigger solenoid valves and stepper orientation motors for launch execution.',
        tech: 'WebSockets / Embedded C++'
      }
    ]
  },
  {
    id: 'toto-robot',
    title: 'TOTO Autonomous Mobile Robot',
    category: 'Robotics & Perception',
    shortDescription:
      'Research-grade autonomous mobile robot developed on the IIT Delhi platform under the guidance of Prof. (Dr.) Subir Kumar Saha.',
    detailedDescription: [
      'Configured and deployed ROS 2 nodes on Raspberry Pi 5 onboard computer running Linux for differential drive mobile robot control.',
      'Interfaced 2D LiDAR sensors to execute SLAM (Simultaneous Localization and Mapping) and adaptive costmap-based obstacle avoidance.',
      'Calibrated wheel odometry with IMU sensor fusion to achieve robust dead-reckoning in indoor research environments.',
    ],
    technologies: ['ROS2', 'Python', 'Linux', 'Raspberry Pi 5', 'LiDAR', 'SLAM', 'Sensor Fusion'],
    imagePlaceholder: {
      type: 'toto',
      caption: 'ROS 2 Computation Graph, 2D LiDAR Costmap & SLAM Mapping',
      label: 'IIT DELHI // TOTO AMR',
      dimensions: '1280 × 800',
    },
    assetPath: '/assets/robotics/toto/main.png',
    featured: true,
    architecturalHighlights: [
      'ROS 2 Humble / Iron node graph architecture on embedded Linux',
      'LiDAR SLAM mapping & costmap obstacle avoidance',
      'Mentored research under Prof. (Dr.) Subir Kumar Saha (IIT Delhi)',
    ],
    dataFlowSummary: '2D LiDAR Scans + IMU Telemetry + Rotary Encoders → ROS 2 EKF Node → Cartographer / Slam Toolbox → Nav2 Costmap Inflation → Differential Drive Motor Commands',
    architectureFlow: [
      {
        step: '01. Multi-Sensor Data Ingestion',
        detail: 'Raspberry Pi 5 reads 2D LiDAR laser scan arrays, 9-DOF IMU acceleration/gyroscope, and optical wheel encoder ticks.',
        tech: 'RPi 5 / Hardware SPI & I2C'
      },
      {
        step: '02. Sensor Fusion & Odometry',
        detail: 'Robot Localization ROS 2 node fuses IMU orientation and wheel odometry via Extended Kalman Filter (EKF).',
        tech: 'ROS 2 rclpy / robot_localization'
      },
      {
        step: '03. Real-Time 2D SLAM Mapping',
        detail: 'Slam Toolbox generates continuous 2D occupancy grid maps and calculates real-time loop closure transforms.',
        tech: 'SLAM Toolbox / Cartographer'
      },
      {
        step: '04. Autonomous Nav2 Costmap Pathing',
        detail: 'Nav2 stack constructs global/local costmaps with inflation zones, streaming velocity twist commands (cmd_vel) to motor drivers.',
        tech: 'Nav2 / Differential Drive'
      }
    ]
  },
];
