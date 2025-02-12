import React from "react";
import "../../../globals.css";

const MessageFromOutside = ({ props }) => {
  console.log(props);
  const { createdAt, content, sender } = props;
  let date = new Date(createdAt);
  return (
    <div className={"other-message-container"}>
      <div className={"conversation-container"}>
        <p className={"con-icon"}>
          {/* {props?.sender.username[0]} */}
          {Array.isArray(sender.username)
            ? sender.username[0]
            : sender.username}
        </p>
        <div className={"other-text-content flex flex-col"}>
          {/* <p className={"con-title"}>{props.sender.name}</p> */}
          <p className="con-lastMessage font-bold  text-white">{content}</p>
            <p className="self-timeStamp">{date.toLocaleTimeString()}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageFromOutside;
