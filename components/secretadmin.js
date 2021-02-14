import React, { useState } from 'react'

export default function admin() {

    const [fields, setFields] = useState([{ fields: 'enter field' }, { fields: 'enter field' }])

    const [subfields, setSubfields] = useState({ subfields: 'enter subfields' , fields: 'enter fields' })


    function addfields() {
        setFields([...fields, { fields: '' }])
    }

    function addsubfields() {
        alert('correcr it')
        //setSubfields({...subfields,  subfields: '' })
    }

    function handleaddfields(index, value) {
        console.log(index, value)
        fields[index].fields = value
        console.log(fields)
    }

    function handleaddsubfields(index, value) {
        var fsub = [...subfields]
        fsub[index].subfields = value
        console.log(fsub)
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

                            {/* {
                                subfields.map((field, index) => (

                                    <div key={index} > Subfields <input placeholder={field.subfields} onChange={(e) => handleaddsubfields(index, e.target.value)} /> </div>

                                ))
                            } */}

                            {
                                Object.entries(subfields).map(([key, value]) => (

                                    <div key={key} > {key} {value} </div>

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

