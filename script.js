// // const video = document.getElementById('video');
// // const canvas = document.getElementById('overlay');
// // const ctx = canvas.getContext('2d'); // Define canvas context
// // const labeledDescriptors = [];

// // // Load face-api.js models
// // Promise.all([
// //     faceapi.nets.ssdMobilenetv1.loadFromUri('./model/face-api.js-models/ssd_mobilenetv1'),
// //     faceapi.nets.tinyFaceDetector.loadFromUri('./model/face-api.js-models/tiny_face_detector'),
// //     // faceapi.nets.tinyFaceDetector.loadFromUri('./model/face-api.js-models/tiny_face_detector'),
// //     faceapi.nets.faceLandmark68Net.loadFromUri('./model/face-api.js-models/face_landmark_68'),
// //     faceapi.nets.faceRecognitionNet.loadFromUri('./model/face-api.js-models/face_recognition'),
// //     faceapi.nets.faceExpressionNet.loadFromUri('./model/face-api.js-models/face_expression'),
// //     faceapi.nets.ageGenderNet.loadFromUri('./model/face-api.js-models/age_gender_model')
// // ]).then(() => console.log("Models loaded successfully")).catch(err => console.error("Model loading failed:", err));

// // // Wait for DOM to load before attaching event listeners
// // document.addEventListener('DOMContentLoaded', () => {
// //     document.getElementById('start').addEventListener('click', startVideo);
// //     document.getElementById('stop').addEventListener('click', stopVideo);
// //     document.getElementById('register').addEventListener('click', registerFace);
// //     document.getElementById('clear').addEventListener('click', () => {
// //         labeledDescriptors.length = 0;
// //         alert("All registered faces cleared.");
// //     });
// // });

// // function startVideo() {
// //     console.log("Starting video stream...");
// //     if (video.srcObject) {
// //         console.log("Video stream already started.");
// //         return;
// //     }
// //     if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
// //         console.error("getUserMedia not supported.");
// //         alert("Your browser doesn’t support camera access.");
// //         return;
// //     }

// //     navigator.mediaDevices.getUserMedia({ video: true })
// //         .then(stream => {
// //             console.log("Camera stream started successfully.");
// //             video.srcObject = stream;
// //             video.play();
// //         })
// //         .catch(err => {
// //             console.error("Camera error:", err.name, err.message);
// //             alert(`Camera Error: ${err.name} - ${err.message}`);
// //         });
// // }

// // function stopVideo() {
// //     console.log("Stopping video stream...");
// //     const stream = video.srcObject;
// //     if (stream) {
// //         stream.getTracks().forEach(track => track.stop());
// //         video.srcObject = null;
// //         console.log("Video stream stopped.");
// //     }
// // }

// // video.addEventListener('play', () => {
// //     console.log("Video playing, starting face detection...");
// //     canvas.width = video.videoWidth;
// //     canvas.height = video.videoHeight;
// //     const displaySize = { width: video.videoWidth, height: video.videoHeight };
// //     faceapi.matchDimensions(canvas, displaySize);

// //     setInterval(async () => {
// //         const detections = await faceapi
// //             .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
// //             .withFaceLandmarks()
// //             .withFaceExpressions()
// //             .withAgeAndGender()
// //             .withFaceDescriptors();

// //         const resized = faceapi.resizeResults(detections, displaySize);
// //         ctx.clearRect(0, 0, canvas.width, canvas.height);

// //         resized.forEach(result => {
// //             const { age, gender, expressions, descriptor } = result;
// //             const box = result.detection.box;
// //             const expression = getDominantExpression(expressions);

// //             new faceapi.draw.DrawBox(box, {
// //                 label: `Age: ${Math.round(age)}, Gender: ${gender}, Expr: ${expression}`
// //             }).draw(canvas);

// //             if (labeledDescriptors.length > 0) {
// //                 const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors);
// //                 const bestMatch = faceMatcher.findBestMatch(descriptor);
// //                 new faceapi.draw.DrawBox(box, {
// //                     label: `Person: ${bestMatch.toString()}`
// //                 }).draw(canvas);
// //             }
// //         });
// //     }, 200);
// // });

// // function getDominantExpression(expressions) {
// //     return Object.entries(expressions).reduce((a, b) => a[1] > b[1] ? a : b)[0];
// // }

// // async function registerFace() {
// //     const name = document.getElementById('name').value;
// //     if (!name) return alert("Please enter a name");

// //     if (!video.srcObject) return alert("Start the camera first!");

// //     const detection = await faceapi
// //         .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
// //         .withFaceLandmarks()
// //         .withFaceDescriptor();

// //     if (!detection) return alert("No face detected");

// //     labeledDescriptors.push(
// //         new faceapi.LabeledFaceDescriptors(name, [detection.descriptor])
// //     );
// //     alert(`Registered ${name}`);
// // }


// console.log("Your app is ready!");
// const video = document.getElementById('video');

