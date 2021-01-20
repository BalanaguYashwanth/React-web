import React,{useState} from 'react'
import './App.css'
import Todo from './todo.js'
import Blogs from './blogs'
import Pvideo from './video'
import Home from './components/home'
import { BrowserRouter as Router, Route , Switch, Link} from 'react-router-dom'
import Playcourse from './components/playcourse'
import Login from './components/login'
import Register from './components/register'
import Logout from './components/logout'

function App(){
  
 

  return(
    <Router>
    <Switch>
      
      <Route exact path="/">
       { localStorage.getItem('user-token') ?  (<Home />) :  (<Login />) }
      </Route>

      <Route path="/learn/:course">
      { localStorage.getItem('user-token') ?  (<Playcourse />) :  (<Login />) }
       
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/register">
        <Register />
      </Route>

      <Route exact path="/logout">
      { localStorage.getItem('user-token') ?  (<Logout />) :  (<Login />) }
      </Route>

    </Switch>

    </Router>
  )
}

export default App
