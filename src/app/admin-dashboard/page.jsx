"use client";
import React, { useEffect, useState } from "react";
import QuickInfoCard from "@/components/Admin-components/DashboardWidget/ChildComponents/QuickCardInfo";
import ChartSection from "@/components/Admin-components/DashboardWidget/ChildComponents/Chart";
import OrderListTable from "@/components/Admin-components/DashboardWidget/ChildComponents/OrderListTable";
import { useGetDashboardInfoQuery } from "../../../redux/features/admin/dashboardApi";

const page = () => {
  const [dashboardInfo, setDashboardInfo] = useState(null);
  const { data, isLoading, error, isSuccess } = useGetDashboardInfoQuery();
  const statCards = [
    {
      title: "Online Course Avaliable ",
      value: dashboardInfo?.publishedCourse,
      percentage: 45,
      color: "bg-black dark:bg-gray-800 text-white",
      navigateTo: "/admin-dashboard/courses",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "Total Enrolled Students",
      value: dashboardInfo?.totalEnrollement,
      percentage: 62,
      color: "bg-blue-500 dark:bg-blue-600 text-white",
      navigateTo: "/admin-dashboard/students",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
    {
      title: "Total Users",
      value: dashboardInfo?.totalUser,
      percentage: 80,
      color: "bg-green-500 dark:bg-green-600 text-white",
      navigateTo: "/admin-dashboard/users",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Total Revenue",
      value: dashboardInfo?.totalRevenue,
      percentage: 85,
      color: "bg-purple-500 dark:bg-purple-600 text-white",
      navigateTo: "/admin-dashboard/revenue",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const timeButtons = [
    { label: "Monthly", active: true },
    { label: "Weekly", active: false },
    { label: "Today", active: false },
  ];

  useEffect(() => {
    if (isSuccess) {
      setDashboardInfo(data);
    }
    if (error) {
      console.log(error);
    }
  }, [dashboardInfo, isSuccess, error]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full px-2 sm:px-4 py-4 sm:py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-4 sm:mb-8">
          {statCards.map((card, index) => (
            <QuickInfoCard key={index} {...card} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-8">
          <ChartSection title="Revenue" buttons={timeButtons} />
          <ChartSection title="Orders Summary" buttons={timeButtons} />
        </div>

        {/* Order List Table */}
        <div className="max-w-full">
          <OrderListTable timeButtons={timeButtons} />
        </div>
      </div>
    </div>
  );
};

export default page;
