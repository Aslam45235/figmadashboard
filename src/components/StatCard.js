import React from "react";
import { Card, Typography, Box, Grid } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const data = [
  {
    title: "Total Users",
    count: "40,689",
    percentage: "8.5%",
    status: "Up from yesterday",
    icon: <img src="./images/User.svg" alt="User" />,
    trend: <TrendingUpIcon sx={{color:"#00B69B"}}/>,
    percentageColor: "#00B69B"
  },
  {
    title: "Total Orders",
    count: "10,293",
    percentage: "1.3%",
    status: "Up from past week",
    icon: <img src="./images/Order.svg" alt="Order" />,
    trend: <TrendingUpIcon sx={{color:"#00B69B"}}/>,
    percentageColor: "#00B69B"
  },
  {
    title: "Total Sales",
    count: "$89,000",
    percentage: "4.3%",
    status: "Down from yesterday",
    icon: <img src="./images/sale.svg" alt="Sale" />,
    trend: <TrendingDownIcon sx={{color:"#F93C65"}} />,
    percentageColor: "#F93C65"
  },
  {
    title: "Total Pending",
    count: "2,040",
    percentage: "1.8%",
    status: "Up from yesterday",
    icon: <img src="./images/pending.svg" alt="Pending" />,
    trend: <TrendingUpIcon sx={{color:"#00B69B"}} />,
    percentageColor: "#00B69B"
  },
];

const StatCard = () => {
  return (
    <>
      <Box>
        <Typography
          sx={{
            fontFamily: "Nunito Sans",
            fontSize: "32px",
            lineHeight: "43.65px",
            letterSpacing: "-0.11px",
            fontWeight: "bold",
            pl: "24px",
            pt: "24px",
          }}
        >
          Dashboard
        </Typography>

        <Grid container spacing={3} sx={{ padding: "24px" }}>
          {/* More spacing */}
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "16px",
                  backgroundColor: "#F9FAFB",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": { transform: "scale(1.02)" },
                  boxSizing: "border-box", // Prevents content overflow
                }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                >
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                      fontFamily: "Nunito Sans",
                      fontSize: "16px",
                      lineHeight: "21.82px",
                      letterSpacing: "0px",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box>{item.icon}</Box>
                </Box>

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "28px",
                      lineHeight: "38.19px",
                      letterSpacing: "1px",
                    }}
                  >
                    {item.count}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      color: "green",
                    }}
                  >
                    {item.trend}
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color:item.percentageColor
                      }}
                    >
                      {item.percentage}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ fontSize: "16px", fontWeight: "500" }}
                    >
                      {item.status}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default StatCard;
