"use client";
import { apiSlice } from "../api/apiSlice";

export const adminDashboardApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardInfo: builder.query({
            query:()=>({
                url: "/admin/dashboard",
                credentials: "include",
                method: "GET",
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const res = await queryFulfilled;
                    console.log(res);
                    // dispatch(setDashboardInfo(res.data));
                    return res;
                } catch (error) {
                    console.log(error);
                }   
            }
        }),
        getStudentList: builder.query({
            query:()=>({
                url: "/admin/students",
                credentials: "include",
                method: "GET",
            }),
        }),
        getCourseList: builder.query({
            query:()=>({
                url: "/admin/courses",
                credentials: "include",
                method: "GET",
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const res = await queryFulfilled;
                    return res?.data?.courses;
                } catch (error) {
                    console.log(error);
                }
            }
        }),
        editCourse: builder.mutation({
            query:({id, data})=>({
                url: `/admin/courses/${id}`,
                credentials: "include",
                method: "PUT",
            }),
        }),
        getCourseById: builder.query({
            query:({id})=>({
                url: `/admin/courses/${id}`,
                credentials: "include",
                method: "GET",
            }),
        })
    })
})
export const {  useGetDashboardInfoQuery, useGetStudentListQuery, useGetCourseListQuery, useEditCourseMutation, useGetCourseByIdQuery } = adminDashboardApi;