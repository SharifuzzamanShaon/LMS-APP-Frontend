"use client";
import { useParams } from "next/navigation";
import { useFetchCourseDetailsMutation } from "../../../../redux/features/course/courseApi";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CourseDetails from "@/components/User-componets/CourseDetails";

const CoursePage = () => {
  const { courseid } = useParams();
  const [fetchCourseDetails, {}] = useFetchCourseDetailsMutation();
  const [courseDetails, setCourseDetails] = useState("");
  console.log();
  useEffect(() => {
    const getCourseDetails = async () => {
      try {
        const result = await fetchCourseDetails(courseid);
        
        console.log("course details:  ", result);
        setCourseDetails(result?.data?.isCacheExist ? result?.data?.isCacheExist : result?.data?.course);
        console.log(courseDetails);
        
      } catch (error) {
        toast.error("something went wrong");
      }
    };
    getCourseDetails();
  }, [fetchCourseDetails]);
  return (
    <div>
      <CourseDetails course={courseDetails}/>
    </div>
  );
};

export default CoursePage;
