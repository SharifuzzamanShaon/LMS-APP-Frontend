"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  price: 0,
  estimatedPrice: 0,
  tags: [],
  level: "",
  demoUrl: "",
  benefits: [],
  courseData: [
    
  ],
};

const createCourseSlice = createSlice({
  name: "createCourseSlice",
  initialState,
  reducers: {
    setCourseInfo: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setCousreData: (state, action) => {
      state.courseData.push(action.payload); // Immer handles the immutable update
    },
    
  },
});

export const { setCourseInfo, setCousreData } = createCourseSlice.actions;
export default createCourseSlice.reducer;
