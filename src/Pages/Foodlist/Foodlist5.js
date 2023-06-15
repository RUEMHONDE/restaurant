import React, { useEffect, useState } from 'react';
import './foodlist.css';
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
export default function FoodList5() {
  const [result, setResult] = useState(0);
  const [cartitems, setCartitems] = useState([]);
  const [itemCount, setItemCount] = React.useState(0);
  let Sum = 0;
  let items = [];
  useEffect(() => {
    if (cartitems.length != 0) {
      cartitems.map((elem) => {
        Sum = Sum + elem.price;
        return Sum;
      });
      setResult(Sum);
    } else {
      setResult(Sum);
    }
  }, [cartitems]);

  const Additem = (item) => {
    setItemCount(itemCount + 1);

    setCartitems([...cartitems, item]);
  };

  const removeitem = (item) => {
    setItemCount(Math.max(itemCount - 1, 0));
    setCartitems(cartitems.filter((e) => e.price != item.price));
  };
  const products = [
    {
      link:"https://thumbs.dreamstime.com/b/big-burger-isolated-white-43062448.jpg",
      product:"single cheese",
      price: 35
  },
  {
    link:"https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80",
    product:"double cheese",
    price: 55
},
{
  link:"https://www.shutterstock.com/image-photo/delicious-grilled-burgers-260nw-1146199442.jpg",
  product:"burger& chips",
  price: 42
},
{
  link:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80",
  product:"D/extra cheese",
  price: 60
},
{
  link:"https://thumbs.dreamstime.com/b/big-burger-isolated-white-43062448.jpg",
  product:"combo burger",
  price: 65
},
{
  link:"https://media.istockphoto.com/id/1448322070/photo/fresh-tasty-burger-on-wood-table.webp?b=1&s=170667a&w=0&k=20&c=0x4WY-pc5e0f1qeM2Rs9im8CELp4F8k4xtCGaE29t24=",
  product:"Meaty",
  price: 70
},
{
  link:"https://media.istockphoto.com/id/1374704595/photo/veggie-burger-with-salad-in-bun-served-on-wooden-board.jpg?s=1024x1024&w=is&k=20&c=nHm2jXf1fQ1GtA45p5o2W-xe_emFB0L0RNA_vxTpHfg=",
  product:"combo burger",
  price: 45
},
];

  return (
    <>
   
    <div className='food'>
       
        {products.map((elem)=>{
      return ( <div className='burgers' >
      <div><img src={elem.link} style={{width:"200px", height:"150px"}}></img>
      <h2>{elem.product}</h2>
      <h2>Price: {elem.price}</h2>
      <button className='add-item' onClick={()=>{
        Additem(elem)
      }}>Add To Cart</button>
      <button className='remove-item' onClick={removeitem}>Remove</button>
      </div> <br></br>
      
</div>)
})}       
           {/* <ShoppingCartIcon /> */}             
    </div>  
    <div> 
    <div className="items">Number of items={itemCount}</div><span><h2>Total cost: {result}</h2></span>
    </div>
    </>
  )
}

