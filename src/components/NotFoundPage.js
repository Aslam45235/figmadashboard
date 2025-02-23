import React from "react";
import { Card, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {

  const navigate = useNavigate(); // Initialize navigation

  const handleDashboardClick = () => {
    navigate("/"); // Navigate to Main Page
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url('./images/loginbg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden", 
        padding: 2, 
      }}
    >
      <Card
        sx={{
          textAlign: "center",
          padding: { xs: "2rem", sm: "3rem", md: "4rem" },
          borderRadius: 3,
          boxShadow: 3,
          maxWidth: "630px",
          maxHeight: "735px", 
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%", 
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="./images/404.svg" 
            alt="404 Error"
            style={{
              width: "100%",
              maxWidth: "390px",
              marginBottom: { xs: "10px", sm: "15px" },
            }}
          />
          <Typography
            variant="body1"
            sx={{
              fontFamily: '"Nunito Sans", sans-serif',
              fontSize: { xs: "24px", sm: "28px", md: "32px" },
              lineHeight: { xs: "34px", sm: "38px", md: "43.65px" }, 
              letterSpacing: "-0.11px",
              textAlign: "center",
              width: "100%",
              marginBottom: { xs: "10px", sm: "15px", md: "20px" },
              maxWidth: "418px",
              marginTop: { xs: "30px", sm: "50px", md: "98px" },
            }}
          >
            Looks like you’ve got lost...
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginTop: { xs: "5px", sm: "10px", md: "20px" },
              width: "100%",
              maxWidth: "418px",
            }}
            onClick={handleDashboardClick}
          >
            Back to Dashboard
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default NotFoundPage;
