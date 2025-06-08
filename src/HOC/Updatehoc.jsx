import React, { Component } from 'react'

const data={
    color:"Brown",
    backgroundColor:"black",
    fontSize:"50px",
    textAlign:"centre"
}
const Update=(Newcomponent)=>{
class Hoc extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
       this.z=this.incre.bind(this) 
    }
    incre(){
        this.setState({
            count:this.state.count+1
        })
    }

  render() {
    return (
      <div>
        <Newcomponent count={this.state.count}  INC={this.z} R={data} name="jhon" />
      </div>
    )
  }
}
return Hoc;
}
export default Update;