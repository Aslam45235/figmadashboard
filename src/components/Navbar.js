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
  TextField,
  Select,
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
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing the menu and updating the profile
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleProfileChange = (profileType) => {
    setProfile(profileType); // Update selected profile role
    setAnchorEl(null); // Close menu after selection
  };
  const [showSearch, setShowSearch] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <>
      <Box
        sx={{
          padding: "20px",
          bgcolor: "white",
          display: { xs: "flex", md: "flex" },
          justifyContent: { xs: "center", md: "space-between" },
        }}
      >
        <Box
          display="flex"
          justifyContent="start"
          alignItems="center"
          gap="24px"
          width="100%"
        >
          <MenuIcon
            sx={{
              width: "30px",
              height: "30px",
              opacity: 0.9,
              color: "#202224",
              display: { xs: "none", md: "block" },
            }}
          />
          <Box
            sx={{
              border: "1px solid #ccc",
              background: "white",
              padding: "5px",
              height: "38px",
              display: "flex",
              alignItems: "center",
              borderRadius: "50px",
              width: { xs: showSearch ? "70%" : "auto", md: "40%" }, // Expands only on mobile
              backgroundColor: "#F5F6FA",
              marginLeft: { xs: "50px", sm: "0" },
              transition: { xs: "width 0.3s ease-in-out", md: "none" }, // Apply transition only on mobile
            }}
          >
            {/* Search Icon inside search bar */}
            <IconButton
              sx={{
                padding: 0,
                marginRight: "8px",
                transition: { xs: "transform 0.3s ease-in-out", md: "none" },
                transform: {
                  xs: showSearch ? "rotate(90deg)" : "rotate(0deg)",
                  md: "none",
                }, // Rotate effect only on mobile
              }}
              onClick={() => setShowSearch(!showSearch)}
            >
              <SearchIcon />
            </IconButton>

            <InputBase
              placeholder="Search"
              sx={{
                flex: 1,
                paddingLeft: "5px",
                opacity: { xs: showSearch ? 1 : 0, md: 1 }, // Fade-in only on mobile
                width: { xs: showSearch ? "100%" : "0px", md: "100%" },
                transition: {
                  xs: "opacity 0.3s ease-in-out, width 0.3s ease-in-out",
                  md: "none",
                },
                display: "block", // Always visible on larger screens
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: { xs: "center", md: "space-evenly" },
            alignItems: "center",
            
          }}
        >
          <Icons>
            <Box
              bgcolor="white"
              alignItems="center"
              sx={{
                display: { xs: "none", md: "block" },
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                padding: { xs: "0", md: "10px" },
              }}
            ></Box>
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
              <Badge sx={{display:{xs:"none" , md:"block"}}}>

                <img src="./images/Icon.svg" />
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "0", md: 2 },
                }}
              >
                <Box
                  component="img"
                  src="./images/Flag.svg"
                  alt="Flag"
                  sx={{
                    display: { xs: "none", sm: "block" }, // Hide on screens ≤ 425px
                  }}
                />

                {/* for mobile screen show the role  */}
               
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: {xs:"15px" , md:"12px"},
                      lineHeight: "16.37px",
                      color: "gray",
                      display: { xs: "block", sm: "none" },
                    }}
                  >
                    {profile} {/* Selected Role Displayed Here */}
                  </Typography>
                <Select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  displayEmpty
                  variant="standard"
                  disableUnderline
                  sx={{
                    fontSize: "14px",
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    }, // No border on hover
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    display: { xs: "none", sm: "block" }, // No border on focus
                  }}
                >
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Spanish">Spanish</MenuItem>
                  <MenuItem value="French">French</MenuItem>
                </Select>
              </Box>
            </Box>
          </Icons>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "3px", md: 3 },

              cursor: "pointer",
            }}
            onClick={handleMenuOpen}
          >
            <Avatar
              src="./images/avator.svg"
              alt="User"
              sx={{ width: "44px", height: "44px" }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <Typography
                variant="body2"
                sx={{
                  // Font family
                  fontWeight: 700, // Bold text
                  fontSize: "14px", // Font size
                  lineHeight: "19.1px", // Line height
                  letterSpacing: "0px", // Letter spacing
                  display: { xs: "none", md: "block" },
                }}
              >
                Moni Roy
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "12px",
                  lineHeight: "16.37px",
                  color: "gray",
                  display: { xs: "none", md: "block" },
                }}
              >
                {profile} {/* Selected Role Displayed Here */}
              </Typography>
            </Box>
            <Box
              component="img"
              src="./images/More.svg"
              alt="More"
              sx={{
                display: { xs: "none", md: "block" }, // Hide on screens ≤ 425px
              }}
            />
          </Box>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => handleProfileChange("Admin")}>
              Admin
            </MenuItem>
            <MenuItem onClick={() => handleProfileChange("User")}>
              User
            </MenuItem>
            <MenuItem onClick={() => handleProfileChange("Guest")}>
              Guest
            </MenuItem>
          </Menu>
          ;
        </Menu>
      </Box>
    </>
  );
}

export default Navbar;
