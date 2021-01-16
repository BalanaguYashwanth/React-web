import React,{useState, useEffect, } from 'react'
import axios from 'axios'
import { Redirect,useHistory } from 'react-router-dom';

export default function login(){
    const history = useHistory();

    const [login,setLogin] = useState({username:'',password:''})

    function submit() {
        console.log(login)
        axios.post('https://regulator-values.herokuapp.com/login',{
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
        <div>
            <p> login </p>
            <input type="text"  onChange={ (e) => (setLogin({...login,username:e.target.value} ))} placeholder="enter the name" />
            <br />
            <input type="password"  onChange={ (e) => (setLogin({...login,password:e.target.value}))} placeholder="enter the password" />
            <br  />
            <button onClick={submit} >  submit </button>
        </div>
    )

}
