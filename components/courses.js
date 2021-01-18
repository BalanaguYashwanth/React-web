import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Single from './singlecourse'

export default function courses(){
    const [datas,setDatas] = useState(null)
    
    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/api/courses/')
        .then( res => {
            let datas = res.data
            console.log(datas)
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
