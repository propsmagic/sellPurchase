import React, { useState } from 'react'
import classes from "./MainContentArea.module.css"
import LoginForm from '../loginForm/LoginForm'
import Posts from '../posts/Posts'
function MainContentArea(props) {
  return (
    <div className={classes.mainContentContainer}>
        <Posts/>
    </div>
  )
}

export default MainContentArea