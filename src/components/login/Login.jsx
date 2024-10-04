import React, { useState } from 'react'
import './Login.css' 
import { assets } from '../../assests/assets';
function Login({setshow}) {

const [currstate,setcurrstate]=useState("sign up");

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
        <div className="login-popup-title">
                    <h2>{currstate}</h2>
                    <img onClick={()=>setshow(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currstate==="login"?<>
          
          </>:<input type="text" placeholder='Your Name' required />}
          
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Your Password' required />
        </div>
        <button>{currstate==="sign up"?"Create Account": "login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>agree term and policy</p>
        </div>
        {currstate==="login"?<p>Create a new Account? <span onClick={()=>setcurrstate("sign up")}>Click Here</span></p>:<p>Already Have A Account <span onClick={()=>setcurrstate("login")}>Login Here</span></p>}
        

    </form>
    </div>
  )
}
import './Login.css' 

export default Login
