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
  <div className="flex flex-col md:flex-row gap-4 w-full px-2">
    {/* Sidebar */}
    <div
      className={`w-full md:w-[30%] lg:w-[22%] xl:w-[310px] h-auto dark:bg-slate-900 bg-white dark:text-white shadow-sm bg-opacity-90 border dark:border-[#ffffff1d] rounded-[5px] mt-4 p-4`}
    >
      <MainLoungeNavigator setNavigate={setNavigate} />

      {/* Search Input */}
      <div className="flex items-center rounded-[20px] p-2 m-2 shadow-md">
        <IconButton>
          <BiSearch className="cursor-pointer dark:text-white text-black" />
        </IconButton>
        <input
          placeholder="Search"
          className="outline-none border-none ml-2 text-sm md:text-base text-gray-600 w-full bg-gray-100 dark:bg-slate-900 dark:text-white rounded-md shadow-md p-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Conversations - Only show on large screens */}
      <div className="hidden lg:block">
        <MyConversations setNavigate={setNavigate} />
      </div>
    </div>

    {/* Main Content */}
    <div
      className={`w-full md:w-[70%] lg:w-[75%] xl:w-[75%] h-auto dark:bg-slate-900 bg-white dark:text-white shadow-sm bg-opacity-90 border dark:border-[#ffffff1d] rounded-[5px] mt-4 sticky ${
        scroll ? "top-[120px]" : "top-[30px]"
      }`}
    >
      {navigate === 1 && <Welcome />}
      {navigate === 2 && <GetUser />}
      {navigate === 3 && <Groups />}
      {navigate === "chat-area" && <ChatArea />}
    </div>
  </div>
</>

  );
};

export default MainLounge;
