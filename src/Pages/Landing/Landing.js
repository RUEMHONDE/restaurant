import React from 'react';
import './landing.css';
import Sidenav from '../../Components/Sidenav/Sidenav';
import Stock from '../Stock/Stock';
import Header from '../../Components/Header/Header';
import Foodlist from '../Foodlist/Foodlist';
import {Outlet} from 'react-router-dom';
import Signup from '../../Components/Signup/Signup';
export default function Landing() {
  return (
    <div>
      <div className='landing-container'>
            <div className='sidenav'>
                <Sidenav/>
            </div>
            <div className='content-container'>
                <Header/>
                {" "}
                {/* <Stock/> */}
                <div className="content">
                    <Outlet/>
                </div>
            </div>
        </div>

    </div>
  )
}
