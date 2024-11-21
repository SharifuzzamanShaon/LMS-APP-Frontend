"use client";
import Header from "@/components/Header";
import { useState } from "react";
import AdminSidebar from "@/components/Admin-components/AdminSidebar";
import AdminDashboardHeader from "@/components/Admin-components/AdminDashboardHeader";
import ProtectedAdmin from "@/hooks/adminProtect";

export default function RootLayout({ children }) {
  return (
    <div className="h-screen ">
      <ProtectedAdmin>
        <AdminDashboardHeader />
        <AdminSidebar>{children}</AdminSidebar>
      </ProtectedAdmin>
    </div>
  );
}
