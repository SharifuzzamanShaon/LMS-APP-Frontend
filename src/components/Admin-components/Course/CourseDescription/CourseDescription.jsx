"use client";
import React, { useState } from "react";
import EditorModal from "@/utils/TextEditor/EditorModal";
import TextEditor from "@/utils/TextEditor/TextEditor";

const CourseDescription = ({formik, values}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Description
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-lg w-[90%] max-w-4xl h-[90%] overflow-y-auto">
            <div className="text-gray-700 dark:text-gray-300 mb-6">
              <EditorModal formik={formik}/>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDescription;
