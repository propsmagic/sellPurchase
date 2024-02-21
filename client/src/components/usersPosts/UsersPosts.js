import React from 'react'
import classes from './UsersPosts.module.css'
import Card from '../ui/Card'
import { useSelector } from 'react-redux';

function UsersPosts() {
    const allPosts = useSelector((state)=>state.allPosts.posts);
    const myPosts = allPosts.filter((item)=>
    item.userID === sessionStorage.getItem("userID")
  );
  console.log(allPosts)
  return (
    <div className={classes.mainContentContainer}>
        {myPosts.map((item)=>{
            return(
            <Card key={item.id}
                title = {item.title}
                imagePath = {"./media/smarttv.jpg"}
                imageAlt={item.imageAlt}
                briefDescription = {item.briefDescription}
            />
        )
        })}
    </div>
  )
}

export default UsersPosts