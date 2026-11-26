# Portfolio Assets Manifest & Instructions

This directory structure holds all production assets for Prince Kumar Maurya's portfolio.
The frontend is architected with resilient, graceful fallback SVG placeholders so the website renders flawlessly whether assets are present or missing.

## Directory Structure & Asset Specifications

| Asset Path | Intended Section | Aspect Ratio / Recommended Res | Description / Instructions |
|---|---|---|---|
| `profile/portrait.png` | Hero & About Me | 1:1 square (min 800×800 px) | Professional circular portrait of Prince Kumar Maurya. Transparent PNG or clean light/dark background. |
| `documents/resume.pdf` | Navigation, Hero & Contact | Standard PDF | Prince Kumar Maurya's official PDF resume / CV for direct download. |
| `certificates/nptel-nlp.png` | Certifications | 4:3 or 16:9 (1200×900 px) | NPTEL Elite Certificate in Natural Language Processing (IIT Kharagpur). |
| `certificates/udemy-bootcamp.png` | Certifications | 4:3 or 16:9 (1200×900 px) | Complete Data Science, Machine Learning, Deep Learning and NLP Bootcamp certificate. |
| `certificates/ros2.png` | Certifications | 4:3 or 16:9 (1200×900 px) | ROS 2 for Beginners certificate (Udemy). |
| `robotics/robocon/` | Robotics & Leadership | 16:10 or 16:9 (1280×800 px) | DD ROBOCON 2026 / ABU ROBOCON 2025 bot, arena testing, and team photos. (e.g., `main.png`) |
| `robotics/toto/` | Robotics & Leadership | 16:10 or 16:9 (1280×800 px) | TOTO Autonomous Mobile Robot at IIT Delhi platform with LiDAR and chassis. (e.g., `main.png`) |
| `projects/kfs/` | Featured Projects | 16:10 (1280×800 px) | KFS Real-time Detection System YOLOv8s-OBB interface / bounding box preview. (e.g., `preview.png`) |
| `projects/fasalgpt/` | Featured Projects | 16:10 (1280×800 px) | FASALGPT Streamlit UI showing crop recommendation / plant disease detection. (e.g., `preview.png`) |
| `projects/rag/` | Featured Projects | 16:10 (1280×800 px) | Conversational Assessment Recommendation System & Smart Document QA UI. (e.g., `preview.png`) |
| `projects/basketball-robot/` | Featured Projects | 16:10 (1280×800 px) | Semi-Automatic Basketball Playing Robot mechanics & vision tracking setup. (e.g., `preview.png`) |

## Replacing Assets
Simply drop your images or PDF into the exact folders and filenames listed above. The website components automatically detect their presence and render them with smooth transitions without requiring any code modifications or layout adjustments.
