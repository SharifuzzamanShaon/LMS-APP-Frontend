"use client";
import React, { useEffect, useState } from "react";
import { useFetchAllCourseMutation } from "../../../redux/features/course/courseApi";
import Link from "next/link";
import Image from "next/image";
import FilterCourseByCategoryBtn from "../Filter-components/FilterCourseByCategoryBtn";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow-md rounded-lg p-4 transition duration-300 flex flex-col h-full">
      {course.thumbnail && (
        <div className="mb-4 relative w-full h-48">
          <Image
            src={course.thumbnail.url}
            alt={`${course.name} Thumbnail`}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      )}
      <h2 className="text-sm font-bold text-gray-700 dark:text-gray-400 mb-2">
        {course.name}
      </h2>
      <p className="text-xs text-gray-700 dark:text-gray-400 mb-2 line-clamp-2">
        {course.description || "No description available."}
      </p>
      <p className="text-sm text-gray-700 dark:text-gray-400 mb-2">
        <strong>Price:</strong> ${course.price}
      </p>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        <strong>Level:</strong> {course.level.join(", ")}
      </p>
      <Link href={`/courses/${course._id}`}>
        <button className="w-full bg-blue-500 dark:bg-blue-700 text-white py-1 px-2 text-sm rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 transition">
          View Details
        </button>
      </Link>
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
        const result = await fetchAllCourse();
        console.log(result?.data?.allCourses);

        setCourses(result?.data?.allCourses);
      } catch (error) {
        setErrorMessage(error?.data?.message || "Failed to fetch courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [fetchAllCourse]);

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 ">
      <h1 className="text-3sm font-bold text-gray-600 dark:text-gray-100 mb-6">
        Courses
      </h1>
      {loading && <p className="dark:text-white text-black">Loading...</p>}
      <FilterCourseByCategoryBtn/>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {courses?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
