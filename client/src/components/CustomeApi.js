import { useState,useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllUserPosts } from "../redux/actions/userAction";

export const useGetApi= (url) =>{
    const[postData,setPostData]=useState(null)
    const dispatch = useDispatch();
    const data =async(url)=>{
         await (axios(url)
         .then(res=>{
            setPostData(res.data);
            dispatch(getAllUserPosts(res.data))
         })
       .catch(err=>console.log(err)))                 
    }
     useEffect(()=>{
        data(url);
    },[url])
    return(postData)
}