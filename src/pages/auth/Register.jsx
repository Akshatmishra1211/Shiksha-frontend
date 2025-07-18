import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";

const Register = () => {
  const navigate = useNavigate();            // use to navigate between diff pages
  const { btnLoading, registerUser } = UserData();
  const [email, setEmail] = useState("");       // predefined function for setting email,password etc
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submitHandler = async (e) => {                 // to submit the form details 
    e.preventDefault();                         // prevent browser from reloading so that data dont get lost
    await registerUser(name, email, password, navigate);
  };
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Register</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={btnLoading} className="common-btn">
            {btnLoading ? "Please Wait..." : "Register"}      {/* if button is loading then print please wait else print register */}
          </button>
        </form>
        <p>
          have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
