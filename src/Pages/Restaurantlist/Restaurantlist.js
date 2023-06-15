import React from 'react';
import './restaurantlist.css';
import {useNavigate} from 'react-router-dom';
export default function Restaurantlist() {
  const navigate = useNavigate();
  const  openRestaurant = (restaurantid) =>{
    navigate("/Restaurant", {state:{restaurantid} });
  };
  const restaurantarr = [
    {
    "Name":"Archipelago",
    "Addr":"34 Seventh Ave",
    "foodlist": "./Foodlist",
    "Time":"06:30- 21:30",
    "restaurantid": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
  {
    "Name":"Archies",
    "Addr":"176 S/Ziyaphapa",
    "foodlist": "./Foodlist2",
    "Time":"06:30- 23:30",
    "restaurantid": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgx0-r6XfWEWRfD9E16YsdOMXX0ZvqGfLugYOqwTX&s",
  },
  {
    "Name":"Hampshire",
    "Addr":"25 G/Silund",
    "foodlist": "link3",
    "Time":"06:30- 22:30",
    "restaurantid": "https://www.shutterstock.com/image-photo/friends-having-pasta-dinner-home-260nw-1206985765.jpg",
  },
  {
    "Name":"Fat Chef",
    "Addr":"45 BizosSt",
    "foodlist": "link4",
    "Time":"06:30- 22:30",
    "restaurantid": "https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/16:9/w_2560%2Cc_limit/Savage-2019-top-50-busy-restaurant.jpg",
  },
  {
    "Name":"Creative",
    "Addr":"Cnr4TH/Smith",
    "foodlist": "link5",
    "Time":"06:30- 23:30",
    "restaurantid": "https://images.pexels.com/photos/1819669/pexels-photo-1819669.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
]
  return (
    <>
    <div className='heading'>
        <div><h2>Restaurant List</h2></div>
        <div style={{marginRight:"50px", marginTop:"10px"}}><p><h2>Click Any Restaurant to order</h2></p></div>
      </div>
    <div className='restaurants'>
       
        {restaurantarr.map((elem)=>{
      return ( <div className='restaurant' >
      <div><img src={elem.restaurantid} style={{width:"200px", height:"150px"}}
       onClick={() => navigate("/Foodlist")}
      ></img>
      <h2>Name: {elem.Name}</h2>
      <h3>Addr:{elem.Addr}</h3>
      <h4>Time:{elem.Time}</h4>
      </div> <br></br>
      
</div>)
})}    
   </div>
        </>
  )
}
