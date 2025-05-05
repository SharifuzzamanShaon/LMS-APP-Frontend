"use client";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import NavItems from "../utils/NavItems";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle, HiInformationCircle } from "react-icons/hi";
import CustomModal from "../utils/CustomModal";
import { useSelector } from "react-redux";
import Image from "next/image";
import UserProfileMenu from "./ProfileShortcut/UserProfileMenu";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { RxCross1 } from "react-icons/rx";

const Header = ({ open, activeItem, setOpen }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user } = useSelector((state) => state.auth);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }
  console.log(user);
  
  const handleClose = (e) => {
    if (e.target.id === "screen") {
      setOpenSidebar(false);
    }
  };
  const router = useRouter();
  const handleNav = () => {
    router.push("/admin-dashboard");
  };
  const navigateToProfile = () => {
    router.push("/profile");
  };
  return (
    <div className="w-full relative">
      <div
        className={`${
          active
            ? "bg-white dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[65px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-600"
            : "w-full border-b dark:border-[#ffffff1c] h-[70px] z-[80] dark:shadow"
        }`}
      >
        <div className="w-{95%} md:w-{92%} m-auto py-2 h-full">
          <div className="w-full h-[70%] flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-4">
              <Link
                href={"/"}
                className={`text-[20px] font-Poppins font-500 text-black dark:text-white`}
              >
                <Image src="/image/site-logo.png" width={100} height={100}  alt="Skill-Sage"/>
              </Link>
              {user?.role === "admin" && (
                <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-300 dark:border-gray-700 cursor-pointer" onClick={handleNav}>
                  <HiInformationCircle className="w-5 h-5" />
                  <span className="text-sm font-normal">
                    You are in User view | Click to browse as Admin
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center">
              {
                user.role === "admin" ? <Link href={"/admin-dashboard"}><Button>Dashboard</Button></Link> : null
              }
              <NavItems activeItem={activeItem} />
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
        {openSidebar && (
          <div
      className="fixed inset-0 z-[9999] bg-black bg-opacity-20 dark:bg-opacity-0"
      onClick={handleClose}
      id="screen"
    >
      <div
        className="fixed right-0 top-0 h-full w-[70%] z-[10000] bg-white dark:bg-slate-900 dark:bg-opacity-90 shadow-lg"
        onClick={(e) => e.stopPropagation()} // prevent closing on inner click
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 border-b dark:border-[#ffffff1d] pb-5">
          <Link
            href="/"
            className="text-[20px] font-semibold font-Poppins text-black dark:text-white"
          >
            Skill-Sage
          </Link>
          <RxCross1
            size={25}
            className="cursor-pointer text-black dark:text-white"
            onClick={() => setOpenSidebar(false)}
          />

        </div>

        {/* Navigation Items */}
        <NavItems activeItem={activeItem} isMobile={true} />

        {/* Footer / Theme & User */}
        <div className="flex items-center justify-between px-5 pt-5">
          {user ? (
            <button className="flex items-center gap-2 " onClick={ navigateToProfile}>
            <Image
              src={user.avatar}
              alt="User"
              width={30}
              height={30}
              className="rounded-full object-cover cursor-pointer"
              />
              <div>
                <p className="text-[14px] text-gray-500 dark:text-gray-400">
                  {user.username}
                </p>
              </div>
              </  button>
          ) : (
            <HiOutlineUserCircle
              size={25}
              className="cursor-pointer text-black dark:text-white ml-5"
              onClick={() => setOpen(true)}
            />
          )}
        </div>

        {/* Copyright */}
        <div className="mt-10 px-5">
          <p className="text-[16px] text-black dark:text-white">
            © 2025 Skill-Sage
          </p>
        </div>
      </div>
    </div>
        )}
      </div>
      <>{open && <CustomModal open={open} setOpen={setOpen}></CustomModal>}</>
    </div>
  );
};

export default Header;
