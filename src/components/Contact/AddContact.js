import React from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Avatar,
  MenuItem,
  Box,
} from "@mui/material";

const AddContact = () => {
  return (
    <Grid justifyContent="center" sx={{ mt: 4, p: 3 }}>
      <Box sx={{ mb: "37px" }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Nunito Sans",
            fontSize: "32px",
            lineHeight: "43.65px",
            letterSpacing: "-0.11px",
            fontWeight: "bold",
            color: "initial", // Default color
          }}
        >
          Add New Contact
        </Typography>
      </Box>
      <Grid item xs={12} md={8}>
        <Card
          sx={{ p: 4, borderRadius: "12px", boxShadow: 0, p:{xs: 0 , sm: "60px 0" , lg: "60px 180px"}  }}
        >
          <CardContent>
            {/* Profile Photo Upload */}
            <Box sx={{ mb: "40px" }}>
              <Grid container justifyContent="center" sx={{ mb: 2 }}>
                <Avatar
                  sx={{ width: 80, height: 80, backgroundColor: "#E0E0E0" }}
                >
                  <img src="./images/cm.svg" />
                </Avatar>
              </Grid>
              <Typography
                align="center"
                color="#4379EE"
                sx={{ cursor: "pointer", mb: 3 , fontSize:'14px', lineHeight:'16px' }}
              >
                Upload Photo
              </Typography>
            </Box>

            {/* Form Fields */}
            <Grid container spacing={8}>
              <Grid item xs={12} sm={12} md={6}>
                <Box display="flex" flexDirection="column" sx={{ gap: "11px" }}>
                  <Typography
                    component="label"
                    htmlFor="first-name"
                    sx={{
                      fontFamily: "Nunito Sans",
                      fontSize: "14px",
                      lineHeight: "19.1px",
                      letterSpacing: "0px",
                      color: "#606060", // Adjust color if needed
                      display: "block", // Ensures it sits above input
                      fontWeight: "500",
                      mb: 1, // Adds margin bottom for spacing
                    }}
                  >
                    First Name
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter your first name"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                      sx: { fontWeight: "bold", color: "#333" },
                    }}
                    InputProps={{
                      sx: {
                        backgroundColor: "#F7F8FA",
                        borderRadius: "6px",
                        height: "50px",
                        "& fieldset": { borderColor: "#E4E7EB" },
                      },
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Box display="flex" flexDirection="column" sx={{ gap: "11px" }}>
                  <Typography
                    component="label"
                    htmlFor="last-name"
                    sx={{
                      fontFamily: "Nunito Sans",
                      fontSize: "14px",
                      lineHeight: "19.1px",
                      letterSpacing: "0px",
                      color: "#606060", // Adjust color if needed
                      display: "block", // Ensures it sits above input
                      fontWeight: "500",
                      mb: 1, // Adds margin bottom for spacing
                    }}
                  >
                    Last Name
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter your last name"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                      sx: { fontWeight: "bold", color: "#333" },
                    }}
                    InputProps={{
                      sx: {
                        backgroundColor: "#F7F8FA",
                        borderRadius: "6px",
                        height: "50px",
                        "& fieldset": { borderColor: "#E4E7EB" },
                      },
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box display="flex" flexDirection="column" sx={{ gap: "11px" }}>
                  <Typography
                    component="label"
                    htmlFor="first-name"
                    sx={{
                      fontFamily: "Nunito Sans",
                      fontSize: "14px",
                      lineHeight: "19.1px",
                      letterSpacing: "0px",
                      color: "#606060", // Adjust color if needed
                      display: "block", // Ensures it sits above input
                      fontWeight: "500",
                      mb: 1, // Adds margin bottom for spacing
                    }}
                  >
                    Your email
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter your email address"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                      sx: { fontWeight: "bold", color: "#333" },
                    }}
                    InputProps={{
                      sx: {
                        backgroundColor: "#F7F8FA",
                        borderRadius: "6px",
                        height: "50px",
                        "& fieldset": { borderColor: "#E4E7EB" },
                      },
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box display="flex" flexDirection="column" sx={{ gap: "11px" }}>
                  <Typography
                    component="label"
                    htmlFor="first-name"
                    sx={{
                      fontFamily: "Nunito Sans",
                      fontSize: "14px",
                      lineHeight: "19.1px",
                      letterSpacing: "0px",
                      color: "#606060", // Adjust color if needed
                      display: "block", // Ensures it sits above input
                      fontWeight: "500",
                      mb: 1, // Adds margin bottom for spacing
                    }}
                  >
                    Phone Number
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter your phone number"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                      sx: { fontWeight: "bold", color: "#333" },
                    }}
                    InputProps={{
                      sx: {
                        backgroundColor: "#F7F8FA",
                        borderRadius: "6px",
                        height: "50px",
                        "& fieldset": { borderColor: "#E4E7EB" },
                      },
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box display="flex" flexDirection="column" sx={{ gap: "11px" }}>
                  <Typography
                    component="label"
                    htmlFor="first-name"
                    sx={{
                      fontFamily: "Nunito Sans",
                      fontSize: "14px",
                      lineHeight: "19.1px",
                      letterSpacing: "0px",
                      color: "#606060", // Adjust color if needed
                      display: "block", // Ensures it sits above input
                      fontWeight: "500",
                      mb: 1, // Adds margin bottom for spacing
                    }}
                  >
                    Date of Birth
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter your Date of birth"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                      sx: { fontWeight: "bold", color: "#333" },
                    }}
                    InputProps={{
                      sx: {
                        backgroundColor: "#F7F8FA",
                        borderRadius: "6px",
                        height: "50px",
                        "& fieldset": { borderColor: "#E4E7EB" },
                      },
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={3}>
                <Box display="flex" flexDirection="column" sx={{ gap: "11px" }}>
                  <Typography
                    component="label"
                    htmlFor="first-name"
                    sx={{
                      fontFamily: "Nunito Sans",
                      fontSize: "14px",
                      lineHeight: "19.1px",
                      letterSpacing: "0px",
                      color: "#606060", // Adjust color if needed
                      display: "block", // Ensures it sits above input
                      fontWeight: "500",
                      mb: 1, // Adds margin bottom for spacing
                    }}
                  >
                    Gender
                  </Typography>
                  <TextField
                    select
                    fullWidth
                    defaultValue="Male"
                    variant="outlined"
                    InputProps={{
                      sx: {
                        backgroundColor: "#F7F8FA",
                        borderRadius: "6px",
                        height: "50px",
                        "& fieldset": { borderColor: "#E4E7EB" },
                      },
                    }}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </TextField>
                </Box>
              </Grid>
            </Grid>

            {/* Submit Button */}
            <Grid container justifyContent="center" sx={{ mt: "60px" }}>
              <Button
                variant="contained"
                sx={{ px: 5, py: 1.5, borderRadius: "6px", width: "274px" , textTransform:'capitalize', backgroundColor:'#4880FF' }}
              >
                Add Now
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AddContact;
