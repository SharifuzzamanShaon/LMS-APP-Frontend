"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ThemeSwitcher from "../../utils/ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle, HiInformationCircle } from "react-icons/hi";
import { useSelector } from "react-redux";
import Image from "next/image";
import UserProfileMenu from "../ProfileShortcut/UserProfileMenu";
import { useRouter } from "next/navigation";

const AdminDashboardHeader = () => {
  const { user } = useSelector((state) => state.auth);
  const route = useRouter()
  const handleNav=()=>{
    route.push("/")
  }
  return (
    <div className="w-full relative">
      <div
        className={
          "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
        }
      >
        <div className="w-{95%} md:w-{92%} m-auto py-2 h-full">
          <div className="w-full h-[70%] flex items-center justify-between p-3">
            <div>
              <Link
                href={"/"}
                className={`text-[25px] font-Poppins font-500 text-black dark:text-white`}
              >
                SkillSage Admin
              </Link>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-300 dark:border-gray-700 cursor-pointer" onClick={handleNav}>
              <HiInformationCircle className="w-5 h-5" />
              <span className="text-sm font-normal">
                You are in admin view. Click to browse as user
              </span>
            </div>
            <div className="flex items-center">
              <ThemeSwitcher />
              <div className="block lg:hidden">
                <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer dark:text-white text-black"
                  onClick={() => setOpenSidebar(true)}
                />
              </div>
              <div className="hidden lg:block">
                {user ? (
                  <UserProfileMenu imgSrc={user.avatar} />
                ) : (
                  <HiOutlineUserCircle
                    size={25}
                    disableScrollLock={true}
                    className="cursor-pointer ml-5 dark:text-white text-black"
                    onClick={() => setOpen(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHeader;
