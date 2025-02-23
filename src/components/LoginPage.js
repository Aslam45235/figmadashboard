import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const navigate = useNavigate(); // Initialize navigation

  const handleDashboardClick = () => {
    navigate("/notfound"); // Navigate to Main Page
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh", // Ensure the box takes at least the full viewport height
          backgroundImage: "url('./images/loginbg.svg')",
          backgroundSize: "cover", // Ensures the background image fully covers the area
          backgroundPosition: "center", // Keeps the image centered
          backgroundAttachment: "fixed", // Helps maintain the background position even when scrolling
          width: "100%", // Makes sure the Box takes full width
        }}
      >
        <Box
          sx={{
            width:{lg:"630" ,md:"550px", sm:"550px" , xs:"300px"},
            bgcolor: "white",
            padding: { xs: "1rem", sm: "3rem" },
              paddingTop: { md: "4rem" },
              paddingBottom: { md: "4rem" },
              borderRadius: "20px",
              boxShadow: 3,
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
          }}
        >
          <Box width="100%" >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="p" fontWeight="600" fontSize="32px">
                Login to Account
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  marginTop: "15px",
                  pb: "30px",
                  fontSize: { xs: "15px", textAlign: "center", md: "18px" },
                }}
              >
                Please enter your email and password to continue
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "left",
                marginBottom: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography
                variant="p"
                fontWeight="500"
                sx={{ color: "#202224", opacity: "0.6", fontSize: "18px" }}
              >
                Email address:
              </Typography>
              <TextField
                fullWidth
                placeholder="esteban_schiller@gmail.com"
                size="small"
                sx={{
                  border: "1px solid #D8D8D8",
                  borderRadius: "8px",
                }}
                InputProps={{
                  style: {
                    fontSize: "20px",
                    color: "#A6A6A6",
                    backgroundColor: "#F1F4F9",
                  },
                }}
              />
            </Box>

            

            <Box sx={{  marginTop:"2rem" }}>
              <Typography
                variant="p"
                fontSize="18px"
                fontWeight="500"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  color: "#202224",
                  opacity: "0.6",
                }}
              >
                Password
                <Link
                  href="#"
                  sx={{
                    fontSize: "18px",
                    textDecoration: "none",
                    color: "#202224",
                    opacity: "0.6",
                  }}
                >
                  Forget Password?
                </Link>
              </Typography>
              <TextField
                fullWidth
                type="password"
                variant="outlined"
                size="small"
                sx={{
                  border: "1px solid #D8D8D8",
                  borderRadius: "8px",
                }}
                InputProps={{
                  style: {
                    fontSize: "20px",
                    color: "#A6A6A6",
                    backgroundColor: "#F1F4F9",
                  },
                }}
              />
            </Box>

            <Box sx={{ textAlign: "left" }}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember Password"
                sx={{ marginBottom: "20px", color: "#202224", opacity: "0.6" }}
              />
            </Box>
            <Box
              sx={{
                maxWidth: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "20px",
                alignItems: "center",
                marginTop: "40px",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  padding: "10px",
                  fontSize: "16px",
                  textTransform: "none",
                  width:{md:"350px" , sm:"300px", xs:"250"},
                }}
                onClick={handleDashboardClick}
              >
                Sign In
              </Button>
              <Typography
                variant="p"
                sx={{
                  fontSize: "18px",
                  opacity: "0.6",
                  letterSpacing: "-0.06px",
                }}
              >
                Don’t have an account?{" "}
                <Link
                  href="/signup"
                  sx={{ textDecoration: "none", color: "#1A73E8" }}
                >
                  Create Account
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
