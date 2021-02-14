import React, { useState } from 'react'

export default function admin() {

    const [fields, setFields] = useState([{fields:'enter field'},{fields:'enter field'}])
    const [flag, setFlag] = useState(false);

    function addfields() {
            // let li=document.createElement('LI')
            // li.appendChild(document.createTextNode('Fields'))
            // li.appendChild(document.createElement('input'))
            // document.getElementById("addinputfields").appendChild(li)
            //allfields=[...fields]
            //allfields.push({fields:''})
            setFields([...fields,{fields:''}])
            
    }


   function addsubfields(){
        let ul=document.createElement('UL')
        document.getElementById('sub').appendChild(document.createTextNode('Subtitle'))
        document.getElementById('sub').appendChild(document.createElement('input'))
        let li=document.createElement('LI')
        li.appendChild(document.createTextNode('Feilds'))
        li.appendChild(document.createElement('input'))
        let button = document.createElement('BUTTON')
        button.setAttribute('onClick',"{addfields}")
        button.appendChild(document.createTextNode('+'))
        console.log(button)
        li.appendChild(button)
        ul.appendChild(li)
        document.getElementById('sub').appendChild(ul)       
   }
//addfields1()

   function handleaddfields(index,value){
       console.log(index,value) 
       fields[index]={fields:value}
       console.log(fields) 
   }

    return (
        <div>
            <ul>
                <li>
                    Title
                    <ul>
                        <li> Subtitle <input placeholder="enter subtitle" />  </li>

                        <ul >
                            <div id="addinputfields">
                            <li>  Fields <input placeholder="enter field" />  </li>
                            {
                                fields.map((field,index) => (
                                    <div key={index} > <input   placeholder={field.fields} onChange={ (e) => handleaddfields(index,e.target.value)}   /> </div>
                                    
                                    ))
                            } 
                            </div>
                            <li> <button className="fields" onClick={addfields}> + </button>  </li>
                        </ul>

                        <li> 
                            <div id="sub">
                                
                            </div>
                            <button className="sub" onClick={addsubfields} > + </button> 
                        </li>
                        
                       
                    </ul>
                </li>
            </ul>

            <button> submit </button>
        </div>

    )

}

