import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const Signup = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleSignup = () => {
    // Perform any sign-up logic (e.g., API call)
    navigate("/"); // Redirect to Main Page
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: "url('./images/loginbg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: { lg: "630px", md: "550px", sm: "550px", xs: "300px" },
          bgcolor: "white",
          padding: { xs: "1rem", sm: "3rem" },
          paddingTop: { md: "4rem" },
          paddingBottom: { md: "4rem" },
          borderRadius: "20px",
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box width="100%">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="p" fontWeight="600" fontSize="32px">
              Create an Account
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
              Create an account to continue
            </Typography>
          </Box>

          {/* Email Input */}
          <Box sx={{ textAlign: "left", marginBottom: "12px", gap: "10px" }}>
            <Typography fontWeight="500" sx={{ color: "#202224", opacity: "0.6", fontSize: "18px" }}>
              Email address:
            </Typography>
            <TextField
              fullWidth
              placeholder="example@gmail.com"
              size="small"
              sx={{
                border: "1px solid #D8D8D8",
                borderRadius: "8px",
                backgroundColor: "#F1F4F9",
              }}
            />
          </Box>

          {/* Username Input */}
          <Box sx={{ textAlign: "left", gap: "10px", marginTop: "2rem" }}>
            <Typography fontWeight="500" sx={{ color: "#202224", opacity: "0.6", fontSize: "18px" }}>
              Username:
            </Typography>
            <TextField
              fullWidth
              placeholder="username"
              size="small"
              sx={{
                border: "1px solid #D8D8D8",
                borderRadius: "8px",
                backgroundColor: "#F1F4F9",
              }}
            />
          </Box>

          {/* Password Input */}
          <Box sx={{ marginTop: "2rem" }}>
            <Typography fontSize="18px" fontWeight="500" sx={{ color: "#202224", opacity: "0.6" }}>
              Password
            </Typography>
            <TextField
              fullWidth
              type="password"
              size="small"
              sx={{
                border: "1px solid #D8D8D8",
                borderRadius: "8px",
                backgroundColor: "#F1F4F9",
              }}
            />
          </Box>

          {/* Terms and Conditions */}
          <Box sx={{ textAlign: "left", marginBottom: "20px" }}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="I accept terms and conditions" sx={{ color: "#202224", opacity: "0.6" }} />
          </Box>

          {/* Sign Up Button */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px", gap: "20px" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ padding: "10px", fontSize: "16px", textTransform: "none", width: { md: "350px", sm: "300px", xs: "250px" } }}
              onClick={handleSignup} // Navigate to Main Page on click
            >
              Sign Up
            </Button>

            {/* Already have an account? */}
            <Typography fontSize="18px" opacity="0.6">
              Already have an account?{" "}
              <Link to="/logout" style={{ textDecoration: "none", color: "#1A73E8" }}>
                Login
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
