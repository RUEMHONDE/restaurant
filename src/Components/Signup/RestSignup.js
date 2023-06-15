import React from 'react'
import axios from "axios";
import './signup.css';
import { useState } from 'react';
export default function RestSignup() {
    const [restformData, setrestformData] = useState({});
    const handleChange = (e)=>{
        setrestformData((prev)=>({
          ...prev, [e.target.name]:e.target.value,
        }))
      };

      const handleSubmit = async () =>{
        const resp = await axios.post("http://localhost:8080/restsignup", restformData);
        if(resp.data.status==200)
        {
          console.log("Signedup successfully");
          localStorage.setItem("token", resp.data.token);
        }
       
      }

  return (
    <div className="form">
          <div className="form-body">
            {/* <form onSubmit={handleSubmit}> */}
            <h2>Restaurant Sign up</h2>
              <div className="username">
                  <label className="form__label" for="userame">Userame </label>
                  <input className="form__input" type="text" id="userName" placeholder="userame"
                  onChange={handleChange}/>
                
              </div>
              
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"
                  onChange={handleChange}/>
                  
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"
                  onChange={handleChange}/>
                 
              </div>
              {/* </form> */}
          </div>
        <div class="footer">
        <button type="submit" onClick={handleSubmit}>Register</button>              
         </div>
          
       </div>   
  )
}
