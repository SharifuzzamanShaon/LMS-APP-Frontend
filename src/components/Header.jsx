"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavItems from "../utils/NavItems";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle, HiInformationCircle } from "react-icons/hi";
import CustomModal from "../utils/CustomModal";
import { useSelector } from "react-redux";
import Image from "next/image";
import UserProfileMenu from "./ProfileShortcut/UserProfileMenu";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

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
            className="fixed w-full h-screen top-0 left-0 z-[99999 dark:bg-[unset] bg-[#00000024]"
            onClick={handleClose}
            id="screen"
          >
            <div className="w-[70%] fixed z-[9999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0 mt-4">
              <div className="flex items-center justify-between px-5 pt-5">
                <Link
                  href={"/"}
                  className={`text-[20px] font-Poppins font-500 text-black dark:text-white`}
                >
                  Skill-Sage
                </Link>
                <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer dark:text-white text-black"
                  onClick={() => setOpenSidebar(false)}
                />
              </div>
              <NavItems activeItem={activeItem} isMobile={true} />

              <div>
                {user ? (
                  <Image
                    src={user.avatar}
                    alt=""
                    width={30}
                    height={30}
                    className="object-cover"
                  />
                ) : (
                  <HiOutlineUserCircle
                    size={25}
                    className="cursor-pointer ml-5 dark:text-white text-black"
                    onClick={() => setOpen(true)}
                  />
                )}
              </div>
              <br />
              <br />
              <br />
              <p className="text-[16px] px-2 pl-5 dark:text-white text-black">
                Copyright 2025{" "}
              </p>
            </div>
          </div>
        )}
      </div>
      <>{open && <CustomModal open={open} setOpen={setOpen}></CustomModal>}</>
    </div>
  );
};

export default Header;
