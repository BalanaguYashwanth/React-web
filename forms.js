import React from 'react'
import './App.css'

class App extends React.Component{
  
  state={
    name:'yash',
    age:21
  }

  handlechange=(e)=>{
    this.setState({
      name:e.target.value
    })
  }

  handlesubmit=(e)=>{ 
    e.preventDefault()
    console.log('form is submitted'+this.state.name)
  }


  render(){
    return(
      <div>
        <p> hey hello {this.state.name} </p>
        <form onSubmit={this.handlesubmit} >
          <input type="text"  onChange={this.handlechange}  />
          <button > change </button>
        </form>
        
       
      </div>
    )
  }
}

export default App
