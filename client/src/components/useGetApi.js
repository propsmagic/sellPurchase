import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useGetApi(url) {
    const[postData,setPostData]=useState(null)
    useEffect(()=>{
        axios.get(url)
       .then(res=>setPostData(res.data))
    },[url])
    return(postData)
}

export default useGetApi;