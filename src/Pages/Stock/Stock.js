import React, { useContext, useEffect, useState } from 'react';
import './stock.css';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Box } from '@mui/material';
import axios from 'axios';

const columns = [
  { field: 'Product Name', headerName: 'Product Name', width: 130 },
  { field: 'Quantity', headerName: 'Quantity', width: 130 },
  { field: 'Price', headerName: 'Price', type: 'number', width: 130 },
  {
    field: 'Description',
    headerName: 'Description',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'Picture',
      headerName: 'Picture',
      width: 200,
      renderCell: (params)=>{
        console.log(params.row.Picture)
        return (
          <>
          <Avatar sx={{
            width:"200px",
            height: "70px"
          }} src={params.row.Picture}/>
          </>
        )
      }
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  
];

  
export default function Stock() {
  const [selectedFile, setFile] = useState();
  const [productData, setProductData] = useState({});
  const addProductAPI = async ()=>{
    const resp = await axios.post("http://localhost:8080/addproduct", productData);
    console.log(resp.data);
    console.log("data");
  };
  const handleChange = (e)=>{
    setProductData((prevState) =>({
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
    <div className='productslist-container' style={{display:"flex"}}>
    <h2 style={{marginTop: 120}}>Products List </h2>
        {rows && (
        <Box 
        sx={{
            width: 1100,
            height: 1000,
            border: "1px solid white",
            marginLeft:"auto",
            marginRight:"auto",
            backgroundColor: 'white',
            borderRadius:"8px"}}>
            
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
     <button className='action-img save' onClick={addProductAPI}>Add Product</button>
    </Box>
        )}
   <div className='chart-container' style={{width: "50%", height: "395px"}}>
   <h3>Media</h3>
   <input type="file" className='upload' name="myFile" onChange={changeFile}/>
   <button className='action-img save' 
onClick={upload}
>Upload</button>
  </div> 
  {/* ); */}
  </div>

   
  )
  
};

