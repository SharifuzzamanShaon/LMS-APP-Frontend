import React from "react";
import CourseSections from "./CourseSections";
const CourseDescription = ({ course }) => {
  const {
    description,
    tags,
    courseData,
    ratings,
    reviews,
  } = course;
  return (
    <div className="flex-1 overflow-y-auto max-h-[calc(100vh-150px)]">
      {reviews?.length > 0 ? (
        <div className="mt-4">
          <h3 className="font-semibold text-gray-800 dark:text-white">
            Reviews:
          </h3>
          <ul className="mt-2 space-y-4">
            {reviews?.map((review, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                <p className="font-semibold">{review.user}</p>
                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">No reviews yet.</p>
      )}
      {/* Course Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          Description
        </h2>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
      {/* Ratings and Reviews */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          Ratings and Reviews
        </h2>
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold text-yellow-500">
            {ratings}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-300">/ 5</span>
        </div>
      </div>
      {/* Tags Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          Tags
        </h2>
        <ul className="flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <li
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      {/* Course Data Sections */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          Course Sections
        </h2>
        <CourseSections courseData={courseData}/>
      </div>
    </div>
  );
};

export default CourseDescription;
