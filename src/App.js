import React  from 'react';





import SignIn from './Sign/SignIn';
import SignUp from './Sign/SignUp';
import {HashRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<SignIn/>}/>
          <Route path={"/SignUp"} element={<SignUp/>}/>

          
        </Routes>
      </Router>


  


   






   

    
    </>
  );
}

export default App;
