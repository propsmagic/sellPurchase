import React, { useContext, useState } from 'react'
import classes from './Posts.module.css'
import Card from '../ui/Card'
import FilterContext from '../store/filterPosts/FilterContext';
import Pagination from '../pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useGetApi } from '../CustomeApi';

function Posts(props) {
    const updateMainState = useGetApi('http://localhost:3000/posts');
    console.log(updateMainState);
    const posts= useSelector((state)=>state.allPosts.posts)
    console.log(posts)
    //const [postList,setPostList] = useState([]);
    const [range,setRange] = useState([0,5])
    const searchValue = useContext(FilterContext);
    // const dispatch = useDispatch();
   

    //======prepare searched post list
    const filteredPost = posts.filter((item)=>
        item.title.toLowerCase().includes(searchValue.value.toLowerCase())
    )

    //====pagination post
    const pageBtnCount = [];
    for(let i=1; i<=Math.floor(posts.length/5+1);i++){
        pageBtnCount.push(i*5);
    }

    const currentPagePosts=(firstRange,secondRange)=>{
        setRange([firstRange,secondRange])
    }

    const pagePosts = posts.slice(range[0],range[1])
    console.log(pagePosts);

  return (
    <React.Fragment>
        <div className={classes.mainContentContainer}>
        {searchValue.value ?
            filteredPost.length ?
            filteredPost.map((item,index)=>{
                return(
                    <Card key={index}
                        postID= {item.id}
                        title = {item.title}
                        imagePath = {"./media/table.jpg"}
                        imageAlt={item.imageAlt}
                        briefDescription = {item.briefDescription}
                    />
                )
            }
            ) 
            :
            <h1 className={classes.notFound}>Searched item not found</h1>
        :
        pagePosts.map((item,index)=>{
            return(
                <Card key={index}
                    postID = {item.id}
                    title = {item.title}
                    imagePath = {"./media/table.jpg"}
                    imageAlt={item.imageAlt}
                    briefDescription = {item.briefDescription}
                />
            )
        }
        ) 
    
    }

        <div>
        <Pagination
            pageBtnCount = {pageBtnCount}
            postRange = {currentPagePosts}
        />
        </div>
    </div>
    </React.Fragment>
  )
}

export default Posts