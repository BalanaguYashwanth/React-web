import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Redirect,useHistory } from 'react-router-dom';

export default function register(){
    const history = useHistory();
    
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()
    const [first_name,setFirst_name] = useState()
    const [last_name,setLast_name] = useState()
    const [email,setEmail] = useState()

    function submit(){
        return(
            axios.post('http://127.0.0.1:8000/register',{
                username:username,
                password:password,
                email:email,
                first_name:first_name,
                last_name:last_name,
                
            })
            .then(res=>{
                console.log(res.data)
                history.push('/login')
                
            })
            .catch(err=>console.log(err.message))
        )
    }


    return (

        <div className="container" >
            <p className="display-4" > Register </p>
          
            <input  type="text" placeholder="enter the first name"   onChange={(e) => ( setFirst_name(e.target.value) )}     />
            <br />
            <input type="text" placeholder="enter the last name"   onChange={(e) => ( setLast_name(e.target.value) )}     />
            <br />
            <input type="email" placeholder="enter the email"   onChange={(e) => ( setEmail(e.target.value) )}     />
            <br />
            <input type="text" placeholder="enter the username" onChange={(e) => ( setUsername(e.target.value) )}     />
            <br />
            <input type="password" placeholder="enter the password"  onChange={(e) => ( setPassword(e.target.value) )}     />
            <br />
            <button id="loginbutton" onClick={submit} > submit </button>
        </div>


    )

}

