import React, {useContext}from "react";
import {FaUser,FaLock} from 'react-icons/fa'
import './style.css'
// import { useContext } from 'react';
import { LoginContext } from "../../context/LoginContext";


const Login = () => {
  const {setUserName,setShowProfile} =useContext(LoginContext)

  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" 
          placeholder="Username" 
          required 
         
          onChange={(e)=>{setUserName(e.target.value)}}/>
          <FaUser className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon"/>
        </div>
        <div className="remeber-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit" ><a href="ExpenseTracker"
        onClick={()=>{setShowProfile(true)}}>Login</a></button>
        <div className="register-link">
          <p>
            Don't have an account? <a href="/Register">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
