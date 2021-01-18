import React,{useState, useEffect, } from 'react'
import axios from 'axios'
import { Redirect,useHistory } from 'react-router-dom';

export default function login(){
    const history = useHistory();

    const [login,setLogin] = useState({username:'',password:''})

    function submit() {
        console.log(login)
        axios.post('http://127.0.0.1:8000/login',{
            username:login.username,
            password:login.password
        })
        .then(res=>{
            console.log(res.data)
            history.push("/");

        })
        .catch(err=>console.log(err))
    }

    return (
        <div className="container"> 
            
            <img src="https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg" className="rounded-circle"/> 
            <p> login </p>
            
            <input type="text"  onChange={ (e) => (setLogin({...login,username:e.target.value} ))} placeholder="enter the username" />
            <br />
           
            <input type="password"  onChange={ (e) => (setLogin({...login,password:e.target.value}))} placeholder="enter the password" />
            <br  />
            <button onClick={submit} >  submit </button>
        </div>
    )

}
