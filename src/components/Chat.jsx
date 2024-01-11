import React from "react";
import vc from "../img/vc.png";
import addfriend from "../img/add friend.png";
import moreinfo from "../img/more info.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Madhur</span>
        <div className="chatIcons">
          <img src={vc} alt="" />
          <img src={addfriend} alt="" />
          <img src={moreinfo} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
