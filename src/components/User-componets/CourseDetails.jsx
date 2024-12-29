"use client";
import Image from "next/image";
import React from "react";

const CourseDetails = ({ course }) => {
  const {
    name,
    description,
    price,
    tags,
    level,
    thumbnail,
    courseData,
    benefits,
    ratings,
    reviews,
  } = course;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Course Header */}
      <div className="flex items-center space-x-4 mb-6">
        <Image
        width={200}
        height={200}
          src={thumbnail?.url}
          alt={name}
          className="w-24 h-24 rounded-lg object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{name}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {level?.join(", ")} | ${price}
          </p>
        </div>
      </div>

      {/* Course Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          Description
        </h2>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>

      {/* Tags Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          Tags
        </h2>
        <ul className="flex space-x-4">
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
        {courseData?.length > 0 ? (
          <ul>
            {courseData?.map((section) => (
              <li key={section._id} className="mb-4">
                <h3 className="text-md font-semibold text-gray-800 dark:text-white">
                  {section.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{section.description || "No description"}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No sections available.</p>
        )}
      </div>

      {/* Ratings and Reviews */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          Ratings and Reviews
        </h2>
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold text-yellow-500">{ratings}</span>
          <span className="text-sm text-gray-500 dark:text-gray-300">/ 5</span>
        </div>
        {reviews?.length > 0 ? (
          <div className="mt-4">
            <h3 className="font-semibold text-gray-800 dark:text-white">Reviews:</h3>
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
      </div>
    </div>
  );
};

export default CourseDetails;
