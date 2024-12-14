"use client";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import MainLoungeNavigator from "./MainLoungeNavigator";
import Welcome from "./Welcome";
import GetUser from "./GetUser";
import Groups from "./Groups";
import { BiSearch } from "react-icons/bi";
import MyConversations from "./MyConversations";
import ChatArea from "./ChatArea/ChatArea";
const MainLounge = () => {
  const [navigate, setNavigate] = useState(1);
  return (
    <>
      <div
        className={`w-full md:w-[30%] lg:w-[22%] xl:w-[310px] h-auto dark:bg-slate-900 bg-white dark:text-white shadow-sm dark:shadow-sm bg-opacity-90 border dark:border-[#ffffff1d] rounded-[5px] mt-[30px] mb-[30px] p-4`}
      >
        <MainLoungeNavigator setNavigate={setNavigate} />
        <div className="flex items-center rounded-[20px] p-2 m-2 shadow-[rgba(50, 50, 93, 0.25)_0px_6px_12px_-2px,rgba(0, 0, 0, 0.3)_0px_3px_7px_-3px]">
          <IconButton>
            <BiSearch className="cursor-pointer dark:text-white text-black" />
          </IconButton>
          <input
            placeholder="Search"
            className="outline-none border-none ml-2 text-sm md:text-lg text-gray-600 w-full bg-gray-100 dark:bg-slate-900 dark:text-white rounded-md shadow-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="hidden lg:block">
        <MyConversations setNavigate={setNavigate} />
        </div>
      </div>

      <div
        className={`w-full md:w-[70%] lg:w-[75%] xl:w-[75%] h-auto dark:bg-slate-900 bg-white dark:text-white shadow-sm dark:shadow-sm bg-opacity-90 border dark:border-[#ffffff1d] rounded-[5px] mt-[30px] mb-[30px] sticky ${
          scroll ? "top-[120px]" : "top-[30px]"
        }`}
      >
        {navigate === 1 && <Welcome />}
        {navigate === 2 && <GetUser />}
        {navigate === 3 && <Groups />}
        {navigate === "chat-area" && <ChatArea />}
      </div>
    </>
  );
};

export default MainLounge;
