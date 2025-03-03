"use client";
import React, { useEffect, useState } from "react";
import WatchCourseSection from "@/components/Profile/Watch/WatchCourseSection";
import WatchVideo from "@/components/Profile/Watch/WatchVideo";
import { useGetEnrolledCourseContentMutation } from "../../../../redux/features/course/courseApi";
const WatchSection = ({ courseId }) => {
  const [courseData, setCourseData] = useState(null);
  const [nowPlaying, setNowPlaying] = useState("");
  const [getEnrolledCourseContent, {}] = useGetEnrolledCourseContentMutation();
  useEffect(() => {
    const getContent = async () => {
      const {data} = await getEnrolledCourseContent(courseId);
      console.log(data);
      setCourseData(data?.course)
    };
    getContent();
  }, []);
  console.log(courseData);
  return (
    <div className="p-5 h-full text-gray-700 dark:text-gray-400">
      {/* Section Title */}
      <h1 className="text-2xl  text-gray-800 dark:text-white mb-4">
        {courseData?.name}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {/* Left Section - Course Content */}
        <div >
          <WatchCourseSection content={courseData?.courseData} setNowPlaying={setNowPlaying}/>
        </div>  
        <div >
          <WatchVideo nowPlaying={nowPlaying}/>
        </div>
      </div>
    </div>
  );
};

export default WatchSection;
