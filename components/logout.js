import React,{useState, useEffect, } from 'react'
import axios from 'axios'
import { Redirect,useHistory } from 'react-router-dom';

export default function logout(){
    const history = useHistory();

    useEffect( () => {

        let axiosConfig={
            headers:{
                Authorization : "Token "+localStorage.getItem('user-token')
            }
        }

        axios.get('http://127.0.0.1:8000/logout',axiosConfig)
        .then(res=>{
            localStorage.removeItem('user-token')
            console.log(res.data)
            history.push('/login')
        })
        .catch(err=>{console.log(err)})
    },[] )


    return(
        <div>
            
        </div>
    )
}
