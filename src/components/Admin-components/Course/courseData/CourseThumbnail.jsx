"use client";
import Image from "next/image";
import React, { useState } from "react";

const CourseThumbnail = ({ formik, values }) => {
  const [preview, setPreview] = useState("");
  const [thumbnail, setThumbnailBase64] = useState("");
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
  return (
    <div>
      <div className="relative w-40 h-40 overflow-hidden mb-4">
        {preview ? (
          <Image
            src={preview}
            alt="Avatar Preview"
            width={160}
            height={160}
            className="object-cover"
          />
        ) : (
          <Image
            // src={user.avatar}
            alt="Course Thumbnail"
            width={160}
            height={160}
            className="object-cover"
          />
        )}
        <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-slate-700">
          <span className="text-gray-500 dark:text-gray-400">No Image</span>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4"
      >
        {/* Custom file upload button */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative">
            <label
              htmlFor="avatar-upload"
              className="cursor-pointer inline-block py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors"
            >
              Choose Image
            </label>
            <input
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
            className={`px-4 py-2 rounded-md shadow-sm transition-colors ${
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
  );
};

export default CourseThumbnail;
