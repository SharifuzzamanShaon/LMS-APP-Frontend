import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Box,
  Typography,
} from "@mui/material";

const Schema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Phone number must be between 10 and 15 digits")
    .required("Phone number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    validationSchema: Schema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        console.log("Form data submitted:", values);
        alert("Registration Successful");
      } catch (error) {
        console.error("Error during submission:", error);
        alert("An unexpected error occurred. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="max-w-3xl w-full p-6 bg-white rounded-lg shadow-lg"
      >
        <Typography variant="h5" mb={3} align="center">
          Registration
        </Typography>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <FormControl fullWidth variant="outlined" className="mb-4">
              <InputLabel htmlFor="fullName">Full Name</InputLabel>
              <Input
                id="fullName"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
              />
              <FormHelperText>
                {errors.fullName && touched.fullName ? (
                  <span className="text-red-500">{errors.fullName}</span>
                ) : (
                  "Enter your full name"
                )}
              </FormHelperText>
            </FormControl>
          </div>

          {/* Email */}
          <div>
            <FormControl fullWidth variant="outlined" className="mb-4">
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
              />
              <FormHelperText>
                {errors.email && touched.email ? (
                  <span className="text-red-500">{errors.email}</span>
                ) : (
                  "Enter a valid email address"
                )}
              </FormHelperText>
            </FormControl>
          </div>

          {/* Phone Number */}
          <div>
            <FormControl fullWidth variant="outlined" className="mb-4">
              <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                value={values.phoneNumber}
                onChange={handleChange}
              />
              <FormHelperText>
                {errors.phoneNumber && touched.phoneNumber ? (
                  <span className="text-red-500">{errors.phoneNumber}</span>
                ) : (
                  "Enter your phone number"
                )}
              </FormHelperText>
            </FormControl>
          </div>

          {/* Password */}
          <div>
            <FormControl fullWidth variant="outlined" className="mb-4">
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
              />
              <FormHelperText>
                {errors.password && touched.password ? (
                  <span className="text-red-500">{errors.password}</span>
                ) : (
                  "Enter a strong password"
                )}
              </FormHelperText>
            </FormControl>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="mt-8"
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Registration;
