import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Single from './singlecourse'

export default function courses(){
    const [datas,setDatas] = useState(null)
    
    useEffect(() =>{

        let axiosConfig={
            headers:{
                Authorization : "Token " +localStorage.getItem('user-token')
            }
        }

        axios.get('http://127.0.0.1:8000/api/courses/',axiosConfig)
        .then( res => {
            let datas = res.data
            setDatas(datas)
        })
        .catch(err=>console.log(err))
    },[])

    return (
        <div>
          { datas && <Single datas={datas} /> }
        </div>
    )
}
