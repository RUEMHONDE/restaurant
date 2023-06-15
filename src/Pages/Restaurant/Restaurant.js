import React from 'react';
import { useLocation } from 'react-router-dom';
export default function Restaurant(props) {
  return (
    <div>
        <img src={props.state.foodlist}/>
    </div>
  )
}
