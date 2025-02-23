import { Box} from "@mui/material";
import Navbar from "./Navbar";
import React from "react";
import OrderTable from "./OrderTable/OrderTable";



function OrderPage() {
  return (
    <>
      <Box flex={6} bgcolor="#ECF0EF" p="0">
        <Navbar />
        <Box width='100%'>
        <OrderTable />

        </Box>
      </Box>
    </>
  );
}

export default OrderPage;