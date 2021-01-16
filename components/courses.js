import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Single from './singlecourse'

export default function courses(){
    const [datas,setDatas] = useState(null)
    
    useEffect(() =>{
        axios.get('https://particle-ae921-default-rtdb.firebaseio.com/courses.json')
        .then( res => {
            let datas = res.data
            let array=[]
            for(var obj in datas)
            {
                datas[obj].id=obj
                array.push(datas[obj])
            }
            setDatas(array)
            console.log(datas)
        })
        .catch(err=>console.log(err))
    },[])

    return (
        <div>
          { datas && <Single datas={datas} /> }
        </div>
    )
}

