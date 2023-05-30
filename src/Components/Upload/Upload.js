import React, {useState} from 'react';
import { Box } from '@mui/system';
import { InputLabel } from '@mui/material';
import "./General.css";
import axios from 'axios';
export default function General(props) {
  const [selectedFile, setFile] = useState();
  const [productData, setProductData] = useState({});
  const handleChange = (e)=>{
    props.state.setProductData((prevState) =>({
      ...prevState, [e.target.name]: e.target.value
    }));
  };
  const changeFile = (e)=>{
    setFile(e.target.files[0]);
  }
  var formData = new FormData();
  const upload = (e)=>{
    formData.append("myFile", selectedFile);
    //calling an Api
    axios.post("http://localhost:8080/upload", formData).then((resp)=>{
      console.log(resp);
    })
    };
  return (
    <div style={{display:"flex"}}>
        <Box 
        sx={{
            width: "50%",
            height: "100%",
            border: "1px solid white",
            marginLeft:"auto",
            marginRight:"auto",
            backgroundColor: 'white',
            padding: "10px",
            borderRadius:"8px"}}>
            <h3>Basic Info</h3>
            <InputLabel>
            <span style={{color:"red"}}>*</span>Product Name
            </InputLabel>
            <input type="text" className='product-input' placeholder='product name'
            onChange={handleChange}
            name="Name"></input>
            <InputLabel>
            <span style={{color:"red"}}>*</span>Price
            </InputLabel>
            <input type="number" className='product-input' placeholder='$ price'
            onChange={handleChange} name="Price"></input>
            <InputLabel>
            <span style={{color:"red"}}>*</span>Quantity
            </InputLabel>
            <input type="number" className='product-input-desc' placeholder='Quantity'
            onChange={handleChange} name="Quantity"></input>
            <InputLabel>
            <span style={{color:"red"}}>*</span>Category
            </InputLabel>
            <select className='category-dropdown' onChange={handleChange} name="Category">
               <option selected value=""></option>
                <option value="Burger">Burgers</option>
                <option value="Pizza">Pizza</option>
                
              
            </select>
            <button className='action-img save' 
             onClick={()=>{props.state.setValue("2");
             console.log(props.state.productData);
         }}
      >Next</button>
            </Box>
            <div className='chart-container' style={{width: "50%", height: "395px"}}>
                <h3>Media</h3>
                <input type="file" className='upload' name="myFile" onChange={changeFile}></input>
                <button className='action-img save' 
             onClick={upload}
      >Upload</button>
            </div>
    </div>
  );
}
