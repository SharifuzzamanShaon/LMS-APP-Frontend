"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CourseThumbnail = ({ formik, resetThumbnailnput }) => {
  const [preview, setPreview] = useState("");
  const [thumbnail, setThumbnailBase64] = useState("");
  const fileInputRef = React.useRef(null);
  
  // Add default image
  const defaultImage = "/image/video-tutorial.png"; // Adjust path as needed

  const handleFileChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setThumbnailBase64(reader.result);
      };
      reader.onloadend = () => {
        setPreview(reader.result); // Set the preview state to the Data URL
      };

      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    formik.setFieldValue("thumbnail", thumbnail);
  };
  useEffect(() => {
    if (resetThumbnailnput) {
      setThumbnailBase64("");
      setPreview("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }, [resetThumbnailnput]);
  return (
    <div className="p-4 max-w-4xl mx-auto font-Poppins">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="relative w-full aspect-video max-w-md mx-auto">
          {preview ? (
            <Image
              src={preview}
              alt="Course Thumbnail Preview"
              fill
              className="object-cover rounded-lg"
            />
          ) : (
            <Image
              src={defaultImage}
              alt="Course Thumbnail"
              fill
              className="object-cover rounded-lg"
            />
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-4 w-full"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
            <div className="relative w-full sm:w-auto cursor-pointer">
              <label
                htmlFor="avatar-upload"
                className=" w-full sm:w-auto cursor-pointer inline-block py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 transition-colors text-center"
              >
                Choose Image
              </label>
              <input
                ref={fileInputRef}
                type="file"
                id="avatar-upload"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>
            <button
              type="submit"
              disabled={!thumbnail}
              className={`w-full sm:w-auto px-4 py-2 rounded-md shadow-sm transition-colors ${
                thumbnail
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-400 text-gray-300 cursor-not-allowed"
              }`}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseThumbnail;
