import React, { useEffect, useState } from "react";
import "../../globals.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useGetAllConversationMutation } from "../../../redux/features/conversation/conversationApi";
import { useRouter } from "next/navigation";
import { currentChatPartnerId } from "../../../redux/features/conversation/conversationSlice";

const MyConversations = ({ setNavigate }) => {
  const { user } = useSelector((state) => state.auth);
  const refresh = useSelector((state) => state.refreshSideBar);
  const dispatch = useDispatch();
  const router = useRouter();
  const { allConversations } = useSelector(
    (state) => state.conversation.allConversations
  );
  const [getAllConversation, { isSuccess, error }] =
    useGetAllConversationMutation();
  useEffect(() => {
    console.log(user);
    getAllConversation();
  }, [refresh]);
  return (
    <div className="bg-white dark:bg-slate-800 dark:text-white rounded-[20px] p-2 flex-1 shadow-md m-2">
    {allConversations &&
      allConversations.map((conversation, index) => {
        if (conversation.users.length === 1) {
          return <div key={index}></div>;
        }
  
        return (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition hover:bg-gray-200 dark:hover:bg-slate-600"
            onClick={() => {
              setNavigate("chat-area");
              dispatch(
                currentChatPartnerId(
                  `${conversation._id}&${
                    conversation.users[0]._id === user._id
                      ? conversation.users[1].username
                      : conversation.users[0].username
                  }`
                )
              );
            }}
          >
            {/* Avatar */}
            <Image
              src={
                conversation.users[0]._id === user._id
                  ? conversation.users[1].avatar
                  : conversation.users[0].avatar
              }
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full w-10 h-10 md:w-12 md:h-12"
            />
  
            {/* Conversation Info */}
            <div className="flex-1">
              <p className="text-black dark:text-white font-semibold text-sm md:text-base">
                {conversation.users[0]._id === user._id
                  ? conversation.users[1].username
                  : conversation.users[0].username}
              </p>
  
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 truncate w-full">
                {conversation.latestMessage
                  ? conversation.latestMessage.content
                  : "Click here to send a message"}
              </p>
            </div>
  
            {/* Timestamp */}
            <p className="text-xs text-gray-500 dark:text-gray-300">{conversation.timeStamp}</p>
          </div>
        );
      })}
  </div>
  
  );
};

export default MyConversations;
