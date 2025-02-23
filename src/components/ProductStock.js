import { Box} from "@mui/material";
import Navbar from "./Navbar";
import React from "react";
import Stock from "./ProductStock/Stock";



function ProductStock() {
  return (
    <>
      <Box flex={6} bgcolor="#ECF0EF">
        <Navbar />
        <Stock />
      </Box>
    </>
  );
}

export default ProductStock;