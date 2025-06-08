
import React from "react";
import { Link } from "react-router-dom";



function Contact (){
    return(
        <>
        <h1>contact page</h1>
        <Link to={'/'}> <button>Home</button></Link> <br /> <br />
        </>
    );
}

export default Contact