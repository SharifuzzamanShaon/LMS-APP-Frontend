"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const CancelPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/courses"); // Redirect to courses page
    }, 3000);
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <h2 className="text-red-600 text-2xl font-semibold">
        Payment Canceled! Redirecting...
      </h2>
    </div>
  );
};

export default CancelPage;
