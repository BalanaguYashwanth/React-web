import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Redirect,useHistory,Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

export default function register(){
    const history = useHistory();
    
    const[feedback,setFeedback] = useState()
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()
    const [first_name,setFirst_name] = useState()
    const [last_name,setLast_name] = useState()
    const [email,setEmail] = useState()

    function submit(){
        if( username!=null&& password!=null&&email!=null&& first_name !=null &&  last_name!=null && password!=null)
        {
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
            .catch(err=>{
                //console.log(err.response.data)
                console.log(err.response.data.account)
                setFeedback(err.response.data.account)
            })
        )
        }
        else{
            setFeedback('please enter all the fields')
        }
    }

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

        <div className="container" >
            <p className="display-4" > Register </p>
          
            <input className="input" type="text" placeholder="enter the first name"   onChange={(e) => ( setFirst_name(e.target.value) )}     />
            <br />
            <input className="input" type="text" placeholder="enter the last name"   onChange={(e) => ( setLast_name(e.target.value) )}     />
            <br />
            <input className="input" type="email" placeholder="enter the email"   onChange={(e) => ( setEmail(e.target.value) )}     />
            <br />
            <input className="input" type="text" placeholder="enter the username" onChange={(e) => ( setUsername(e.target.value) )}     />
            <br />
            <input className="input" type="password" placeholder="enter the password"  onChange={(e) => ( setPassword(e.target.value) )}     />
            <br />
            <button id="loginbutton" onClick={submit} > submit </button>
           {  feedback &&  <div> 
               
               <br />
               <h6> {feedback} </h6> </div>  }
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
            <p> Already have an account ? <Link to='/login' > Login </Link>   </p>
        </div>


    )

}

