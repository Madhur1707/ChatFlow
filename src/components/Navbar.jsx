import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo"> Chat Flow</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/19397660/pexels-photo-19397660/free-photo-of-reflection-of-a-brunette-woman-in-a-mirror.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <span>Madhur</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
