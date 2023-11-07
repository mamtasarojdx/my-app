import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ChangeName extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Karan",
    }
}
    handleClick = () =>{
        const name =  this.state.name === "name" ? "Karan":"Amit";
        this.setState({
            name:this.state.name,
        })
    }
  render() {
    return (
      <div>
        {/* <h1>My name is {this.state.name}</h1> */}
        <button onClick={this.handleClick}>Change name</button>
        <ChildComponent name={this.state.name}/>
      </div>
    )
  }
}

export default ChangeName



























// Today i read Transform,Transition in CSS and Variables,Strings,Array,Classes in JS and Render HTML,JSX,Props,Events in React.