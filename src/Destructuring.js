import React, { Component } from 'react'

class Destructuring extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"Mamta",
            age:24,
            bio:"Developer",
            fun:function(){
                return "I am enjoying React";
            }
        }
     console.log(this)
    }
    Change(){
      this.setState({
        //    name:"Akash",
        name:this.state.name + " " + "Saroj",
           bio:"Designer",
      })
    }
  render() {
    console.log("inside render",this)
    return (
      <div>
        {console.log("inside return")}
        <h1>My name is {this.state.name}</h1>
        <h1>My age is {this.state.age}</h1>
        <h1>I am a {this.state.bio}</h1>
        <h3>{this.state.fun()}</h3>
        <button onClick={()=>this.Change()}>On Change</button>
      </div>
    )
  }
}

export default Destructuring
