"use client";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import Image from "next/image";

const CourseEnrollmentSidebar = ({ course }) => {
  const { name, price, level, thumbnail } = course;
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  const handleEnrollment = () => {
    router.push("/enroll");
    if (!user) {
      toast("To enroll you have to resigter first...", {
        duration: 6000,
      });
    }
  };
  return (
    <div className="w-full lg:w-80 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md mt-6 lg:mt-0">
      <div className="flex justify-center lg:justify-start mb-6">
        <Image
          width={500}
          height={400}
          src={thumbnail?.url}
          alt={name}
          className="w-24 h-24 rounded-lg object-cover"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {name}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          {level?.join(", ")} | ${price}
        </p>
      </div>
      <p className="text-2xl font-bold text-gray-800 dark:text-white">
        ${price}
      </p>
      <button
        onClick={handleEnrollment}
        className="mt-4 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
      >
        Enroll Now
      </button>
    </div>
  );
};

export default CourseEnrollmentSidebar;
