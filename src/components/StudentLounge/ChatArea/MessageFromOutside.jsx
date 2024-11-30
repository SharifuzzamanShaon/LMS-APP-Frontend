import React from "react";
import "../../../globals.css"

const MessageFromOutside = ({props}) => {
  return (
    <div className={"other-message-container"}>
      <div className={"conversation-container"}>
        <p className={"con-icon" }>
            {/* {props?.sender.username[0]} */}
            {Array.isArray(props?.sender.username) ? (props?.sender.username[0])  : (props?.sender.username)}
        </p>
        <div className={"other-text-content flex flex-col"}>
          {/* <p className={"con-title"}>{props.sender.name}</p> */}
          <p className="con-lastMessage font-bold  text-white">{props.content}</p>
          <p className="self-timeStamp">12:00am</p>
        </div>
      </div>
    </div>
  );
};

export default MessageFromOutside;
