"use client";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import MainLoungeNavigator from "./MainLoungeNavigator";
import Welcome from "./Welcome";
import GetUser from "./GetUser";
import Groups from "./Groups";
import { BiSearch, BiArrowBack } from "react-icons/bi";
import MyConversations from "./MyConversations";
import ChatArea from "./ChatArea/ChatArea";

const MainLounge = () => {
  const [navigate, setNavigate] = useState(1);
  const [scroll, setScroll] = useState(false);

  // Add scroll event listener
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full px-2 max-w-[1600px] mx-auto">
      {/* Sidebar */}
      <div
        className={`w-full md:w-[280px] lg:w-[300px] xl:w-[310px] h-auto dark:bg-slate-900 bg-white dark:text-white shadow-sm bg-opacity-90 border dark:border-[#ffffff1d] rounded-[5px] mt-4 p-4 ${
          navigate === "chat-area" ? "hidden md:block" : ""
        }`}
      >
        <MainLoungeNavigator setNavigate={setNavigate} />

        {/* Search Input */}
        <div className="flex items-center rounded-[20px] p-2 m-2 shadow-md">
          <IconButton size="small">
            <BiSearch className="cursor-pointer dark:text-white text-black" />
          </IconButton>
          <input
            placeholder="Search"
            className="outline-none border-none ml-2 text-sm w-full bg-gray-100 dark:bg-slate-900 dark:text-white rounded-md shadow-md p-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Conversations */}
        <div className="">
          <MyConversations setNavigate={setNavigate} />
        </div>
      </div>
      {/* Main Content */}
      <div
        className={`w-full md:flex-1 h-auto dark:bg-slate-900 bg-white dark:text-white shadow-sm bg-opacity-90 border dark:border-[#ffffff1d] rounded-[5px] mt-4 ${
          scroll ? "md:sticky md:top-[120px]" : "md:sticky md:top-[30px]"
        }`}
      >
        {/* Back Button - Only show in chat-area on mobile */}
        {navigate === "chat-area" && (
          <div className="md:hidden p-4">
            <IconButton
              onClick={() => setNavigate(1)}
              className="dark:text-white"
              size="small"
            >
              <BiArrowBack />
            </IconButton>
          </div>
        )}
        
        {navigate === 1 && <Welcome />}
        {navigate === 2 && <GetUser />}
        {navigate === 3 && <Groups />}
        {navigate === "chat-area" && <ChatArea />}
      </div>
    </div>
  );
};

export default MainLounge;
