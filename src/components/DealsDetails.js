import React from "react";
import { Box, Grid, Typography, Paper, Select, MenuItem, Avatar, Chip, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const deals = [
  { status: "Delivered", color: "#00B69B" },
  { status: "Pending", color: "warning" },
  { status: "Rejected", color: "error" }
];

const DealsDetails = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3, borderRadius: 2 }}>
        <Grid container justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" fontWeight="bold">
            Deals Details
          </Typography>
          <Select size="small" defaultValue="October" sx={{height:"28px", borderRadius:"4px"}}>
            <MenuItem value="October">October</MenuItem>
            <MenuItem value="November">November</MenuItem>
          </Select>
        </Grid>

        <Paper sx={{ borderRadius: 2, overflow: "hidden" }}>
          <Grid container sx={{ bgcolor: "#F1F4F9", p: 2, fontWeight: "500", display: isSmallScreen ? "none" : "flex" }}>
            <Grid item xs={2}>Product Name</Grid>
            <Grid item xs={3}>Location</Grid>
            <Grid item xs={3}>Date - Time</Grid>
            <Grid item xs={1}>Piece</Grid>
            <Grid item xs={2}>Amount</Grid>
            <Grid item xs={1}>Status</Grid>
          </Grid>

          {deals.map((deal, index) => (
            <Paper sx={{ p: 2, mb: 2 , borderBottom:"0.5px solid #979797" , borderRadius:"0", boxShadow:"0" }} key={index}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} sm={2} display="flex" alignItems="center">
                  <Avatar src="./images/swatch.svg" sx={{ mr: 1 }} />
                  Apple Watch
                </Grid>
                <Grid item xs={12} sm={3}>{isSmallScreen ? <Typography variant="body2">Location: 6096 Marjolaine Landing</Typography> : "6096 Marjolaine Landing"}</Grid>
                <Grid item xs={12} sm={3}>{isSmallScreen ? <Typography variant="body2">Date - Time: 12.09.2019 - 12:53 PM</Typography> : "12.09.2019 - 12:53 PM"}</Grid>
                <Grid item xs={12} sm={1}>{isSmallScreen ? <Typography variant="body2">Piece: 423</Typography> : "423"}</Grid>
                <Grid item xs={12} sm={2}>{isSmallScreen ? <Typography variant="body2">Amount: $34,295</Typography> : "$34,295"}</Grid>
                <Grid item xs={12} sm={1}>
                  <Chip label={deal.status} color={deal.color} />
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Paper>
      </Paper>
    </Box>
  );
};

export default DealsDetails;
