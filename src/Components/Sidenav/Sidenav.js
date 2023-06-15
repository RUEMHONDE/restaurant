import React from 'react';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import Foodlist from '../../../src/Pages/Foodlist/Foodlist';
import Restaurantlist from '../../Pages/Restaurantlist/Restaurantlist';
import {NavLink} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import './sidenav.css';
export default function Sidenav() {
  const [itemCount, setItemCount] = React.useState(1);
  const navigate = useNavigate();
  return (
    <div className='side-nav'>
     {/* <Sidenav itemCount={itemCount}/> */}
       
        
        <div className='food-links'>
            <ul className='food-ul'>
              {/* <NavLink className="navlink" to="/foodlist"  style={({ isActive, isPending })=>{
                return {
                  
                  color: isActive ? "red" : "black",
                }
              }}>
                {" "}
              <li>
                  <AppsOutlinedIcon /><span className='menu-item'>Food List</span>
                </li>
              </NavLink> */}
              <NavLink className="navlink" to="/stock"  style={({ isActive, isPending })=>{
                return {
                  
                  color: isActive ? "red" : "black",
                }
              }}>
                <li>
                <AppsOutlinedIcon /><span className='menu-item'>Add Products</span>
                </li>
                </NavLink>
                <NavLink className="navlink" to="/restaurantlist"  style={({ isActive, isPending })=>{
                return {
                  
                  color: isActive ? "red" : "black",
                }
              }}>
                {" "}
              <li>
                  <AppsOutlinedIcon /><span className='menu-item'>Restaurant List</span>
                </li>
              </NavLink>
              <button className='signout' onClick={() =>{
            localStorage.removeItem("token");
            navigate("/Login");
          }}>Sign Out</button>             
            </ul>
            
        </div>
    </div>
  )
}
