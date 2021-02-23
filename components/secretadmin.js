import React, { useState } from 'react'

export default function admin() {

    //const [fields, setFields] = useState([{ fields: 'enter field' }, { fields: 'enter field' }])

    const [subfields, setSubfields] = useState(
        [
            {
                id: 1,
                subtitle: 'enter subfields',
                videos: [{ id: 1, field: "enter field1", link: "enter the link" }]
            },
            {
                id: 2,
                subtitle: 'enter subfields',
                videos: [{ id: 1, field: "enter field", link: "enter the link" },{ id: 2, field: "enter field", link: "enter the link" }]
            },
        ]
    )

    const [title,setTitle] = useState()

    //const [resubfields,setResubfields] = useState([])

    function add(field) {
        let svideo = field.videos.length

        field.videos.push(
            {
                id:svideo+1,
                field: "enter field", 
                link: "enter the links", 
            }
        )
        
        setSubfields([...subfields])
        //console.log(subfields)           //required
        // setFields([...fields, { fields: '' }])
    }

    function addsubfields() {
        let obj = {
            id: subfields.length + 1,
            subtitle: 'enter subfields',
            videos: [{ id: 1, field: "enter field", link: "enter the link" }]
        }
        setSubfields([...subfields, obj])
        console.log(subfields)
    }

    // function handleaddfields(index, value) {
    //     console.log(index, value)
    //     fields[index].fields = value
    //     console.log(fields)
    // }

    // function handleaddsubfields(field,value,index) {

    //     subfields[index][field]=value
    //     console.log(subfields)
    // }


    // function calculate(data,index) {
    //     const list=[]

    //     for (let field in data) {
    //         list.push(<li key={field} > {field}  <input  placeholder={data[field]} onChange={(e) => (handleaddsubfields(field,e.target.value,index))} />  </li>)
    //     }

    //     return(
    //         <div>
    //         {list}
    //         </div>
    //     )
    // }


    function handlesubtitle(text,index){
        subfields[index].subtitle=text
        console.log(subfields)
    }

    function handlevideos(text,index,mainindex){
        subfields[mainindex].videos[index].field=text
        console.log(subfields)
    }

    function handlevideoslink(link,index,mainindex){
        subfields[mainindex].videos[index].link=link
        console.log(subfields)
    }


    function videoslist(valvideo,mainindex) {
       
        return (
            <div>
                {
                    valvideo.map((val,index) => (
                        <div key={index}>
                        <li>  <input placeholder={val.field} onChange={(e) => handlevideos(e.target.value,index,mainindex)} />   </li>
                        <li>  <input placeholder={val.link}  onChange={(e) => handlevideoslink(e.target.value,index,mainindex)}  />    </li>
                        </div>
                    ))
                }
            </div>
        )
    }

    return (
        <div>
            <ul>
                <li>
                    Title <input placeholder="enter the title" onChange={ (e) => setTitle(e.target.value) } />
                   <ul>
                        {
                            subfields.map((field, index) => (
                                <li key={index} >
                                   subtitle <input placeholder= {field.subtitle} onChange={ (e) => (handlesubtitle(e.target.value,index)) }  />
                                    <ul> 
                                       <li> 
                                           videos 
                                           <ul> {videoslist(field.videos,index)} </ul>
                                           <button onClick={() => (add(field))} > + </button>
                                        </li> 
                                       
                                    </ul> 
                                </li>
                            ))
                        }
                    </ul>
                    <button onClick={addsubfields} > + </button>
                </li>
            </ul>
        </div>

    )
}

