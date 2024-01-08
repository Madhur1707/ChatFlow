import React from "react";
import "../style.scss";
import Add from "../img/addImg.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"> ChatFlow</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input
            style={{ display: "none" }}
            type="file"
            placeholder="inputfile"
          />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an Account? Login</p>
      </div>
    </div>
  );
};

export default Register;
