import logo from './logo.svg';
import React from 'react';
import './App.css';
import { createContext } from 'react';
import Signup from './Components/Signup/Signup';
import Foodlist from './Pages/Foodlist/Foodlist';
import Landing from './Pages/Landing/Landing';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Stock from './Pages/Stock/Stock';
import Login from './Components/Login/Login';
import RestSignup from './Components/Signup/RestSignup';
import Restaurantlist from './Pages/Restaurantlist/Restaurantlist';
import Restaurant from './Pages/Restaurant/Restaurant';
import Sidenav from './Components/Sidenav/Sidenav';
import { searchContext } from './Content/searchContent';

function App() {
  const [search, updateSearch] = useState("");
  const [result, setResult] = useState(0);
  const [itemCount, setItemCount] = React.useState(0);
  const [isLoggedin, setLoggedin] = useState(true);
      useEffect(() =>{
        if(localStorage.getItem("token") !=null) {
          setLoggedin(true);
        }
      }, []);
  return (
    <searchContext.Provider
    value={{ searchVariable: search, updateSearchVariable: updateSearch }}
  >
    <BrowserRouter>
  
    {isLoggedin && ( 
    <Routes>
    <Route path="/" element={<Landing />}>
    <Route path="/foodlist" element={<Foodlist/>}></Route>
    <Route path="/stock" element={<Stock/>}></Route>
    <Route path='/restaurantlist' element={<Restaurantlist/>}></Route>
    <Route path='/restaurant' element={<Restaurant/>}></Route>
    </Route>
     </Routes>
    
    )}
    {!isLoggedin && (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/restsignup' element={<RestSignup/>}></Route>
    </Routes>
    )}
    </BrowserRouter>
    </searchContext.Provider>
    );
  
}

export default App;
