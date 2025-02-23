import { Box} from "@mui/material";
import Navbar from "./Navbar";
import React from "react";
import AddContact from "./Contact/AddContact"
function AddCon() {
  return (
    <>
      <Box flex={6} bgcolor="#ECF0EF" p="0">
        <Navbar />
        <Box width='100%'>
        <AddContact/>
        </Box>
      </Box>
    </>
  );
}

export default AddCon;