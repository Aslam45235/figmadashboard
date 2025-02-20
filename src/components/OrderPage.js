import { Box} from "@mui/material";
import Navbar from "./Navbar";
import React from "react";
import OrderTable from "./OrderTable/OrderTable";



function OrderPage() {
  return (
    <>
      <Box flex={6} bgcolor="#ECF0EF">
        <Navbar />
        <OrderTable/>
      </Box>
    </>
  );
}

export default OrderPage;