"use client";

import { useState, useRef } from "react";
import html2canvas from "html2canvas";

export default function ScreenshotButton() {
  const [screenshot, setScreenshot] = useState(null);
  const [isAllowed, setIsAllowed] = useState(false);
  const [crop, setCrop] = useState(null); // Stores the cropping area
  const [isCropping, setIsCropping] = useState(false); // Tracks whether cropping is active
  const canvasRef = useRef(null); // Reference to hold the canvas

  // Function to ask permission and capture the screenshot
  const handleCapture = () => {
    if (!isAllowed) {
      if (window.confirm("Do you allow this page to capture a screenshot of the content?")) {
        setIsAllowed(true);
        captureTab();
      }
    } else {
      captureTab();
    }
  };

  // Capture the content after permission is granted
  const captureTab = () => {
    // Capture the entire body content
    html2canvas(document.body, { scrollX: 0, scrollY: -window.scrollY })
      .then((canvas) => {
        const screenshotURL = canvas.toDataURL("image/png");
        setScreenshot(screenshotURL);
      })
      .catch((err) => {
        console.error("Error capturing the tab:", err);
      });
  };

  // Mouse down event to start cropping
  const startCropping = (e) => {
    if (!screenshot) return;
    setIsCropping(true);

    // Capture the initial mouse position
    const rect = e.target.getBoundingClientRect();
    const startX = e.clientX - rect.left;
    const startY = e.clientY - rect.top;

    setCrop({ x: startX, y: startY, width: 0, height: 0 });
  };

  // Mouse move event to resize the cropping area
  const handleMouseMove = (e) => {
    if (!isCropping) return;
    
    const rect = e.target.getBoundingClientRect();
    const width = e.clientX - rect.left - crop.x;
    const height = e.clientY - rect.top - crop.y;
    
    setCrop((prev) => ({
      ...prev,
      width: width,
      height: height,
    }));
  };

  // Mouse up event to finalize cropping
  const endCropping = () => {
    setIsCropping(false);
    if (crop) {
      cropImage();
    }
  };

  // Function to crop the image based on the selected area
  const cropImage = () => {
    const { x, y, width, height } = crop;

    // Create a new canvas for cropping
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = screenshot;
    img.onload = () => {
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, x, y, width, height, 0, 0, width, height);
      setScreenshot(canvas.toDataURL("image/png"));
    };
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleCapture}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {isAllowed ? "Capture Tab" : "Allow Screenshot Permission"}
      </button>

      {/* Show the image with cropping UI */}
      {screenshot && (
        <div
          className="relative mt-4"
          style={{
            width: "100%",
            maxWidth: "500px",
            border: "1px solid #ccc",
            position: "relative",
          }}
          onMouseMove={handleMouseMove}
          onMouseUp={endCropping}
          onMouseLeave={endCropping}
        >
          <img src={screenshot} alt="Captured Screenshot" className="border rounded-md" />

          {/* Show the cropping area */}
          {isCropping && crop && (
            <div
              style={{
                position: "absolute",
                top: crop.y,
                left: crop.x,
                width: crop.width,
                height: crop.height,
                border: "2px dashed red",
                pointerEvents: "none",
              }}
            />
          )}
        </div>
      )}

      {/* Button to start cropping */}
      {screenshot && !isCropping && (
        <button
          onClick={() => setIsCropping(true)}
          className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md"
        >
          Start Cropping
        </button>
      )}

      {/* Display the cropped image */}
      {screenshot && !isCropping && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Cropped Screenshot:</h3>
          <img
            src={screenshot}
            alt="Cropped Screenshot"
            className="border rounded-md max-w-xs mt-2"
          />
        </div>
      )}
    </div>
  );
}
