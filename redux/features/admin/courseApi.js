"use client";
import { apiSlice } from "../api/apiSlice";
export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createNewCourse: builder.mutation({
      query: (data) => ({
        url: "/course/create",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          console.log("Res about the course", res);
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useCreateNewCourseMutation } = courseApi;
