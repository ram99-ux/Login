import React, { useState } from "react";

function Cal() {
  const [count, setCount] = useState(0);

  const incre = () => {
    setCount(count + 1);
  };
  const decre = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Count:{count} </h1>
      <button onClick={() => incre()}>Increment</button>
      <br />
      <br />
      <button onClick={() => decre()}>Decrement</button>

      
    </>
  );
}

export default Cal;


// import React from "react";
// import { Component } from "react";

// //constructor
// //normal
// //aero

// class ClassComp extends Component {
//   constructor() {
//     super();

//     this.state = { count: 0 };
//   }

//   incre() {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }

//   decre() {
//     this.setState({
//       count: this.state.count - 1,
//     });
//   }

//   render() {
//     return (
//       <>
//         <h1>count : {this.state.count}</h1>
//         <button onClick={() => this.incre()}>Click +</button> <br /> <br />
//         <button onClick={() => this.decre()}>Click -</button>
//       </>
//     );

//     //     <nav>
//     //         <div className="logo">
//     //             <img src={logo} alt="" style={{width:'80px'}}></img>
//     //         </div>

//     //         <div className="content">
//     //             <p>Services</p>
//     //             <p>Projects</p>
//     //             <p>About</p>
//     //             <p>Contact</p>

//     //         </div>

//     //     </nav>
//     // );
//   }
// }

// export default ClassComp;






