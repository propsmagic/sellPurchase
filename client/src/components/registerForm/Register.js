import React, { useEffect, useState } from 'react'
import classes from './Register.module.css'
//import { useRef } from 'react';
import Button from '../ui/Button';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import RegValidation from './RegValidation';
import Header from '../header/Header';

function Register(props) {
  const[usersList,setUsersList]= useState();


  //set user inputs========
  const[registerDetails,setRegisterDetails]=useState({
    userName:"",
    userID:"",
    password:""
  })

  //set input errs
  const[errMsg,setErrMsg]=useState(
    {
    userName:"",
    userID:"",
    password:""
    }
  )

  //set user details========
  const changeHandler=(e)=>{
      setRegisterDetails({
        ...registerDetails,
        [e.target.name] : e.target.value
      }
      )

      let error = RegValidation(e.target.name, e.target.value);

      setErrMsg({
        ...errMsg,
        [e.target.name] : error
      })
      }

    console.log(registerDetails);
      
  //get all userNames
  const getUserNames = async()=>{
    const response = await(axios.get("http://localhost:3000/users")
    .catch(err=>console.log(err))
    )
    setUsersList(response.data)
  }
  useEffect(()=>{getUserNames()},[])
  //console.log(usersList);

  //handle fomrm submission
  const registerFormHandler =(event)=>{
    event.preventDefault() 
    //check is user already exixt
    const isUserExist = usersList.filter((item)=>{
      return(item.userID===registerDetails.userID)
    })

    if(isUserExist.length===0){
      console.log("Empty",isUserExist)
    }


    

    if(isUserExist.length===0 && registerDetails.userID.includes("@") && registerDetails.userID.length>7 && registerDetails.userID.length<25 && registerDetails.userName.length>2 && registerDetails.userName.length <25 && registerDetails.password.length>7 && registerDetails.password.length<25 ){
          //posting data to server
          const postRegisterDetails = async(registerDetails)=>{
            //console.log(registerDetails)
            const response = await(axios.post("http://localhost:3000/users",registerDetails)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
            )
          }
          postRegisterDetails(registerDetails);
        
    }else{
      alert("Provided inputs are invalid or UserID is already exist");
    }

  }

  // changing the state whichj control the rendring the form
  const formRenderHandler=()=>{
    props.setRegister(true)
  }

  //console.log(errMsg)
  return (
    <div> 
      <div className={classes.registerForm}>
        <form onSubmit={registerFormHandler}>
          <h3>Register</h3>
          <div className={classes.inputGroup}>
              <label >User Name</label>
              <input type='text' value={registerDetails.userName} name="userName" onChange={changeHandler}/>
              <span className={classes.incorrect}>{errMsg.userName}</span>
          </div>
          <div className={classes.inputGroup}>
              <label >User ID</label>
              <input type='text' value={registerDetails.userID} name="userID" onChange={changeHandler}/>
              <span className={classes.incorrect}>{errMsg.userID}</span>
          </div>
          <div className={classes.inputGroup}>
              <label >Password</label>
              <input  type='password' value={registerDetails.password} name="password" onChange={changeHandler}/>
              <span className={classes.correct}>{errMsg.password}</span>
          </div>
          <div>
            <Button 
              type = {"submit"}
              buttonName = {"submit"}
            />
            <br/>
          </div>
          <a onClick={formRenderHandler}>Already have an Account? Click for Login</a>
        </form>
      </div>
    </div>
  )
}

export default Register