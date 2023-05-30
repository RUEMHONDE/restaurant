import React, { useContext, useEffect, useState } from 'react';
import { Avatar, Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';
import { searchContext } from '../../Content/searchContent';
const columns: GridColDef[] = [
  { field: 'Name', headerName: 'Product Name', width: 130 },
    { field: 'Category', headerName: 'Category', width: 130 },
    {
      field: 'Quantity',
      headerName: 'Quantity',
      type: 'number',
      width: 90,
    },
    {
      field: 'Price',
      headerName: 'Price',
      type: 'number',
      width: 90,
    },
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
  
export default function Stock() {
    const [category, setCategory] = React.useState('');
    const [searchValue, setSearchValue] = useState("");
    const [temp, setTemp] = useState();
    const [rows, setRows] = useState();

  const {searchVariable, updateSearchVariable} = useContext(searchContext);
  const handleChange = (event) => {
    setCategory(event.target.value); 
  };
  
  const filter = async() => {
    const resp = await axios.post("http://localhost:8080/filterproductsbycategory", 
    {category: category});
    var arr = resp.data;
    var c = 1;
    arr.forEach((elem) =>{
      elem.id = c++;
    });
    setRows(arr);
  };

  const search = ()=>{
    console.log(searchVariable);
    setRows(rows.filter((elem)=>{
      return (elem.Name.toLowerCase().includes(searchVariable)||
      elem.Category.toLowerCase().includes(searchVariable) ||
      elem.ID.toLowerCase().includes(searchVariable));
    }));  
  };

const getProductList = async () =>{
  const resp = await axios.post("http://localhost:8080/getproducts");
    var arr = resp.data;
  var c = 1;
  arr.forEach((elem) =>{
    elem.id = c++;
  });
 console.log(arr);
  setRows(arr);
  setTemp(arr);
};

  useEffect(() =>{
    getProductList();
  },[]);

  useEffect(() =>{
    if(category=="")
    {

    }else{
    filter();}
  }, [category]);

  useEffect(() =>{
    if(searchVariable!=="")
    {
      search();
    }else{
      console.log(temp);
    setRows(temp);
  }}, [searchVariable]);

  return (
   
    <div className='productslist-container'>
        <h2>Products List </h2>
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
            
        <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Burgers">Burgers</MenuItem>
          <MenuItem value="Pizza">Pizza</MenuItem>
         
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>

      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
        </Box>
         )};
    </div>
   
  )
};

