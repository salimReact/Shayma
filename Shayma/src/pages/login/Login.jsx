import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

function Login() {
 
  return (
    <Fragment>
      <div className="reg">
        <div className="container1">
          <div className="title">Login</div>
          <div className="content">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Email</span>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="password" placeholder="Enter your password" required />
              </div>
              <div className="input-box">
                <a href="/"><span className="details">Register Now</span></a>   
              </div>
              <div className="input-box">
                <a href="/"><span className="details">Forget Password?</span></a>   
              </div>
            </div>
            <div className="button">
            <a href="/CreateRondo"><button className='Loginbutton'>Login</button></a>   

      
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
