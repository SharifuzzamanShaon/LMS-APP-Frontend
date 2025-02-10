"use client";
import CourseAccordion from "@/utils/CourseAccordion";
import { Button, FormControl } from "@mui/material";
import React, { useState } from "react";
import { FiDelete } from "react-icons/fi";

const CourseDataModule = ({setCourseData}) => {
  const [totalSection, setTotalSection] = useState(40);
  const [content, setContent] = useState([{ id: Date.now(), value: "" }]); // Initialize with one object

  const handleRemoveInput = (id) => {
    setContent(content.filter((item) => item.id !== id));
  };

  const handleAddInput = () => {
    if (content.length < totalSection) {
      setContent([...content, { id: Date.now(), value: "" }]);
    }
  };

  return (
    <>
      <FormControl>
        <p className="mb-4 text-lg text-gray-700 dark:text-white">
          Course-content by section
        </p>
        {content.map((input, index) => (
          <div key={input.id} className="flex items-center space-x-4 mb-4">
            <CourseAccordion setCourseData={setCourseData}/>
            <button
              onClick={() => handleRemoveInput(input.id)}
              className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700 focus:outline-none"
            >
              <FiDelete />
            </button>
          </div>
        ))}
        <Button
          variant="outlined"
          className="mt-2 text-black dark:text-white"
          onClick={handleAddInput}
          disabled={content.length >= totalSection}
          size="small"
        >
          Add New Section
        </Button>
      </FormControl>
    </>
  );
};

export default CourseDataModule;


