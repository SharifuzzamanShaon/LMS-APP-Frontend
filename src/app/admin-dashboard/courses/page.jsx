"use client"
import React, { useState, useEffect } from 'react'
import { useGetCourseListQuery } from '../../../../redux/features/admin/dashboardApi';
import toast from 'react-hot-toast';
import Image from 'next/image';

const page = () => {
  const [courses, setCourses] = useState([]);
  const {data, isLoading, isError} = useGetCourseListQuery();
  console.log(data);



  useEffect(() => {
    if (data) {
      setCourses(data?.courses);
    }
    if (isError) {
      toast.error("Error fetching courses");
    }
  }, [data,isError]);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
const handleEditCourse=(id)=>{
  console.log(id)
}
  return (
    <div className="p-4 sm:p-6 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">My Courses</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        {/* Header Row */}
        <div className="grid grid-cols-[2fr_1.5fr_0.8fr_1.5fr_1fr_0.5fr] p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <h2 className="font-semibold text-gray-700 dark:text-gray-200 text-sm sm:text-base">Title</h2>
          <h2 className="font-semibold text-gray-700 dark:text-gray-200 text-sm sm:text-base">Thumbnail</h2>
          <h2 className="font-semibold text-gray-700 dark:text-gray-200 text-sm sm:text-base">Price</h2>
          <h2 className="font-semibold text-gray-700 dark:text-gray-200 text-sm sm:text-base hidden md:block">Tags</h2>
          <h2 className="font-semibold text-gray-700 dark:text-gray-200 text-sm sm:text-base hidden md:block">Level</h2>
          <h2 className="font-semibold text-gray-700 dark:text-gray-200 text-sm sm:text-base">Edit</h2>
        </div>

        {/* Course Rows */}
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          {courses?.map((course) => (
            <div key={course._id} className="grid grid-cols-[2fr_1.5fr_0.8fr_1.5fr_1fr_0.5fr] p-3 sm:p-4 items-center">
              <div className="text-sm sm:text-base text-gray-800 dark:text-gray-200">{course.name}</div>
              <div className="flex items-center">
                <Image 
                  src={course.thumbnail.url} 
                  alt={course.title} 
                  className="w-12 h-9 sm:w-16 sm:h-12 rounded object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div className="text-sm sm:text-base text-gray-800 dark:text-gray-200">${course.price}</div>
              <div className="hidden md:block text-sm sm:text-base text-gray-800 dark:text-gray-200">
                {course.tags.join(', ')}
              </div>
              <div className="hidden md:block text-sm sm:text-base text-gray-800 dark:text-gray-200">
                {course.level}
              </div>
              <div>
                <button 
                  className="p-2 text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  onClick={() => handleEditCourse(course._id)}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-5 h-5"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" 
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page