import React,{useState, useEffect, } from 'react'
import axios from 'axios'
import { Redirect,useHistory } from 'react-router-dom';
import App from '../App'


export default function login(){
    const history = useHistory();

    const [login,setLogin] = useState({username:'',password:''})

    const [token,setToken] = useState()

    function submit() {
        axios.post('http://127.0.0.1:8000/login',{
            username:login.username,
            password:login.password
        })
        .then(res=>{
            //console.log(res.data)
            setToken(res.data.token)
            history.push("/");
            location.reload()
            userToken(res.data.token)

        })
        .catch(err=>console.log(err))
    }


    function userToken(token1){
       localStorage.setItem('user-token',token1)
    }



    return (
        <div className="container"> 
            
            <p className="display-4" > Login </p>
            
            <input type="text"  onChange={ (e) => (setLogin({...login,username:e.target.value} ))} placeholder="enter the username" />
            <br />
           
            <input type="password"  onChange={ (e) => (setLogin({...login,password:e.target.value}))} placeholder="enter the password" />
            <br  />
            <button id="loginbutton" onClick={submit} >  submit </button>
        </div>
    )

}
