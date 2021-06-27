import axios from 'axios'

function updatedata()
{
    return async function(disptach){
        await axios.get('http://127.0.0.1:8000/api/get/sponsor/')
        .then(res=>{
            console.log('sponsorresult',res.data)
            disptach({type:'SPONSOR_UPDATE_DATA',sponsordata:res.data})
        })
        .catch(err=>{
            console.log(err.response)
            disptach({type:'SPONSOR_UPDATE_DATA',sponsordata:err.response})
        })

        await axios.get('http://127.0.0.1:8000/api/get/episode/')
        .then(async res=>{
            console.log('episoderesult',res.data)
            await disptach({type:'UPDATE_DATA',data:res.data})
        })
        .catch(async err=>{
            console.log(err.response)
            await disptach({type:'UPDATE_DATA',data:err.response})
        })
    }
}

export default updatedata()