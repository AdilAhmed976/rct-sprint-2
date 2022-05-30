import React from "react";
import axios from 'axios'
import AddProduct from './AddProduct';
import Pagination from './Pagination'
import Product from "./Product";
import { Flex } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;
  const [data,setdata] = React.useState([])
   
  axios.get('http://localhost:8080/products')
  .then(r=>{

// setdata(r.data)
  })

  return (
    <Flex>
      {/*  AddProduct */}

        <AddProduct/>

      <Grid>{/* List of Products */}

        <Product/>

      </Grid>

      {/* Pagination */}
      <Pagination/>
    </Flex>
  );
};

export default Products;
