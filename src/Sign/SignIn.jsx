import React, { useState } from 'react';
import SignHOC from './SignHOC';
import { Link } from 'react-router-dom';

function SignIn(props) {
  return (
    <div className="signin-container" style={props.design}>
      <h1>Sign in</h1>
      <div className="input-group">
        <input
          type="email"
          id="email"
          placeholder="Enter your Email.."
          value={props.email}
          onChange={props.handleEmail}
          required
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          id="password"
          placeholder="Enter Your Password"
          value={props.password}
          onChange={props.handlePassword}
          required
        />
      </div>
      <button className="signin-button" onClick={props.handleSignIn}>
        Sign in
      </button>
      <Link to={"/SignUp"}>
      <p className="signup-text">Don't have an account? Sign Up</p>
      </Link>
    </div>
    
  );
}

export default SignHOC(SignIn);
