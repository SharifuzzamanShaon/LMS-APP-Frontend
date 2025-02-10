"use client";
import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { FiDelete } from "react-icons/fi";

const VideoSection = ({ formik }) => {
  const [totalSection] = useState(10);

  const handleRemove = (index) => {
    formik.setFieldValue(
      "sectionContents",
      formik.values.sectionContents.filter((_, i) => i !== index)
    );
  };

  const handleAdd = () => {
    if (formik.values.sectionContents.length < totalSection) {
      formik.setFieldValue("sectionContents", [
        ...formik.values.sectionContents,
        { videoTitle: "", videoUrl: "" },
      ]);
    }
  };

  return (
    <div className="mt-6 space-y-4">
      {formik.values.sectionContents.map((section, index) => (
        <div key={index} className="flex items-center space-x-4">
          <Input
            name={`sectionContents.${index}.videoTitle`}
            value={section.videoTitle}
            onChange={formik.handleChange}
            placeholder="Video Title"
            className="dark:text-white text-black w-full"
          />
          <Input
            name={`sectionContents.${index}.videoUrl`}
            value={section.videoUrl}
            onChange={formik.handleChange}
            placeholder="Video URL"
            className="dark:text-white text-black w-full "
          />
          <button
            type="button"
            onClick={() => handleRemove(index)}
            className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
          >
            <FiDelete />
          </button>
        </div>
      ))}

      <Button
        variant="outlined"
        onClick={handleAdd}
        disabled={formik.values.sectionContents.length >= totalSection}
      >
        Add New Section
      </Button>
    </div>
  );
};

export default VideoSection;
