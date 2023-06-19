import React from 'react';
import "./login.css";
import { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Signup from '../Signup/Signup';
import RestaurantSignup from '../RestaurantSignup/RestaurantSignup';
export default function Login() {
    const [formData, setformData] = useState({});
    const [signData, setsignData] = useState({});
    const navigate = useNavigate();
    const handleChange = (e)=>{
      setformData((prev)=>({
        ...prev, [e.target.name]:e.target.value,
      }))
    };
  

    const signin = async ()=>{
      console.log(formData);
      const resp = await axios.post("http://localhost:8080/login", formData);
      console.log(resp.data);
      if(resp.data.status==200)
      {
        console.log("loggedin successfully");
        localStorage.setItem("token", resp.data.token);
        navigate("/");
      }
    };

    const restsignin = async ()=>{
      // console.log(formData);
      const resp = await axios.post("http://localhost:8080/restlogin", signData);
      if(resp.data.status==200)
      {
        console.log("loggedin successfully");
        localStorage.setItem("token", resp.data.token);
        navigate("/");
      }
    };
  return (

      <div className='main-container'>
      
      <div className='login-container'>
        <h2 className='resheader'>Restaurant login</h2>
      <div className='login-details'> 
      <label className="form__label" for="username">Username</label>     
        <div className='input-container'>
          <input type='text' placeholder='username'
          name='username'
          onChange={handleChange}
          />
          <br/>
          <label className="form__label" for="password">Password</label>
          <input type='password' placeholder='Password'
          name='password'
          onChange={handleChange}
          />
          <button className='login' onClick={restsignin}>Log in</button>
          <div className='breaker'>
          <hr className='smallhr'></hr><span style={{verticalAlign:"top", opacity:"0.5", fontWeight:"bold"}}>OR</span><hr className='smallhr'></hr>
          </div>
          <a href='https://www.facebook.com'><p className='tplogin'>Log in with Facebook</p></a>
          <p className='smallfont'>Forgot Password?</p>
        </div>       
      </div>

      <div className='action-signup'>
        <p><h4>Dont have an account?</h4> 
          <span style={{color:"dodgerblue", fontWeight:"bold"}}>
            <button className='signupbutton'><a href="/RestSignup">Signup</a></button>
            </span></p>
      </div>
      </div>
      <div className='login-container'>
        <h2 className='resheader'>Customer login</h2>
      <div className='login-details'>
        <div className='input-container'>
        <label className="form__label" for="username">Username</label>
          <input type='text' placeholder='username'
          name='username'
          onChange={handleChange}
          />
          <br/>
          
          <br/>
          <label className="form__label" for="password">Password </label>
          <input type='password' placeholder='Password'
          name='password'
          onChange={handleChange}
          />
          <br/>
          
          <button className='login' onClick={signin}>Log in</button>
          <div className='breaker'>
          <hr className='smallhr'></hr><span style={{verticalAlign:"top", opacity:"0.5", fontWeight:"bold"}}>OR</span><hr className='smallhr'></hr>
          </div>
          <a href='https://www.facebook.com'><p className='tplogin'>Log in with Facebook</p></a>
          <p className='smallfont'>Forgot Password?</p>
        </div>
        
      </div>
      <div className='action-signup'>
        <p>Dont have an account? 
          <span style={{color:"dodgerblue", fontWeight:"bold"}}>
            <button className='signupbutton'><a href="/Signup">Signup</a></button>
            </span></p>
            
      </div>
      

      </div>
      </div>

  )
}


