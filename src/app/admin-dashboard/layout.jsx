"use client";
import Header from "@/components/Header";
import { useState } from "react";
import AdminSidebar from "@/components/Admin-components/AdminSidebar";
import AdminDashboardHeader from "@/components/Admin-components/AdminDashboardHeader";
import ProtectedAdmin from "@/hooks/adminProtect";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <ProtectedAdmin>
        <AdminDashboardHeader />
        <AdminSidebar>{children}</AdminSidebar>
      </ProtectedAdmin>
    </div>
  );
}
