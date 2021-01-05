import {useState} from 'react'
import React from 'react'


function nav(){
    
    const [name,setName]=useState('yesh')

    const [datas,setData]=useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    
    function handlechange(e){
       const name =document.getElementById('name').value
       setName(name)
    }

    return(
        <div>
            <p>  doing good {name}</p>
            <input type="text" id="name" onChange={handlechange} />
           { 
                datas.map(function(data){
                    return(
                            <div key={data.id}> 
                            {data.title} 
                            <h2> {data.author} </h2> 
                            </div>
                     )
                })    
           }
            
        </div>
    )
}

export default nav


