<h1 align="center">Face Recognition Desktop App</h1>

<p align="center">
  A desktop app that detects and recognizes faces from your webcam in real time, built with <b>Electron</b> and <b>face-api.js</b>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/face--api.js-Computer_Vision-FF6F00?style=for-the-badge"/>
</p>

---

## Features

- **Live camera:** start and stop the webcam from the app
- **Face detection:** finds faces in each frame and draws boxes around them
- **Register faces:** save a face with a name so the app can recognize that person later
- **Real-time recognition:** matches faces against the registered people using face descriptors
- **Runs locally:** all models load from the bundled `model/` folder, so no video leaves your computer

## How it works

1. On startup the app loads face-api.js neural network models: SSD MobileNet and Tiny Face Detector for detection, a 68-point landmark model, the face recognition model, and expression and age/gender models.
2. When you register a face, the app stores its face descriptor (a numeric fingerprint) with the name you enter.
3. For every video frame, faces are detected, turned into descriptors, and compared with the saved ones using a `FaceMatcher` to label each face.

## Tech stack

| Part | Tools |
|---|---|
| Desktop shell | Electron |
| Vision | face-api.js (built on TensorFlow.js) |
| UI | HTML, CSS, JavaScript |

## Project structure

~~~text
├── main.js        # Electron main process: creates the app window
├── index.html     # App UI: video feed and controls
├── script.js      # Camera, detection, registration and recognition logic
└── model/         # Pre-trained face-api.js model weights
~~~

## Getting started

**Prerequisites:** Node.js 18+ and a webcam

~~~bash
git clone https://github.com/Vansh1252/face-detection.git
cd face-detection
npm install
npm start
~~~

Click **Start Camera**, then **Register Face** to add a person.

## Author

**Vansh Jain**: [GitHub](https://github.com/Vansh1252) · sanklechav65@gmail.com