// Promise.all([
//   faceapi.nets.tinyFaceDetector.loadFromUri('./model/face-api.js-models/tiny_face_detector'),
//   faceapi.nets.faceLandmark68Net.loadFromUri('./model/face-api.js-models/face_landmark_68'),
//   faceapi.nets.faceRecognitionNet.loadFromUri('./model/face-api.js-models/face_recognition'),
//   faceapi.nets.faceExpressionNet.loadFromUri('./model/face-api.js-models/face_expression'),
//   faceapi.nets.ageGenderNet.loadFromUri('./model/face-api.js-models/age_gender_model') // ✅ Age/Gender Model
// ]).then(startVideo);

// // // function startVideo() {
// // //   navigator.mediaDevices.getUserMedia({ video: {} })
// // //     .then(stream => {
// // //       video.srcObject = stream;
// // //     })
// // //     .catch(err => console.error("Error accessing camera:", err));
// // // }

// // // video.addEventListener('play', () => {
// // //   const canvas = faceapi.createCanvasFromMedia(video);
// // //   document.body.append(canvas);

// // //   const displaySize = { width: video.width, height: video.height };
// // //   faceapi.matchDimensions(canvas, displaySize);

// // //   setInterval(async () => {
// // //     const detections = await faceapi
// // //       .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
// // //       .withFaceLandmarks()
// // //       .withFaceExpressions()
// // //       .withAgeAndGender(); // 👈 Add this to get age/gender

// // //     const resized = faceapi.resizeResults(detections, displaySize);

// // //     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
// // //     faceapi.draw.drawDetections(canvas, resized);
// // //     faceapi.draw.drawFaceLandmarks(canvas, resized);
// // //     faceapi.draw.drawFaceExpressions(canvas, resized);

// // //     // Draw age and gender
// // //     resized.forEach(result => {
// // //       const { age, gender, genderProbability } = result;
// // //       const box = result.detection.box;
// // //       const label = `${Math.round(age)} yrs, ${gender} (${(genderProbability * 100).toFixed(0)}%)`;

// // //       const drawBox = new faceapi.draw.DrawBox(box, { label });
// // //       drawBox.draw(canvas);
// // //     });
// // //   }, 100);
// // });


// // const video = document.getElementById('video');
// const canvas = document.getElementById('overlay');
// const ctx = canvas.getContext('2d'); // Define canvas context
// const labeledDescriptors = [];

// // // Load face-api.js models
// // Promise.all([
// //     faceapi.nets.tinyFaceDetector.loadFromUri('./model/face-api.js-models/tiny_face_detector'),
// //     faceapi.nets.faceLandmark68Net.loadFromUri('./model/face-api.js-models/face_landmark_68'),
// //     faceapi.nets.faceRecognitionNet.loadFromUri('./model/face-api.js-models/face_recognition'),
// //     faceapi.nets.faceExpressionNet.loadFromUri('./model/face-api.js-models/face_expression'),
// //     faceapi.nets.ageGenderNet.loadFromUri('./model/face-api.js-models/age_gender_model')
// // ]).then(() => console.log("Models loaded successfully")).catch(err => console.error("Model loading failed:", err));

// // Wait for DOM to load before attaching event listeners
// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('start').addEventListener('click', startVideo);
//     document.getElementById('stop').addEventListener('click', stopVideo);
//     document.getElementById('register').addEventListener('click', registerFace);
//     document.getElementById('clear').addEventListener('click', () => {
//         labeledDescriptors.length = 0;
//         alert("All registered faces cleared.");
//     });
// });

// function startVideo() {
//     console.log("Starting video stream...");
//     if (video.srcObject) {
//         console.log("Video stream already started.");
//         return;
//     }
//     if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
//         console.error("getUserMedia not supported.");
//         alert("Your browser doesn’t support camera access.");
//         return;
//     }

//     navigator.mediaDevices.getUserMedia({ video: true })
//         .then(stream => {
//             console.log("Camera stream started successfully.");
//             video.srcObject = stream;
//             video.play();
//         })
//         .catch(err => {
//             console.error("Camera error:", err.name, err.message);
//             alert(`Camera Error: ${err.name} - ${err.message}`);
//         });
// }

// function stopVideo() {
//     console.log("Stopping video stream...");
//     const stream = video.srcObject;
//     if (stream) {
//         stream.getTracks().forEach(track => track.stop());
//         video.srcObject = null;
//         console.log("Video stream stopped.");
//     }
// }

// video.addEventListener('play', () => {
//     console.log("Video playing, starting face detection...");
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     const displaySize = { width: video.videoWidth, height: video.videoHeight };
//     faceapi.matchDimensions(canvas, displaySize);

//     setInterval(async () => {
//         const detections = await faceapi
//             .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
//             .withFaceLandmarks()
//             .withFaceExpressions()
//             .withAgeAndGender()
//             .withFaceDescriptors();

//         const resized = faceapi.resizeResults(detections, displaySize);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         resized.forEach(result => {
//             const { age, gender, expressions, descriptor } = result;
//             const box = result.detection.box;
//             const expression = getDominantExpression(expressions);

//             new faceapi.draw.DrawBox(box, {
//                 label: `Age: ${Math.round(age)}, Gender: ${gender}, Expr: ${expression}`
//             }).draw(canvas);

