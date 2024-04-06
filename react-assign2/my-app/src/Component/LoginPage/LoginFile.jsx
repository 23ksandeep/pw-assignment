import React from 'react'
import './Login.css'
 
const LoginSignup = () => {
  return (
    <div className='container'>
      <div className="page">
      <div className="first-container">
        <h1 className='title'>Instagram</h1>
        <input type='text' className="username inpt" placeholder='Phone, username, or email address'></input>
        <input type='text' className="password inpt" placeholder='Password' />
        <button className="loginbtn">Log in</button>
        <p className="or">OR</p>
      <div className="fb">
        <p className="logofb">Log in with facebook</p>
        <p className="pass">Forgotten your password</p>
        </div>
      </div>
      <div className="second-container">
        <p className="sigup">Don't have an account? <span>Sign up</span> </p>
      </div>
      </div>
    </div>
  )
}



   

export default LoginSignup