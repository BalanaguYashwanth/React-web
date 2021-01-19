import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import Navbar from './navbar'
import ReactPlayer from 'react-player'


export default function playcourse() {
    const { course } = useParams(); // learn/:course is there and get {course} from useParams

    const [video, setVideo] = useState(null)

    const [show,setShow] = useState(false)

    const [overview,setOverview] = useState(null)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/overview/')
            .then(res => {
                let result = res.data
                let array=[]
                for(let obj in result)
                {
                   var datas=eval(result[obj].data)
                }   


                for(let data in datas)
                {
                    datas[data].id=parseInt(data)
                    array.push(datas[data])

                }

                //console.log(array)
               setOverview(array)
            })
            .catch(err => console.log(err.message))
    }, [])


    function episodes(text){
        //console.log(course+'-'+text)
        axios.get('https://particle-ae921-default-rtdb.firebaseio.com/videos.json')
        .then(res=>{
            let result = res.data
            for(let obj in result)
            {
                if(result[obj].title == course+'-'+text && result[obj].title!="")
                {
                    setVideo(result[obj].video)
                }
            }
        
        })
        .catch(err=>console.log(err))
    }

    function  contentdata(content){
        return (
                <div>
                    {
                    Object.entries(content).map( ([key,value]) => (

                    <button   key={key} id="select" className={key} onClick={ () => (setVideo(value)) }> {key}   </button>
                    ) )
                    } 
                </div>
        )
    }
    

    return (
        <div>
            <Navbar />
            <div>
                <div className="row no-gutters" >
                    <div className="col-md-9 no-gutters " >
                        <div className="leftside ">

                            <ReactPlayer

                                config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                                id="playvideocolor"
                                onContextMenu={e => e.preventDefault()}
                                url={video}
                                className="react-player "
                                controls
                                width="100%"
                                height="650px"
                            />

                            <button id="select"> About :-  </button>

                            <p style={{ textAlign: 'center' }} >
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
                                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur
                </p>
                    </div>
                    </div>

                    <div className="col no-gutters" >

                        <div className="rightside" >

                            <button id="select" style={{ textAlign: 'center' }} onClick={() => (setShow(!show))}  >  Course Syllabus  <i className="fa fa-caret-down"></i> </button>
                           
                            {
                               show  && <div>
                                        <button id="select" onClick={ () => (episodes('episode1')) } > Episode 1 : Introduction </button>
                                        <button id="select"> Episode 2 : Basic code</button>
                                        <button id="select" onClick={ () => (episodes('advanced')) }> Episode 3 : Advanced code</button>
                                        </div>
                           }

                            {
                              overview &&  (overview).map( (data,index) => (

                                                <div key={index} > 

                                                <button id="select" style={{ textAlign: 'center' }} onClick={() => (setShow(!show))}  >{data.subtitle}  <i className="fa fa-caret-down"></i> </button>
                                              { show &&  <div> {contentdata(data)} </div>}

                                                    {/* <button id="select" style={{ textAlign: 'center' }}  >      <i className="fa fa-caret-down"></i> </button> */}
                                                </div>
                                            
                                                )) 
                            }   

                        </div>
                            
                    </div>


                </div>

            </div>
        </div>
    )
}
