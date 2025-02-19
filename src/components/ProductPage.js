import { Box} from "@mui/material";
import Navbar from "./Navbar";
import PromoBanner from "./Products page/PromoBanner";

function ProductPage() {
  return (
    <>
      <Box flex={6} bgcolor="#ECF0EF">
        <Navbar />
        <PromoBanner/>
      </Box>
    </>
  );
}

export default ProductPage;