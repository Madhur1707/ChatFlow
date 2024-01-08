import React from "react";
import "../style.scss";

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
          <input type="file" placeholder="inputfile" />
          <button>Sign Up</button>
        </form>
        <p>You do have an Account? Login</p>
      </div>
    </div>
  );
};

export default Register;
