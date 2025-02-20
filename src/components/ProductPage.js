import { Box} from "@mui/material";
import Navbar from "./Navbar";
import PromoBanner from "./Products page/PromoBanner";
import React from "react";
import ProductCard from "./Products page/ProductCard";



function ProductPage() {
  return (
    <>
      <Box flex={6} bgcolor="#ECF0EF">
        <Navbar />
        <PromoBanner/>
        <ProductCard  />
      </Box>
    </>
  );
}

export default ProductPage;