import { Box, Stack } from "@mui/material";
import Navbar from "./Navbar";
import Pricing from "./Pricing/Pricing";

function PricingPage() {
  return (
    <>
      <Box flex={6} bgcolor="#ECF0EF">
        <Navbar />
        <Pricing />
      </Box>
    </>
  );
}

export default PricingPage;