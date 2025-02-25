import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";

const Pricing = () => {
  return (
    <>
      <Box sx={{ p: 4 }}>
        <Typography
          variant="p"
          color="initial"
          sx={{ fontSize: "32px", lineHeight: "43px", fontWeight: "600" }}
        >
          Pricing
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 2, }} >
          {[
            { title: "Basic", price: "$14.99", buttonColor: "primary" },
            { title: "Standard", price: "$49.99", buttonColor: "primary" },
            { title: "Premium", price: "$89.99", buttonColor: "secondary" },
          ].map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  borderRadius: "12px",
                  boxShadow: 3,
                  padding:"40px",
                  backgroundImage: "url('/images/Bg.svg')", // Correct way to set background
                  backgroundSize: "720px", // Ensures it covers the card properly
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <CardContent>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    gap="8px"
                    mb="30px"
                  >
                    <Typography
                      variant="p"
                      fontWeight="700"
                      sx={{
                        fontFamily: "Nunito Sans",
                        fontSize: "22px",
                        lineHeight: "30.01px",
                        letterSpacing: "0px",
                      }}
                    >
                      {plan.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      sx={{
                        fontFamily: "Nunito Sans",
                        fontSize: "16px",
                        lineHeight: "21.82px",
                        letterSpacing: "0px",
                        textAlign: "center",
                      }}
                    >
                      Monthly Charge
                    </Typography>
                    <Typography
                      variant="h4"
                      color="primary"
                      fontWeight="700"
                      sx={{
                        my: 2,
                        fontFamily: "Nunito Sans",
                        fontSize: {
                          xs: "2rem", // 32px on extra small screens
                          sm: "2.5rem", // 40px on small screens
                          md: "2.875rem", // 46px on medium and above
                        },
                        lineHeight: "62.74px",
                        letterSpacing: "0px",
                      }}
                    >
                      {plan.price}
                    </Typography>
                  </Box>

                  <Divider inset />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mt: "40px",
                      gap: "25px",
                      mb: "40px",
                    }}
                  >
                    {[
                      "Free Setup",
                      "Bandwidth Limit 10 GB",
                      "20 User Connection",
                      "Analytics Report",
                      "Public API Access",
                      "Plugins Integration",
                      "Custom Content Management",
                    ].map((feature, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        fontSize="18px"
                        sx={{
                          color:
                            index === 1 && idx <= 4 
                              ? "#212121"
                              : index === 2 
                              ? "#212121"
                              : idx >= 3
                              ? "gray"
                              : "#212121",
                          fontWeight: "500",
                          my: 1,
                        }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>

                  <Divider inset />

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "24px",
                      mb: "40px",
                      mt: "40px",
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        mt: 2,
                        px: 4,
                        borderRadius: "50px",
                        width: "180px",
                        height: "60px",
                        fontSize: "16px",
                        color:
                          plan.buttonColor === "secondary"
                            ? "white"
                            : "#4880FF",
                        backgroundColor:
                          plan.buttonColor === "secondary"
                            ? "#1976d2"
                            : "white",
                        "&:hover": {
                          backgroundColor:
                            plan.buttonColor === "secondary"
                              ? "#1565c0"
                              : "lightgray",
                        },
                      }}
                    >
                      Get Started
                    </Button>

                    <Typography
                      variant="body2"
                      sx={{
                        mt: 2,
                        cursor: "pointer",
                        fontFamily: "Nunito Sans",
                        fontSize: "16px",
                        lineHeight: "21.82px",
                        letterSpacing: "0px",
                        textDecoration: "underline",
                        textDecorationStyle: "solid",
                        textDecorationThickness: "auto",
                        textDecorationOffset: "auto",
                        fontWeight: "600",
                      }}
                    >
                      Start Your 30 Day Free Trial
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Pricing;
