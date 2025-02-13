"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const SuccessPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("sessionId"); 
  const courseId = searchParams.get("courseId")
  console.log(sessionId, courseId);
  const enrollUser = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/enroll-course/enroll`,
        {sessionId, courseId},
        config
      );
      console.log(response);

      toast.success(response?.data.message);
      router.push("/"); // Redirect to a relevant page
    } catch (error) {
      toast.error( "Error enrolling in course. Please contact support.");
      setTimeout(() => {
        router.push("/");
      }, 3000);
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
