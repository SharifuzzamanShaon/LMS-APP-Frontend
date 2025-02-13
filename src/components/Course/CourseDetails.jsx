import React from "react";
import CourseDescription from "./CourseDetails/CourseDescription";
import CourseEnrollmentSidebar from "./CourseDetails/CourseEnrollmentSidebar";

const CourseDetails = ({ course }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg my-4 sm:my-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column: Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <CourseDescription course={course} />
        </div>

        {/* Right Column: Sidebar */}
        <div className="w-full lg:w-96 flex-none">
          <CourseEnrollmentSidebar course={course} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
