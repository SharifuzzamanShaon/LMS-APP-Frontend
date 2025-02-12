"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const SuccessPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("sessionId"); 
  const enrollUser = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/enroll-course/enroll`,
        {sessionId},
        config
      );

      toast.success("Payment successful! You are now enrolled.");
      router.push("/"); // Redirect to a relevant page
    } catch (error) {
      toast.error("Error enrolling in course. Please contact support.");
    }
  };
  useEffect(() => {
    enrollUser();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <h2 className="text-green-600 text-2xl font-semibold">
        Payment Successful! Redirecting...
      </h2>
    </div>
  );
};

export default SuccessPage;
