"use client";
import { useSelector } from "react-redux";

const adminAuth = () => {
  const { user } = useSelector((state) => state.auth);

  if (user.role === "admin") {
    return true;
  } else {
    return false;
  }
};
export default adminAuth;