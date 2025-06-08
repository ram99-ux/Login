import React from "react";
import { useLocation } from "react-router-dom";

function Props() {
  const location = useLocation();
  const name = location.state?.name || "Guest";

  const x = () => {
    alert("This is your name: " + name);
  };

  return (
    <>
      <h1>Hello, {name}!</h1>
      <button className="btn btn-primary" onClick={x}>Click me</button>
    </>
  );
}

export default Props;
