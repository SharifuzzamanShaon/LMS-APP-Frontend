import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EnrolledCourseCard = ({course}) => {
  console.log(course);
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
     
    </p>
    <Link href={`/profile/watch/${course._id}`} className="mt-auto">
      <button className="w-full bg-green-500 dark:bg-green-700 text-white py-1.5 sm:py-2 px-2 text-xs sm:text-sm rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 transition">
        Start Course
      </button>
    </Link>
  </div>
  )
}

export default EnrolledCourseCard