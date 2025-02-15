"use client";
import React, { useEffect, useState } from "react";
import { useFetchAllCourseMutation } from "../../../redux/features/course/courseApi";
import Link from "next/link";
import Image from "next/image";
import FilterCourseByCategoryBtn from "../Filter-components/FilterCourseByCategoryBtn";
import CourseCardSkeleton from "@/utils/CourseCardSkeleton";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineSearchOff } from "react-icons/md";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow-md rounded-lg p-3 sm:p-4 transition duration-300 flex flex-col h-full">
      {course.thumbnail && (
        <div className="mb-3 sm:mb-4 relative w-full h-36 sm:h-48">
          <Image
            src={course.thumbnail.url}
            alt={`${course.name} Thumbnail`}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      )}
      <h2 className="text-xs sm:text-sm md:text-base font-bold text-gray-700 dark:text-gray-400 mb-1 sm:mb-2">
        {course.name}
      </h2>
      <p className="text-xs md:text-sm text-gray-700 dark:text-gray-400 mb-1 sm:mb-2 line-clamp-2">
        {course.description || "No description available."}
      </p>
      <p className="text-xs md:text-sm text-gray-700 dark:text-gray-400 mb-1 sm:mb-2">
        <strong>Price:</strong> ${course.price}
      </p>
      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
        <strong>Tags:</strong> {course.tags.join(", ")}
      </p>
      <Link href={`/courses/${course._id}`} className="mt-auto">
        <button className="w-full bg-blue-500 dark:bg-blue-700 text-white py-1.5 sm:py-2 px-2 text-xs sm:text-sm rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 transition">
          View Details
        </button>
      </Link>
    </div>
  );
};

const CourseComponent = () => {
  const [fetchAllCourse] = useFetchAllCourseMutation();
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const result = await fetchAllCourse();
        setCourses(result?.data?.allCourses);
        setFilteredCourses(result?.data?.allCourses);
      } catch (error) {
        setErrorMessage(error?.data?.message || "Failed to fetch courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [fetchAllCourse]);

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 max-w-[1440px] mx-auto px-8 sm:px-12">
      <div className="flex flex-col items-start justify-center py-10">
        <h1 className="text-2md sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 leading-tight">
          From Critical Skills to Technical Topics
        </h1>
        <p className="text-sm sm:text-xl text-green-600 dark:text-green-400 leading-relaxed">
          SkillSage supports your professional development with expert-led
          courses
        </p>
      </div>
      <FilterCourseByCategoryBtn
        courses={courses}
        setFilteredCourses={setFilteredCourses}
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
          {[...Array(8)].map((_, index) => (
            <CourseCardSkeleton key={index} />
          ))}
        </div>
      ) : filteredCourses?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="text-gray-400 dark:text-gray-500 mb-4">
            <MdOutlineSearchOff size={80} />
          </div>
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            No Courses Found
          </h2>
          <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
            <FaBookOpen /> No courses are available at the moment
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseComponent;
