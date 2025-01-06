"use client";
import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import { style } from "../../utils/styled/style";
import * as Yup from "yup";
import {
  Button,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import { useFormik } from "formik";
import { BiHide, BiShow } from "react-icons/bi";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import toast from "react-hot-toast";
import SocialAuthentication from "./SocialAuthentication";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import SpeedLogin from "./SpeedLogin";

const Schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email")
    .required("Please Enter your email"),
  password: Yup.string().required("Please Enter your password").min(6),
});

const LoginModule = ({ setRoute, setOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isSuccess, data, error, isLoading }] = useLoginMutation();
  let loadingToaster;
  const userInfo = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      loadingToaster = toast.loading("Logging in...");
    }
    if (isSuccess) {
      toast.dismiss(loadingToaster);
      toast.success(data.message || "Login Successful");
      setOpen(false);
    }
    if (error) {
      toast.dismiss(loadingToaster);
      toast.error(error.data?.message || "Something went wrong, Please try again");
    }
  }, [isLoading, isSuccess, error, userInfo]);

  useEffect(() => {
    if (isSuccess && userInfo?.user?.role === "admin") {
      router.push("/admin-dashboard");
    }
  }, [isSuccess, userInfo]);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Schema,
    onSubmit: async (loginInfo) => {
      const { email, password } = loginInfo;
      await login({ email, password });
    },
  });

  const { errors, touched, values, handleChange, handleSubmit, setValues } =
    formik;


  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-4 max-w-md mx-auto font-Poppins"
      >
        <FormControl fullWidth variant="outlined">
          <InputLabel
            htmlFor="email"
            className={`${errors.email && touched.email && "text-red-600"} ${
              style.title
            }`}
          >
            Email address
          </InputLabel>
          <Input
            type="email"
            className="dark:text-white text-black"
            id="email"
            value={values.email}
            onChange={handleChange}
            aria-describedby="email-helper-text"
            required
          />
          <FormHelperText
            id="email-helper-text"
            className="dark:text-white text-black"
          >
            {errors.email && touched.email ? (
              <span className="text-red-600">{errors.email}</span>
            ) : (
              <span>Valid Email</span>
            )}
          </FormHelperText>
        </FormControl>
        <div>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="password" className="dark:text-white text-black">
              Password
            </InputLabel>
            <Input
              type={showPassword ? "text" : "password"}
              className="dark:text-white text-black relative"
              id="password"
              value={values.password}
              onChange={handleChange}
              aria-describedby="password-helper-text"
              required
            />
            {showPassword ? (
              <BiShow
                size={22}
                className="absolute bottom-[42px] right-2 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <BiHide
                size={22}
                className="absolute bottom-[42px] right-2"
                onClick={() => setShowPassword(true)}
              />
            )}
            <FormHelperText
              id="password-helper-text"
              className="dark:text-white text-black"
            >
              <div className="flex flex-col">
                {errors.password && touched.password ? (
                  <span className="text-red-600">{errors.password}</span>
                ) : (
                  <span>Minimum 6 characters</span>
                )}
              </div>
            </FormHelperText>
          </FormControl>
        </div>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
        <SpeedLogin setValues={setValues}/>
        <SocialAuthentication setOpen={setOpen} />
        <p className="dark:text-white text-black">
          Don't have an account?{" "}
          <span
            className="hyper cursor-pointer text-blue-800 dark:border-b-slate-100 border-b border-blue-800"
            onClick={() => setRoute("signUp")}
          >
            Sign-up
          </span>
        </p>
      </form>
    </>
  );
};

export default LoginModule;
