import React from "react";

const Message = () => {
  return (
    <div className="message">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/13136179/pexels-photo-13136179.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <img
          src="https://images.pexels.com/photos/868097/pexels-photo-868097.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          />
          <p>Hello</p>
      </div>
    </div>
  );
};

export default Message;
