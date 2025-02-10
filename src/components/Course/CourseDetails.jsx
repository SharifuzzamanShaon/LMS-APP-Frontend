import React from "react";
import CourseDescription from "./CourseDetails/CourseDescription";
import CourseEnrollmentSidebar from "./CourseDetails/COurseEnrollmentSidebar";

const CourseDetails = ({ course }) => {
  return (
<div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-screen">
  <div className="flex flex-col lg:flex-row lg:space-x-6 h-full">
    {/* Left Column: Scrollable Content */}
    <div className="flex-1 overflow-y-auto h-full pr-4">
      <CourseDescription course={course} />
    </div>
    
    {/* Right Column: Fixed Sidebar */}
    <div className="w-80 lg:w-96 flex-none">
      <CourseEnrollmentSidebar course={course} />
    </div>
  </div>
</div>

  
  );
};

export default CourseDetails;
