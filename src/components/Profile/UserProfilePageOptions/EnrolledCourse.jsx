"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import EnrolledCourseCard from "@/components/Course/CourseDetails/EnrolledCourseCard";
const EnrolledCourse = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEnrolledCoures = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/user/enrolled-courses`,
      {
        withCredentials: true,
      }
    );
    setCourses(result?.data?.enrolledCourses);
  };
  useEffect(() => {
    setLoading(true);
    fetchEnrolledCoures();
    setLoading(false);
  }, []);
  console.log(courses);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white-900 dark:border-green-500"></div>
        </div>
      ) : courses?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
          {courses?.map((course) => (
            <EnrolledCourseCard key={course._id} course={course} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-[200px] space-y-3">
        <span className="text-5xl">📚</span> 
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          You are not enrolled in any course
        </p>
      </div>
      
      )}
    </div>
  );
};

export default EnrolledCourse;
