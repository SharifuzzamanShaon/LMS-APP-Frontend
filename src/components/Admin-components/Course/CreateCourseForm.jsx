"use client";
import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { ErrorMessage, Field, FieldArray, useFormik } from "formik";
import { FiDelete } from "react-icons/fi";
import GetCourseTags from "./GetCourseTags";
import CourseDescription from "./CourseDescription/CourseDescription";
import CourseDataModule from "./courseData/CourseDataModule";
import { useDispatch, useSelector } from "react-redux";
import { setCourseInfo } from "../../../../redux/features/admin/createCourseSlice";
import { useCreateNewCourseMutation } from "../../../../redux/features/admin/courseApi";
import toast from "react-hot-toast";
import CourseThumbnail from "./courseData/CourseThumbnail";

const Schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  thumbnail: Yup.string().required("Thumbnail is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .min(0, "Price must be a positive number")
    .required("Price is required"),
  estimatedPrice: Yup.number().min(
    0,
    "Estimated price must be a positive number"
  ),
  tags: Yup.array().of(Yup.string()).required("At least one tag is required"),
  level: Yup.string().required("Course level is required"),
  demoUrl: Yup.string().url("Must be a valid URL"),
  benefits: Yup.array()
    .of(
      Yup.object().shape({
        title: Yup.string()
          .min(5, "Benefit must be at least 5 characters")
          .required("Benefit is required"),
      })
    )
    .required("At least one benefit is required"),
});

let loadingToaster;