//             if (labeledDescriptors.length > 0) {
//                 const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors);
//                 const bestMatch = faceMatcher.findBestMatch(descriptor);
//                 new faceapi.draw.DrawBox(box, {
//                     label: `Person: ${bestMatch.toString()}`
//                 }).draw(canvas);
//             }
//         });
//     }, 200);
// });

// function getDominantExpression(expressions) {
//     return Object.entries(expressions).reduce((a, b) => a[1] > b[1] ? a : b)[0];
// }

// async function registerFace() {
//     const name = document.getElementById('name').value;
//     if (!name) return alert("Please enter a name");

//     if (!video.srcObject) return alert("Start the camera first!");

//     const detection = await faceapi
//         .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
//         .withFaceLandmarks()
//         .withFaceDescriptor();

//     if (!detection) return alert("No face detected");

//     labeledDescriptors.push(
//         new faceapi.LabeledFaceDescriptors(name, [detection.descriptor])
//     );
//     alert(`Registered ${name}`);
// }




const video = document.getElementById('video');
const canvas = document.getElementById('overlay');
const ctx = canvas.getContext('2d');
const labeledDescriptors = [];
let detectionInterval = null; // Store interval ID to clear it later

// Load face-api.js models
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('./model/face-api.js-models/tiny_face_detector'),
    faceapi.nets.faceLandmark68Net.loadFromUri('./model/face-api.js-models/face_landmark_68'),
    faceapi.nets.faceRecognitionNet.loadFromUri('./model/face-api.js-models/face_recognition'),
    faceapi.nets.faceExpressionNet.loadFromUri('./model/face-api.js-models/face_expression'),
    faceapi.nets.ageGenderNet.loadFromUri('./model/face-api.js-models/age_gender_model')
]).then(() => console.log("Models loaded successfully")).catch(err => console.error("Model loading failed:", err));

// DOM event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start').addEventListener('click', startVideo);
    document.getElementById('stop').addEventListener('click', stopVideo);
    document.getElementById('register').addEventListener('click', registerFace);
    document.getElementById('clear').addEventListener('click', () => {
        labeledDescriptors.length = 0;
        alert("All registered faces cleared.");
    });
});

function startVideo() {
    console.log("Starting video stream...");
    if (video.srcObject) {
        console.log("Video stream already started.");
        return;
    }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        console.error("getUserMedia not supported.");
        alert("Your browser doesn’t support camera access.");
        return;
    }

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            console.log("Camera stream started successfully.");
            video.srcObject = stream;
            video.play();
        })
        .catch(err => {
            console.error("Camera error:", err.name, err.message);
            alert(`Camera Error: ${err.name} - ${err.message}`);
        });
}

function stopVideo() {
    console.log("Stopping video stream...");
    const stream = video.srcObject;
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        video.srcObject = null;
        if (detectionInterval) {
            clearInterval(detectionInterval);
            detectionInterval = null;
            console.log("Detection loop stopped.");
        }
    }
}

video.addEventListener('play', () => {
    console.log("Video playing, preparing face detection...");

    // Wait for video metadata to ensure dimensions are available
    video.onloadedmetadata = () => {
        if (video.videoWidth === 0 || video.videoHeight === 0) {
            console.error("Video dimensions not available yet.");
            return;
        }

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const displaySize = { width: video.videoWidth, height: video.videoHeight };
        faceapi.matchDimensions(canvas, displaySize);

        // Start detection only if not already running
        if (!detectionInterval) {
            detectionInterval = setInterval(async () => {
                const detections = await faceapi
                    .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
                    .withFaceLandmarks()
                    .withFaceExpressions()
                    .withAgeAndGender()
                    .withFaceDescriptors();

                if (video.srcObject) { // Only resize if video is still active
                    const resized = faceapi.resizeResults(detections, displaySize);
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    resized.forEach(result => {
                        const { age, gender, expressions, descriptor } = result;
                        const box = result.detection.box;
                        const expression = getDominantExpression(expressions);

                        new faceapi.draw.DrawBox(box, {
                            label: `Age: ${Math.round(age)}, Gender: ${gender}, Expr: ${expression}`
                        }).draw(canvas);

                        if (labeledDescriptors.length > 0) {
                            const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors);
                            const bestMatch = faceMatcher.findBestMatch(descriptor);
                            new faceapi.draw.DrawBox(box, {
                                label: `Person: ${bestMatch.toString()}`
                            }).draw(canvas);
                        }
                    });
                }
            }, 200);
            console.log("Face detection loop started.");
        }
    };
});

function getDominantExpression(expressions) {
    return Object.entries(expressions).reduce((a, b) => a[1] > b[1] ? a : b)[0];
}

async function registerFace() {
    const name = document.getElementById('name').value;
    if (!name) return alert("Please enter a name");
    if (!video.srcObject) return alert("Start the camera first!");

    const detection = await faceapi
        .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptor();

    if (!detection) return alert("No face detected");

    labeledDescriptors.push(
        new faceapi.LabeledFaceDescriptors(name, [detection.descriptor])
    );
    alert(`Registered ${name}`);
}