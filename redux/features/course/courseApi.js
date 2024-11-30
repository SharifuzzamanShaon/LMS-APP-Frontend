"use client";
import { apiSlice } from "../api/apiSlice";
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
          
          return response;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
export const { useFetchAllCourseMutation, useFetchCourseDetailsMutation } =
  userCourseApi;
