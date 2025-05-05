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
  console.log(result);

    setCourses(result?.data?.enrollments || []);
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
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white-900 dark:border-green-500">
            <svg
              className="animate-spin h-5 w-5 text-gray-900 dark:text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                fill="none"
              />
              <path
                className="opacity-75"
                d="M4 12a8 8 0 1 1 16 0 8 8 0 1 1 -16 0"
              />
            </svg>
          </div>
        </div>
      ) : courses?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-5">
          {courses?.map((course) => (
            <EnrolledCourseCard key={course._id} course={course.course} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-[200px] space-y-3">
        <span className="text-5xl">📚</span> 
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
        </p>
      </div>
      
      ) }
    </div>
  );
};

export default EnrolledCourse;
