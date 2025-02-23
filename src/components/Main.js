import { Box } from "@mui/material";
import Navbar from "./Navbar";
import StatCard from "./StatCard";
import SalesChart from "./SalesChart";
import DealsDetails from "./DealsDetails";

function Main() {
  return (
    <>
      <Box flex={6} bgcolor="#ECF0EF">
        <Navbar />
        <StatCard />
        <SalesChart/>
        <DealsDetails/>
      </Box>
    </>
  );
}

export default Main;
