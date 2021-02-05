import React,{useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect,useHistory,Link } from 'react-router-dom';
import App from '../App'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


export default function login(){
    const history = useHistory();

    const [login,setLogin] = useState({username:'',password:''})
    const[feedback,setFeedback] = useState()
    const [token,setToken] = useState()

    function submit() {
        axios.post('http://127.0.0.1:8000/auth/token',{
            grant_type:'password',
            username:login.username,
            password:login.password,
            client_id:'g7bg4JGj6SBXyVVGE2aG284MfTzGZmAy5a6WTsSl',
            client_secret:'bumj4yGWibk99rUkkaqUlsmD2bEtgLIEvzalB9gQW9guoRIj7BCgpU7g2JgB8W9bzsJtIIRhXgaQWiTIirEY9YENK12swEciJmlVo3PniP5WkC9UyFtUFne7JvameR8T',
        })
        .then(res=>{
            //console.log(res.data)
            setToken(res.data.token)
            history.push("/");
            location.reload()
            localStorage.setItem('access-token',window.btoa(res.data.access_token));
            localStorage.setItem('refresh-token',window.btoa(res.data.refresh_token));
        })
        .catch(err=>{
            console.log(err.response.data.error_description)
            setFeedback(err.response.data.error_description)
        })
    }
    // function userToken(token1){
    //    localStorage.setItem('user-token',token1)
    // }

    function responseFacebook(response){
       //console.log(response.accessToken)

       axios.post('http://127.0.0.1:8000/auth/convert-token',{
           token:response.accessToken,
           backend:'facebook',
           grant_type:'convert_token',
           client_id: 'g7bg4JGj6SBXyVVGE2aG284MfTzGZmAy5a6WTsSl',
           client_secret:'bumj4yGWibk99rUkkaqUlsmD2bEtgLIEvzalB9gQW9guoRIj7BCgpU7g2JgB8W9bzsJtIIRhXgaQWiTIirEY9YENK12swEciJmlVo3PniP5WkC9UyFtUFne7JvameR8T',
       })
       .then((res) =>{
           localStorage.setItem('access-token',window.btoa(res.data.access_token))
           localStorage.setItem('refresh-token',window.btoa(res.data.refresh_token))
           history.push("/");
           location.reload()
       })
       .catch((err)=>console.log(err))
    }

    function responseGoogle(response)
    {
        axios.post('http://127.0.0.1:8000/auth/convert-token',{
            token:response.accessToken,
            backend:'google-oauth2',
            grant_type:'convert_token',
            client_id: 'g7bg4JGj6SBXyVVGE2aG284MfTzGZmAy5a6WTsSl',
            client_secret:'bumj4yGWibk99rUkkaqUlsmD2bEtgLIEvzalB9gQW9guoRIj7BCgpU7g2JgB8W9bzsJtIIRhXgaQWiTIirEY9YENK12swEciJmlVo3PniP5WkC9UyFtUFne7JvameR8T',
        })
        .then((res) =>{
            localStorage.setItem('access-token',window.btoa(res.data.access_token))
            localStorage.setItem('refresh-token',window.btoa(res.data.refresh_token))
            history.push("/");
            location.reload()
        })
        .catch((err)=>console.log(err.response))
    }

    return (
        <div className="container"> 
            
            <p className="display-4" > Login </p>
            
            <input  className="input" type="text"  onChange={ (e) => (setLogin({...login,username:e.target.value} ))} placeholder="enter the username" />
            <br />
           
            <input  className="input" type="password"  onChange={ (e) => (setLogin({...login,password:e.target.value}))} placeholder="enter the password" />
            <br  />
            <button id="loginbutton" onClick={submit} >  submit </button>
            <br  />
            <h6> {feedback} </h6>
            <p> or </p>
            <FacebookLogin 
                id="loginbutton"
                appId='779887412208181'
                fields='name,email,picture'
                callback={responseFacebook}
            />
            <br />
            <GoogleLogin
                clientId="123772005102-se7vihldo06de5189bjdttt3af4ophom.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                buttonText="LOGIN WITH GOOGLE "
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />

              <br  />
            <p>{" Don't have an account ? "}<Link to='/register' > Registered </Link>   </p>
        </div>
    )

}
