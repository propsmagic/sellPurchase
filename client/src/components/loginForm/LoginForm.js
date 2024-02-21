import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import classes from './LoginForm.module.css'
import Button from '../ui/Button';
import {useNavigate} from 'react-router-dom'
import Header from '../header/Header'


function LoginForm(props) {
  //set users list=======
  const[users,setUsers]=useState();

  //set user inputs========
  const userRef = useRef();
  const passwordRef = useRef();
  
  const navigate = useNavigate()


  // get all users list
  const getUsers =async()=>{
    const response = await(axios.get("http://localhost:3000/users")
    .catch(err=>console.log(err)))
    setUsers(response.data)
  }

  useEffect(()=>{
    getUsers();
  },[])

  console.log(users)

 // create from data object
  const loginHandler =(event)=>{
    event.preventDefault()
    const userDetails= {
      userID : userRef.current.value,
      password: passwordRef.current.value
    }

    //check user details  
    const validUser = users.find((item)=>{
      return (item.userID===userDetails.userID && item.password===userDetails.password);
    })

    if(validUser){
      sessionStorage.setItem("logedIn", true);
      sessionStorage.setItem("userID", validUser.userID);

      navigate("/addpost")
    }else{
      alert("please submit valid user name and details")
    }
  }

  console.log(sessionStorage.getItem("userID"))

  // changing the state whichj control the rendring the form
  const formRenderHandler=()=>{
    props.setRegister(false)
  }

  return (
      <div className={classes.login}>
        <div className={classes.loginForm}>
          <form onSubmit={loginHandler}>
            <h3>login</h3>
            <div className={classes.inputGroup}>
                <label >User ID</label>
                <input type='text' ref={userRef}/>
            </div>
            <div className={classes.inputGroup}>
                <label >Password</label>
                <input  type='password' ref={passwordRef}/>
            </div>
            <div>
              <Button 
                type = {"submit"}
                buttonName = {"submit"}
              />
              <a  onClick={formRenderHandler}>Dont have an Account? Click to Register</a>
            </div>
          </form>
        </div>
      </div>
  )
}

export default LoginForm