const CreateCourseForm = () => {
  const [benefits, setBenefits] = useState([]);
  const [tags, setTags] = useState([]);
  const [level, setLevel] = useState("");
  const dispatch = useDispatch();
  const handleAddInput = () => {
    if (benefits.length <= 5) {
      setBenefits([...benefits, { title: "" }]);
    }
  };
  const handleRemoveInput = (id) => {
    setBenefits(benefits.filter((benefit) => benefit.id !== id));
  };
  const [createNewCourse, { isSuccess, data, error, isLoading }] =
    useCreateNewCourseMutation();
  useEffect(() => {
    if (isLoading) {
      loadingToaster = toast.loading("Uploading the course");
    }
    if (isSuccess) {
      toast.dismiss(loadingToaster);
      toast.success("course created successfully");
    }
    if (error) {
      toast.dismiss(loadingToaster);
      console.log(error);
      toast.error(error.message);
    }
  }, [isLoading, isSuccess, error]);
  const newCourseData = useSelector((state) => state.createCourseData);
  const formik = useFormik({
    initialValues: {
      name: "",
      thumbnail: "",
      description: "this is all about the course",
      price: 0,
      estimatedPrice: 0,
      tags: [],
      level: "",
      demoUrl: "",
      benefits: [],
    },
    validationSchema: Schema,
    onSubmit: async (data, { setSubmitting, setErrors }) => {
      try {
        console.log("Form data submitted:", data);
        dispatch(setCourseInfo(data)); // Replace with your actual dispatch call
      } catch (error) {
        console.error("Error during submission:", error);

        // Handle error from the server, assuming error.response contains validation feedback
        if (error.response?.data?.errors) {
          const formErrors = error.response.data.errors;
          setErrors(formErrors); // `formErrors` should map to form field names
        } else {
          alert("An unexpected error occurred. Please try again.");
        }
      } finally {
        setSubmitting(false); // Reset submission state
      }
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  const handleUploadCourse = async () => {
    formik.setFieldValue("benefits", benefits);
    console.log("Course Data:", formik.values);
    try {
      // Proceed with course creation logic
      // await createNewCourse(formik.values);
      toast.success("Course uploaded successfully!");
    } catch (error) {
      console.error("Error uploading course:", error);
      toast.error("An error occurred while uploading the course.");
    }
  };
  return (
    <>
      <FormControl>
        <CourseThumbnail formik={formik} values={values} />
      </FormControl>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 p-4 max-w-4xl mx-auto font-Poppins grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Course Name Input */}
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="name" className="dark:text-white text-black">
              Course Name
            </InputLabel>
            <Input
              type="text"
              className="dark:text-white text-black"
              id="name"
              value={values.name}
              onChange={handleChange}
              aria-describedby="name-helper-text"
            />
            <FormHelperText
              id="name-helper-text"
              className="dark:text-white text-black"
            >
              {errors.name && touched.name ? (
                <span className="text-red-600">{errors.name}</span>
              ) : (
                <span>Enter course name</span>
              )}
            </FormHelperText>
          </FormControl>

          {/* Course Description Input */}
          <FormControl>{/* <CourseDescription /> */}</FormControl>
          {/* Price Input */}
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="price" className="dark:text-white text-black">
              Price
            </InputLabel>
            <Input
              type="number"
              className="dark:text-white text-black"
              id="price"
              value={values.price}
              onChange={handleChange}
              aria-describedby="price-helper-text"
            />
            <FormHelperText
              id="price-helper-text"
              className="dark:text-white text-black"
            >
              {errors.price && touched.price ? (
                <span className="text-red-600">{errors.price}</span>
              ) : (
                <span>Enter the price of the course</span>
              )}
            </FormHelperText>
          </FormControl>

          {/* Tags Input */}
          <FormControl>
            <GetCourseTags formik={formik} values={values}></GetCourseTags>
          </FormControl>
          {/* Level Input */}
          <FormControl fullWidth variant="outlined">
            <InputLabel id="demo-simple-select-label">Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={level}
              label="This course is for _"
              onChange={(e) => formik.setFieldValue("level", e.target.value)}
              placeholder="Select level"
            >
              <MenuItem value={"beginner"}>Beginner</MenuItem>
              <MenuItem value={"intermediate"}>Intermediate</MenuItem>
              <MenuItem value={"advance"}>Advance</MenuItem>
            </Select>
          </FormControl>

          {/* Demo URL Input */}
          <FormControl fullWidth variant="outlined">
            <InputLabel
              htmlFor="demoUrl"
              className="dark:text-white text-black mb-4"
            >
              Demo URL
            </InputLabel>
            <Input
              type="url"
              className="dark:text-white text-black"
              id="demoUrl"
              value={values.demoUrl}
              onChange={handleChange}
              aria-describedby="demoUrl-helper-text"
              // required
            />
            <FormHelperText id="demoUrl" className="dark:text-white text-black">
              {errors.demoUrl && touched.demoUrl ? (
                <span className="text-red-600">{errors.demoUrl}</span>
              ) : (
                <span>Provide a URL for course demo</span>
              )}
            </FormHelperText>
          </FormControl>
        </div>
        <Button type="submit" variant="contained" color="primary" size="medium">
          Save
        </Button>
      </form>
      <hr></hr>
      <div className="flex flex-col items-center my-4">
        {/* Benefits Input */}
        <FormControl>
          <p className="mb-4 text-lg text-gray-700 dark:text-white">
            Benefits of this course
          </p>
          {benefits.map((input, index) => (
            <div key={input.id} className="flex items-center space-x-4 mb-4">
              <Input
                key={index}
                type="text"
                className="dark:text-white text-black w-full  shadow-sm focus:ring  p-2"
                value={input.value}
                minLength={5}
                maxLength={20}
                id="benefits"
                placeholder="Enter at least 20 characters"
                onChange={(e) => {
                  const newBenefits = [...benefits];
                  newBenefits[index].value = e.target.value;
                  setBenefits(newBenefits);
                }}
              />
              <button
                onClick={() => handleRemoveInput(input.id)}
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700 focus:outline-none"
              >
                <FiDelete />
              </button>
            </div>
          ))}
          <Button
            className="mt-2 text-black dark:text-white"
            onClick={handleAddInput}
            variant="contained"
            disabled={benefits.length >= 5}
            size="sm"
          >
            Add Benefit
          </Button>
        </FormControl>
      </div>

      <hr></hr>
      <div className="flex flex-col items-center justify-center my-3">
        <CourseDataModule></CourseDataModule>
      </div>
      <Button onClick={handleUploadCourse}>Upload Now</Button>
    </>
  );
};
export default CreateCourseForm;
