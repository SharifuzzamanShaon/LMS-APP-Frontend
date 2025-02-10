import React from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import toast from "react-hot-toast";

const CheckOut = () => {
  const { courseDetails } = useSelector((state) => state.courseDetails);
  console.log(courseDetails);
  const { name, price, thumbnail, description } = courseDetails.course || {};

  const makePayment = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const data = {
      name,
      price,
    };
    console.log(data);

    const stripe = await loadStripe(
      "pk_test_51Qq6EcK5LodKUJLls5S3SYKD0SrqDhoFLyRvbSPVK5B0OcKRqPi3jgvwszyGHqxdOstmrXTYv3KYauckaGgcE3pY00SnSXJRih"
    );
    const response =await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/payment/makePayment`,
      data,
      config
    );
    console.log(response);
    const sessionId = response?.data.sessionId;
    const result = stripe.redirectToCheckout({
      sessionId: sessionId,
    });
    if (result.error) {
      toast.error("Something went wrong, please try again")
    }

    
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-6xl mx-auto">
      {/* Left Content */}
      <div className="flex-1 bg-gray-100 p-4 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">{name}</h1>
        {thumbnail && (
          <img
            src={thumbnail.url}
            alt={name}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
        )}
        <p className="text-gray-700 mb-4">{description}</p>
      </div>

      {/* Right Checkout Card */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Checkout</h2>
        <div className="mb-4">
          <p className="text-gray-600">Course:</p>
          <p className="font-medium">{name}</p>
        </div>
        <div className="mb-6">
          <p className="text-gray-600">Price:</p>
          <p className="text-lg font-bold">${price}</p>
        </div>
        <button
          onClick={makePayment}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
