import React, { useState } from 'react'
import LoginForm from '../components/loginForm/LoginForm'
import Register from '../components/registerForm/Register'


function Login() {
  const[register,setRegister]=useState()

  return (
    <React.Fragment>
        {/* {register ? <LoginForm setRegister={setRegister}/> : <Register setRegister={setRegister}/>} */}
        <LoginForm setRegister={setRegister}/>
    </React.Fragment>
  )
}

export default Login