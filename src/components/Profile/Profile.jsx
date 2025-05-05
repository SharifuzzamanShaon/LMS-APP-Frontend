"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SidebarProfile from "@/components/Profile/SidebarProfile";
import UserAccount from "./UserProfilePageOptions/UserAccount";
import EnrolledCourse from "./UserProfilePageOptions/EnrolledCourse";
import ChangePassword from "./UserProfilePageOptions/ChangePassword";
import { BsMenuButtonWide } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const Profile = () => {
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  // Scroll effect to change sticky offset
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4">
      {/* Collapse Toggle Button (Mobile Only) */}
      <div className="md:hidden flex justify-end mt-4">
        <button
          className="text-3xl text-blue-600 dark:text-white transition-transform duration-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Sidebar"
        >
          {open ? <RxCross1 /> : <BsMenuButtonWide />}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-5 mt-4">
        {/* Sidebar */}
        <div
          className={`
            fixed md:static top-0 left-0 z-50
            h-full md:h-auto
            w-[250px] md:w-[22%] 800px:w-[310px]
            bg-white dark:bg-slate-900 dark:text-white
            border dark:border-[#ffffff1d]
            shadow-md rounded-[5px]
            transform transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
            ${scroll ? "top-[120px]" : "top-[30px]"} md:top-auto
          `}
        >
          <SidebarProfile
            user={user}
            active={active}
            setActive={setActive}
            open={open}
            setOpen={setOpen}
          />
        </div>

        {/* Overlay for mobile */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
            onClick={() => setOpen(false)}
          ></div>
        )}

        {/* Main Content Area */}
        <div className="w-full md:w-[78%] bg-white dark:bg-slate-900 dark:text-white border dark:border-[#ffffff1d] rounded-[5px] shadow-sm p-4">
          {active === 1 && <UserAccount user={user} />}
          {active === 2 && <EnrolledCourse user={user} />}
          {active === 3 && <ChangePassword />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
