import React from "react";
import SignHOC from "./SignHOC";
import { Link } from "react-router-dom";

function SignUp(props) {
  return (
    <div className="signin-container" style={props.design}>
      <h1>Sign up</h1>

      <div className="input-group">
        <input
          type="text"
          id="name"
          placeholder="Enter your Name.."
          value={props.name}
          onChange={props.handleName}
          required
        />
      </div>

      <div className="input-group">
        <input
          type="text"
          id="mobile"
          placeholder="Enter Your Mobile Number"
          value={props.mobile}
          onChange={props.handleMobile}
          required
        />
      </div>

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

      <button className="signin-button" onClick={props.handleSignUp}>
        Sign up
      </button>
    <Link to={"/"}>
      <p className="signup-text">Already you have Account? Sign In</p>
    </Link>
    </div>
  );
}

export default SignHOC(SignUp);
