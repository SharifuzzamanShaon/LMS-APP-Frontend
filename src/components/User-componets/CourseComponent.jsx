"use client";
import React, { useEffect, useState } from "react";
import { useFetchAllCourseMutation } from "../../../redux/features/course/courseApi";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow-md rounded-lg p-4 transition duration-300">
      <h2 className="text-xl font-bold mb-2">{course.title}</h2>
      <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
        {course.description || "No description available."}
      </p>
      <button className="mt-auto bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-800 transition">
        Learn More
      </button>
    </div>
  );
};

const CourseComponent = () => {
  const [fetchAllCourse] = useFetchAllCourseMutation();
  const [courses, setCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const result = await fetchAllCourse()
        setCourses(result.data?.allCourses);
      } catch (error) {
        setErrorMessage(error?.data?.message || "Failed to fetch courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [fetchAllCourse]);

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Courses
      </h1>
      {loading && <p>Loading...</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        !loading && (
          <p className="text-gray-700 dark:text-gray-300">
            No courses available.
          </p>
        )
      )}
    </div>
  );
};

export default CourseComponent;
