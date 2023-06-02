import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import Signup from './Components/Signup/Signup';
import Foodlist from './Pages/Foodlist/Foodlist';
import Landing from './Pages/Landing/Landing';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Stock from './Pages/Stock/Stock';
import Login from './Components/Login/Login';
import { searchContext } from './Content/searchContent';
import AddProducts from './Components/AddProduct/AddProducts';

function App() {
  const [search, updateSearch] = useState("");
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
    <Route path='/addproducts' element={<AddProducts/>}></Route>
    </Route>
     </Routes>
    
    )}
    {!isLoggedin && (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    )}
    </BrowserRouter>
    </searchContext.Provider>
    );
  
}

export default App;
