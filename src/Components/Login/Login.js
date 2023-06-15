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
    
    const handleChange = (e)=>{
      setformData((prev)=>({
        ...prev, [e.target.name]:e.target.value,
      }))
    };
  

    const signin = async ()=>{
      console.log(formData);
      const resp = await axios.post("http://localhost:8080/login", formData);
      if(resp.data.status==200)
      {
        console.log("loggedin successfully");
        localStorage.setItem("token", resp.data.token);
      }
    };

    const restsignin = async ()=>{
      // console.log(formData);
      const resp = await axios.post("http://localhost:8080/restlogin", signData);
      if(resp.data.status==200)
      {
        console.log("loggedin successfully");
        localStorage.setItem("token", resp.data.token);
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
          {/* <input type='text' placeholder='Email'
          name='email'
          onChange={handleChange}
          ></input> */}
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

{/* // import React, { Component, useState } from "react";

// export default function Login() { */}
{/* //   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(e) { */}
{/* //     e.preventDefault();

//     console.log(email, password);
//     fetch("http://localhost:3000/login-user", { */}
//       method: "POST",
//       crossDomain: true,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "userRegister");
//         if (data.status == "ok") {
//           alert("login successful");
//           window.localStorage.setItem("token", data.data);
//           window.localStorage.setItem("loggedIn", true);

//           window.location.href = "./userDetails";
//         }
//       });
//   }

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <form onSubmit={handleSubmit}>
//           <h3>Sign In</h3>

//           <div className="mb-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <div className="custom-control custom-checkbox">
//               <input
//                 type="checkbox"
//                 className="custom-control-input"
//                 id="customCheck1"
//               />
//               <label className="custom-control-label" htmlFor="customCheck1">
//                 Remember me
//               </label>
//             </div>
//           </div>

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </div>
//           <p className="forgot-password text-right">
//             <a href="/sign-up">Sign Up</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

