import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo"> ChatFlow</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/13136179/pexels-photo-13136179.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <span>Madhur</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
