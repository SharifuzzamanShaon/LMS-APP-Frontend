import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SearchResultModal = ({ isModalOpen, setIsModalOpen, searchResult }) => {
  const closeModal = () => setIsModalOpen(false);
  console.log(searchResult);

  return (
    <>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Search Results
            </h2>
            {searchResult?.result?.length > 0 ? (
              <div className="space-y-4">
                {searchResult.result.map((course) => (
                  <Link href={`/courses/${course._id}`}>
                    <div
                      key={course._id}
                      className="flex items-start gap-4 border-b pb-4 border-gray-300 dark:border-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 rounded-lg p-4"
                    >
                      <Image
                        width={100}
                        height={100}
                        src={course.thumbnail.url}
                        alt={course.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          {course.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {course.description}
                        </p>
                        <p className="text-gray-800 dark:text-gray-200 font-medium mt-2">
                          Price: ${course.price}
                        </p>
                        <p className="text-gray-800 dark:text-gray-200 font-medium mt-2">
                          Level: {course.level}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">
                No courses found.
              </p>
            )}
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResultModal;
