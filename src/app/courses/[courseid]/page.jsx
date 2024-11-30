"use client";
import { useParams } from "next/navigation";
import { useFetchCourseDetailsMutation } from "../../../../redux/features/course/courseApi";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CoursePage = () => {
  const { courseid } = useParams();
  const [fetchCourseDetails, {}] = useFetchCourseDetailsMutation();
  const [courseDetails, setCourseDetails] = useState("");
  console.log();
  useEffect(() => {
    const getCourseDetails = async () => {
      try {
        const result = await fetchCourseDetails(courseid);
        // setCourseDetails(result.data?.course);
        console.log("course details:  ", result);
      } catch (error) {
        toast.error("something went wrong");
      }
    };
    getCourseDetails();
  }, [fetchCourseDetails]);
  return (
    <div>
      <h1>Course ID: {courseid}</h1>
    </div>
  );
};

export default CoursePage;
