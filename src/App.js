import React from 'react';
import './App.css'

class App extends React.Component{
  state={
    name:'yash',
    age:'21',
  }

  change(e){
    alert('done');
  }

  hovered(e){
    console.log(e.target,e.pageX);
  }

  handlecopy(){
   alert("please don't copy");
  }

  handleinput=()=>{
    this.setState({
      name:document.getElementById("name").value
    })
    console.log(document.getElementById("name").value)
  }

  render(){
    return(
      <div> 
        <p> {this.state.name} </p>
        <input type="text" id="name" />
        <button onClick={this.handleinput} > submit name </button>
        <p> hey hello man {this.state.name} </p>
        <p> hey, your age is {this.state.age} </p>
        <p> {Math.random()*10} </p>
        <button onClick={this.change}> submit  </button>
        <button onMouseOver={this.hovered} > hover </button>
        <p onCopy={this.handlecopy} > copied alerts </p>
      </div>
    )
  }
}

export default App

