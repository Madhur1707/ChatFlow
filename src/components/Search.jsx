import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text"  placeholder="Find a user"/>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/19397660/pexels-photo-19397660/free-photo-of-reflection-of-a-brunette-woman-in-a-mirror.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
      <div className="userChatInfo">
        <span>Madhur</span>
      </div>
      </div>
    </div>
  );
};

export default Search;
