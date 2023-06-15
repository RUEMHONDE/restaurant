import React from 'react';
import "./signup.css";
import axios from "axios";
import { useState } from 'react';
export default function Signup() {
    const [signData, setsignData] = useState({});
    const [restformData, setrestformData] = useState({});
    const handleChange = (e)=>{
        setsignData((prev)=>({
          ...prev, [e.target.name]:e.target.value,
        }))
      };

      const handleSubmit = async () =>{
        const resp = await axios.post("http://localhost:8080/signup", signData);
        if(resp.data.status==200)
        {
          console.log("signedup successfully");
          localStorage.setItem("token", resp.data.token);
        }
           
      };
       
  return (
    <div className="form">
          <div className="form-body">
          <form onSubmit={handleSubmit}>
            <h2>Customer Sign up</h2>
              <div className="username">
                  <label className="form__label" for="userame">User Name </label>
                  <input className="form__input" type="text" id="username" placeholder="User Name"
                  onChange={handleChange}/>
                  
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email Add</label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"
                  onChange={handleChange}/>
              </div>
              <div className="mobilenr">
                  <label className="form__label" for="mobile-number">Mobile Nr </label>
                  <input  type="number" name="" id="mobile"  className="form__input"placeholder="Mobile"
                  onChange={handleChange}/>
                
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"
                  onChange={handleChange}/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm  </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"
                  onChange={handleChange}/>
              </div>
              </form>
          </div>
          <div class="footer">
              <button type="submit" onClick={handleSubmit}>Register</button>
          </div>
      </div>      
  )
}

// import React, { Component, useState } from "react";

// export default function SignUp() {
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userType, setUserType] = useState("");
//   const [secretKey, setSecretKey] = useState("");

//   const handleSubmit = (e) => {
//     if (userType == "Admin" && secretKey != "AdarshT") {
//       e.preventDefault();
//       alert("Invalid Admin");
//     } else {
//       e.preventDefault();

//       console.log(fname, lname, email, password);
//       fetch("http://localhost:5000/register", {
//         method: "POST",
//         crossDomain: true,
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//         body: JSON.stringify({
//           fname,
//           email,
//           lname,
//           password,
//           userType,
//         }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data, "userRegister");
//           if (data.status == "ok") {
//             alert("Registration Successful");
//           } else {
//             alert("Something went wrong");
//           }
//         });
//     }
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <form onSubmit={handleSubmit}>
//           <h3>Sign Up</h3>
//           <div>
//             Register As
//             <input
//               type="radio"
//               name="UserType"
//               value="User"
//               onChange={(e) => setUserType(e.target.value)}
//             />
//             User
//             <input
//               type="radio"
//               name="UserType"
//               value="Admin"
//               onChange={(e) => setUserType(e.target.value)}
//             />
//             Admin
//           </div>
//           {userType == "Admin" ? (
//             <div className="mb-3">
//               <label>Secret Key</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Secret Key"
//                 onChange={(e) => setSecretKey(e.target.value)}
//               />
//             </div>
//           ) : null}

//           <div className="mb-3">
//             <label>First name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="First name"
//               onChange={(e) => setFname(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Last name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Last name"
//               onChange={(e) => setLname(e.target.value)}
//             />
//           </div>

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

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">
//               Sign Up
//             </button>
//           </div>
//           <p className="forgot-password text-right">
//             Already registered <a href="/sign-in">sign in?</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

