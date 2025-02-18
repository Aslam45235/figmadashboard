import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Divider,
  styled,
  Typography,
  Box,
  Menu,
  MenuItem,
  InputBase,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "@mui/icons-material";

const Icons = styled("Box")(({ theme }) => ({
  display: "flex",
  gap: "20px",
}));

function Navbar() {
  // State for managing the menu open and anchor element
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // State for managing the current profile (Admin/User)
  const [profile, setProfile] = useState("Admin");

  // Handle opening the menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing the menu and updating the profile
  const handleClose = (profileType) => {
    setProfile(profileType); // Update the profile state
    setAnchorEl(null); // Close the menu after selection
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <Box
          display="flex"
          justifyContent="start"
          alignItems="center"
          gap="20px"
          width="100%"
        >
          <MenuIcon  sx={{width:"24px" , height:"25px"}}/>
          <Box
            sx={{
              border: "1px solid #ccc", // Border for visibility
              background: "white",
              padding: "5px",
              display: "flex",
              alignItems: "center",
              borderRadius: "50px",
              width: "40%",
              backgroundColor:"#D5D5D5" // Adjust the width as needed
            }}
          >
            <InputBase
              placeholder="Search" // Placeholder text
              sx={{
                flex: 1, // Makes the input take up most of the space
                paddingLeft: "10px",
                 // Adds padding for the placeholder text
              }}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton sx={{ padding: 0 }}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
        </Box>

        <Icons>
          <Box
            bgcolor="white"
            padding="10px"
            alignItems="center"
            sx={{
              display: { xs: "none", md: "block" },
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CalendarTodayIcon />
            <Typography variant="p" sx={{ marginLeft: "10px" }}>
              30 May
            </Typography>
          </Box>
          <Box
            bgcolor="white"
            padding="10px"
            sx={{
              display: { xs: "none", md: "block" },
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Badge color="error">
              <NotificationsNoneIcon />
            </Badge>
          </Box>
          <Box
            bgcolor="white"
            padding="10px"
            sx={{
              display: { xs: "none", md: "block" },
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Badge color="error">
              <MapsUgcIcon />
            </Badge>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "white",
              padding: "0 10px",
            }}
          >
            <Avatar
              src="./images/login.jpg"
              alt="Remy Sharp"
              onClick={handleClick} // Add onClick handler to open the menu
              sx={{ cursor: "pointer" }} // Change cursor to pointer
            />
            <Box sx={{ marginLeft: "10px" }}>
              <Typography variant="body2">{profile}</Typography>{" "}
              {/* Display selected profile */}
            </Box>
          </Box>
        </Icons>

        {/* Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={() => handleClose("Admin")}>Admin</MenuItem>
          <MenuItem onClick={() => handleClose("User")}>User</MenuItem>
        </Menu>
      </Box>
    </>
  );
}

export default Navbar;
