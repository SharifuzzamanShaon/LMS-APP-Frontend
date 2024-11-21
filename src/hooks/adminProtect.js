'use client'
import adminAuth from "./adminAuth";
import { redirect } from "next/navigation";

const ProtectedAdmin = ({ children }) => {
  const isAuthenticated = adminAuth();
  
  return isAuthenticated ? children : redirect("/");
};

export default ProtectedAdmin;

