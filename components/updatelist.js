import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function updatelist() {

    const [title, setTitle] = useState()
    const [imgurl, setImgurl] = useState()
    const [feedback, setFeedback] = useState()
    const [items, setItems] = useState()

    function change() {
        if (title && imgurl) {
            axios.post('http://127.0.0.1:8000/api/courses/', {
                title: title,
                imgurl: imgurl
            })
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
        else {
            setFeedback('Please enter the all inputs')
        }

    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/courses/')
            .then(res => {
                console.log(res.data)
                setItems(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className="row  no-gutters">
            <div className="col-md-6 no-gutters">
                <div className="leftside">
                    <div className="container" style={{ margin: 'auto', paddingTop: '35%' }}>
                        <h3  > Courses </h3>
                        <input className="my-1 px-5" style={{ textAlign: 'center' }} onChange={(e) => setTitle(e.target.value)} placeholder="Enter the course title" />
                        <input className="my-1 px-5" style={{ textAlign: 'center' }} onChange={(e) => setImgurl(e.target.value)} placeholder="Enter the course photo link " />
                        <button className=" my-2  btn btn-secondary" onClick={change} > submit </button>
                        <br />
                        {feedback}
                    </div>
                </div>
            </div>

            <div className="col-md-6 no-gutters">
                <div className="rightside">
                    <div className="container" style={{ margin: 'auto' }}>
                        <h3> Updated Courses </h3>

                        {
                            items && items.map((item, index) => (
                                <div key={index}>
                                    <div className="card bg-light mb-3" style={{ width: '18rem' }} >
                                        <div className="card-body px-5 ">
                                            <p className="card-title "> {index+1})  {item.title}  <a href={item.imgurl}> <i className="fas fa-external-link-alt"></i>  </a> <button style={{float:'right',border:'None'}} > <i className="far fa-trash-alt"></i></button> </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}


