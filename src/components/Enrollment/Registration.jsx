import React, { useEffect, useReducer, useState } from "react";
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
import { useSelector } from "react-redux";
import { useLoginMutation, useRegisterMutation } from "../../../redux/features/auth/authApi";
import toast from "react-hot-toast";
import VerifyModalForEnroll from "@/utils/VerifyModalForEnroll";

const Schema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  username: Yup.string().required("Username is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Phone number must be between 10 and 15 digits")
    .required("Phone number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Registration = ({ isVerified, setIsVerified }) => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [register, { isError, data, error, isSuccess, isLoading }] =
    useRegisterMutation();
  const [
    login,
    { isSuccess: loginSccess, error: loginError, isLoading: loginiForLogin },
  ] = useLoginMutation();
  let loadingToast;
  useEffect(() => {
    if (isLoading) {
      loadingToast = toast.loading("Signing up...");
    }
    if (isSuccess) {
      toast.dismiss(loadingToast);
      const msg =
        data?.message ||
        "Registration Successful | Please Verify your Email via OTP";
      toast.success(msg);
      setOpen(true);
    }
    if (error) {
      toast.dismiss(loadingToast);
      if ("data" in error) {
        const errData = error;
        toast.error(errData?.data.message);
      } else {
        toast.error("Something went wrong, try again");
      }
    }
  }, [isLoading, isSuccess, error]);

  useEffect(() => {
    handleLogin()
  }, [isVerified]);
  const handleLogin = async () => {
    console.log(values)   
    const {email, password} = values 
    await login({email, password});
  };
  const formik = useFormik({
    initialValues: {
      fullName: "yilex84643@chansd.com",
      email: user?.email ? user.email : "yilex84643@chansd.com",
      username: user?.username ? user.username : "yilex84643@chansd.com",
      phoneNumber: "12345678999",
      password: user ? "*******" : "12341234",
    },
    validationSchema: Schema,
    onSubmit: async (values, { setSubmitting }) => {
      const { email, username, password } = values;
      try {
        const regValue = { email, username, password };
        console.log(":::", regValue);
        await register(regValue);
        console.log("Form data submitted:", values);
      } catch (error) {
        console.error("Error during submission:", error);
        alert("An unexpected error occurred. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });
  const { errors, touched, values, handleChange, handleSubmit, resetForm } =
    formik;
  useEffect(() => {
    if (isVerified) {
      resetForm();
    }
  }, [isVerified, resetForm]);

  return (
    <div className="dark:bg-gray-900 min-[600v] flex items-center justify-center p-4">
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="max-w-3xl w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
      >
        <Typography
          variant="h5"
          align="center"
          className="text-gray-900 dark:text-gray-100 mb-6"
        >
          Registration
        </Typography>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <FormControl fullWidth variant="outlined" className="mb-4">
              <InputLabel htmlFor="fullName" className="dark:text-gray-400">
                Full Name
              </InputLabel>
              <Input
                id="fullName"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                className="dark:text-gray-100"
              />
              <FormHelperText>
                {errors.fullName && touched.fullName ? (
                  <span className="text-red-500">{errors.fullName}</span>
                ) : (
                  <span className="dark:text-gray-400">
                    Enter your full name
                  </span>
                )}
              </FormHelperText>
            </FormControl>
          </div>

          {/* Email */}
          <div>
            <FormControl
              disabled={user}
              fullWidth
              variant="outlined"
              className="mb-4"
            >
              <InputLabel htmlFor="email" className="dark:text-gray-400">
                Email
              </InputLabel>
              <Input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                className="dark:text-gray-100"
              />
              <FormHelperText>
                {errors.email && touched.email ? (
                  <span className="text-red-500">{errors.email}</span>
                ) : (
                  <span className="dark:text-gray-400">
                    Enter a valid email address
                  </span>
                )}
              </FormHelperText>
            </FormControl>
          </div>
          {/* username */}
          <div>
            <FormControl
              disabled={user}
              fullWidth
              variant="outlined"
              className="mb-4"
            >
              <InputLabel htmlFor="username" className="dark:text-gray-400">
                username
              </InputLabel>
              <Input
                id="username"
                name="username"
                type="text"
                value={values.username}
                onChange={handleChange}
                className="dark:text-gray-100"
              />
              <FormHelperText>
                {errors.username && touched.username ? (
                  <span className="text-red-500">{errors.username}</span>
                ) : (
                  <span className="dark:text-gray-400">Enter a username</span>
                )}
              </FormHelperText>
            </FormControl>
          </div>
          {/* Phone Number */}
          <div>
            <FormControl fullWidth variant="outlined" className="mb-4">
              <InputLabel htmlFor="phoneNumber" className="dark:text-gray-400">
                Phone Number
              </InputLabel>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                value={values.phoneNumber}
                onChange={handleChange}
                className="dark:text-gray-100"
              />
              <FormHelperText>
                {errors.phoneNumber && touched.phoneNumber ? (
                  <span className="text-red-500">{errors.phoneNumber}</span>
                ) : (
                  <span className="dark:text-gray-400">
                    Enter your phone number
                  </span>
                )}
              </FormHelperText>
            </FormControl>
          </div>

          {/* Password */}
          <div>
            <FormControl
              disabled={user}
              fullWidth
              variant="outlined"
              className="mb-4"
            >
              <InputLabel htmlFor="password" className="dark:text-gray-400">
                Password
              </InputLabel>
              <Input
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                className="dark:text-gray-100"
              />
              <FormHelperText>
                {errors.password && touched.password ? (
                  <span className="text-red-500">{errors.password}</span>
                ) : (
                  <span className="dark:text-gray-400">
                    Enter a strong password
                  </span>
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
          className="mt-12 dark:bg-blue-600 dark:text-white"
        >
          Submit
        </Button>
      </Box>
      {open && (
        <VerifyModalForEnroll
          open={open}
          setOpen={setOpen}
          setIsVerified={setIsVerified}
        />
      )}
    </div>
  );
};

export default Registration;
