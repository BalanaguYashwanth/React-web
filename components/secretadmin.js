import React, { useState } from 'react'

export default function admin() {

    const [fields, setFields] = useState([{ fields: 'enter field' }, { fields: 'enter field' }])

    const [subfields, setSubfields] = useState({ subfields: 'enter subfields',fields1: 'enter fields',fields2: 'enter fields'})


    function addfields() {
        setFields([...fields, { fields: '' }])
    }

    function addsubfields() {
        alert('correct it')
        //setSubfields({...subfields,  subfields: '' })
    }

    function handleaddfields(index, value) {
        console.log(index, value)
        fields[index].fields = value
        console.log(fields)
    }

    function handleaddsubfields(index,key,value) {

        // let fsub={}

        // for(let obj in subfields)
        // {
        //     fsub[obj]=subfields[obj]
        // }

        // //console.log(subfields)
        // //subfields[index].key=value
        // // let fsub = [...subfields]
        // // fsub[index].subfields= value
        // console.log(fsub[key])

        console.log(index,key,value)
    }


    return (
        <div>
            <ul>
                <li>
                    Title
                    <ul>
                        <li>
                            Subtitle <input placeholder="enter subtitle" />
                            <ul>
                                <div id="addinputfields">
                                    <li>  Fields <input placeholder="enter field" />  </li>
                                    {
                                        fields.map((field, index) => (
                                            <div key={index} > Fields <input placeholder={field.fields} onChange={(e) => handleaddfields(index, e.target.value)} /> </div>

                                        ))
                                    }
                                </div>
                                <li> <button className="fields" onClick={addfields}> + </button>  </li>
                            </ul>
                        </li>

                        <li>

                            {
                                Object.entries(subfields).map(([key, value],index) => (

                                    <div key={key} > {key} < input placeholder={value} onChange={(e) => handleaddsubfields(index,key,e.target.value)} />   </div>

                                ))
                            }


                            <button className="sub" onClick={addsubfields} > + </button>
                        </li>

                    </ul>
                </li>
            </ul>

            <button> submit </button>
        </div>

    )

}

