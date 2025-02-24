"use client";
import { apiSlice } from "../api/apiSlice";
import { setDetails } from "./courseSlice";
export const userCourseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllCourse: builder.mutation({
      query: () => ({
        url: "/course/view-all-course",
        method: "GET",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          return res;
        } catch (error) {
          console.log(error);
        }
      },
    }),
    fetchCourseDetails: builder.mutation({
      query: (courseId) => ({
        url: `/course/get-course/${courseId}`,
        method: "GET",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;
          console.log(response);
          dispatch(setDetails(response?.data))
          return response;
        } catch (error) {
          console.log(error);
        }
      },
    }),
    seachCourse: builder.mutation({
      query: (keyword)=>({
        url:`/course/search?keyword=${keyword}`,
        method:"GET"
      }),
      async onQueryStarted(arg, {queryFulfilled, dispatch}){
        try {
          const response = await queryFulfilled
          return response
        } catch (error) {
          console.log(error);
        }
      }
    })
  }),
  // enrolledCourses: builder.mutation({
  //   query: (userId) => ({
  //     url: "/course/enrolled-courses",
  //     method: "GET",
  //   }),
  //   async onQueryStarted(arg, { queryFulfilled, dispatch }) {
  //     try {
  //       const response = await queryFulfilled;
  //       return response;
  //     } catch (error) {
  //       console.log(error); 
  //     }
  //   }
  // }),
});
export const { useFetchAllCourseMutation, useFetchCourseDetailsMutation, useSeachCourseMutation } =
  userCourseApi;
