import React from "react";
import { useNavigate } from "react-router-dom";






function Home (){
    const nav = useNavigate();

    const navContact = ()=>{nav('/Contact')}
    
    return(
        <>
        <h1>home page</h1>


        <button onClick={navContact}>Contact</button>

        {/* <Link to={'/Contact'}> <button>Contact</button></Link> <br /> <br />
        <Link to={'/About'}><button> About</button></Link> */}
        
        </>
    );
} 

export default Home