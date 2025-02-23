import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import ProductPage from "./components/ProductPage";
import OrderPage from "./components/OrderPage";
import ProductStock from "./components/ProductStock";
import PricingPage from "./components/PricingPage";
import ContactPage from "./components/ContactPage";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";
import AddContact from "./components/Contact/AddContact";
import NotFoundPage from "./components/NotFoundPage";

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito Sans", "serif"].join(","),
  },
  components: {
    MuiBox: {
      styleOverrides: {
        root: {
          padding: "0px !important",
        },
      },
    },
  },
});

function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/logout" || location.pathname === "/signup" || location.pathname === "/notfound";

  return (
    <Box>
      <Stack direction="row" justifyContent="flex-start" alignItems="stretch">
        {!isLoginPage && <Sidebar />}
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/product" element={<ProductStock />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/logout" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/addcontact" element={<AddContact />} />
            <Route path="/notfound" element={<NotFoundPage />} />
          </Routes>
        </Box>
      </Stack>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
