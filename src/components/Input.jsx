import React from "react";
import addimg from "../img/addImg.png";
import attachlogo from "../img/attach-logo-i.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Something..." />
      <div className="send">
      <img src={attachlogo} alt="" />
      <input type="file" style={{ display: "none" }} id="file" />
      <label htmlFor="file">
        <img src={addimg} alt="" />
      </label>
      <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
