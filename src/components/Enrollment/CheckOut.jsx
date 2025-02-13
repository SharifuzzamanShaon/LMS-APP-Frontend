"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import toast from "react-hot-toast";
const CheckOut = () => {
  const { courseDetails } = useSelector((state) => state.courseDetails);
  console.log(courseDetails);
  const {
    _id: id,
    name,
    price,
    thumbnail,
    description,
  } = courseDetails.course || {};

  const makePayment = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const data = {
      id,
      name,
      price,
    };
    console.log(data);

    const stripe = await loadStripe(
      "pk_test_51Qq6EcK5LodKUJLls5S3SYKD0SrqDhoFLyRvbSPVK5B0OcKRqPi3jgvwszyGHqxdOstmrXTYv3KYauckaGgcE3pY00SnSXJRih"
    );

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/enroll-course/makePayment`,
      data,
      config
    );
    console.log(response);

    const sessionId = response?.data.sessionId;

    const result = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });
    useEffect(() => {
      if (result.error) {
        toast.error("Something went wrong, please try again");
      } else {
        alert("successful"); // Log "successful" after successful payment
      }
    }, [result]);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-6xl mx-auto">
      {/* Left Content */}
      <div className="flex-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {name}
        </h1>
        {thumbnail && (
          <img
            src={thumbnail.url}
            alt={name}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
        )}
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      </div>

      {/* Right Checkout Card */}
      <div className="w-full lg:w-1/3 bg-white dark:bg-gray-900 p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Checkout
        </h2>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">Course:</p>
          <p className="font-medium text-gray-900 dark:text-gray-100">{name}</p>
        </div>
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">Price:</p>
          <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
            ${price}
          </p>
        </div>
        <button
          onClick={makePayment}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
