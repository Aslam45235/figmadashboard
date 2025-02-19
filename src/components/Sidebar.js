import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SettingsInputCompositeSharpIcon from "@mui/icons-material/SettingsInputCompositeSharp";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemText from "@mui/material/ListItemText";

function Sidebar() {
  // State to control Drawer open/close
  const [open, setOpen] = useState(false);

  // Media query to check screen size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Toggle drawer visibility on mobile
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Sidebar Drawer */}
      <Drawer
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
            borderRight: "1px solid #ECF0EF",
          },
        }}
        variant="temporary"
        open={open}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Improve performance on mobile
        }}
      >
        <Box sx={{ padding: "20px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="./images/logo.svg" alt="logo" />
          </Box>
          <Box sx={{ padding: "10px" }}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                color: "white",
                marginTop: "20px",
                backgroundColor: "primary",
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                lineHeight: "40px",
                "&:hover": {
                  backgroundColor: "black",
                },
              }}
              startIcon={<img src="./images/dash.svg" />}
            >
              Dashboard
            </Button>

            <List>
              {[
                {
                  text: "Products",
                  icon: <img src="./images/prot.svg" alt="" />,
                },
                {
                  text: "Favorites",
                  icon: <img src="./images/fav.svg" alt="" />,
                },
                {
                  text: "Inbox",
                  icon: <img src="./images/inbox.svg" alt="" />,
                },
                {
                  text: "Order Lists",
                  icon: <img src="./images/list.svg" alt="" />,
                },
                {
                  text: "Product Stock",
                  icon: <img src="./images/pro.svg" alt="" />,
                },
              ].map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#4880FF",
                      color: "white",
                      borderRadius: "12px",
                    },
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "19.1px",
                        letterSpacing: "0.3px",
                        margin: 0, // optional if you want to remove paragraph spacing
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider inset />
            <Box sx={{ marginTop: "10px", ml: "10px" }}>
              <Typography variant="p" color="#202224" sx={{ opacity: "0.6" }}>
                Pages
              </Typography>
            </Box>
            <List>
              {[
                {
                  text: "Pricing",
                  icon: <img src="./images/pri.svg" alt="" />,
                },
                {
                  text: "Calender",
                  icon: <img src="./images/cal.svg" alt="" />,
                },
                { text: "To Do", icon: <img src="./images/todo.svg" alt="" /> },
                {
                  text: "Contact",
                  icon: <img src="./images/contact.svg" alt="" />,
                },
                {
                  text: "Invoice",
                  icon: <img src="./images/invoice.svg" alt="" />,
                },
                {
                  text: "UI Elements",
                  icon: <img src="./images/ui.svg" alt="" />,
                },
                { text: "Team", icon: <img src="./images/team.svg" alt="" /> },
                {
                  text: "Table",
                  icon: <img src="./images/table.svg" alt="" />,
                },
              ].map((item, index) => (
                <ListItem key={index}>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "19.1px",
                        letterSpacing: "0.3px",
                        margin: 0, // optional if you want to remove paragraph spacing
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider inset />
            <List>
              {[
                {
                  text: "Settings",
                  icon: <img src="./images/setting.svg" alt="" />,
                },
                { text: "Logout", icon: <img src="./images/log.svg" alt="" /> },
              ].map((item, index) => (
                <ListItem key={index}>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "19.1px",
                        letterSpacing: "0.3px",
                        margin: 0, // optional if you want to remove paragraph spacing
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>

      {/* Sidebar Toggle Button on Mobile */}
      {isMobile && (
        <IconButton
          sx={{ position: "absolute", top: 20, left: 5, zIndex: 1000 }}
          onClick={toggleDrawer}
        >
          <MenuIcon sx={{ width: "40px", height: "40px" }} />
        </IconButton>
      )}

      {/* Full Sidebar for larger screens */}
      {!isMobile && (
        <Box flex={1} bgcolor="white">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              paddingBottom: "15px",
              paddingTop: "37px",
            }}
          >
            <img
              src="./images/logo.svg"
              alt="image"
              width="120px"
              height="27px"
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: "80%",
                  color: "white",
                  marginTop: "20px",
                  backgroundColor: "primary",
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  lineHeight: "40px",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
                startIcon={<img src="./images/dash.svg" />}
              >
                Dashboard
              </Button>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <List>
                {[
                  {
                    text: "Products",
                    icon: <img src="./images/prot.svg" alt="" />,
                  },
                  {
                    text: "Favorites",
                    icon: <img src="./images/fav.svg" alt="" />,
                  },
                  {
                    text: "Inbox",
                    icon: <img src="./images/inbox.svg" alt="" />,
                  },
                  {
                    text: "Order Lists",
                    icon: <img src="./images/list.svg" alt="" />,
                  },
                  {
                    text: "Product Stock",
                    icon: <img src="./images/pro.svg" alt="" />,
                  },
                ].map((item, index) => (
                  <ListItem key={index}>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Divider inset sx={{ width: "100%" }} />
            <Box
              sx={{
                display: "flex",
                width: "50%",
                justifyContent: "center",
                mt: "10px",
              }}
            >
              <Typography variant="p" color="#202224" sx={{ opacity: "0.6" }}>
                Pages
              </Typography>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <List>
                {[
                  {
                    text: "Pricing",
                    icon: <img src="./images/pri.svg" alt="" />,
                  },
                  {
                    text: "Calender",
                    icon: <img src="./images/cal.svg" alt="" />,
                  },
                  {
                    text: "To Do",
                    icon: <img src="./images/todo.svg" alt="" />,
                  },
                  {
                    text: "Contact",
                    icon: <img src="./images/contact.svg" alt="" />,
                  },
                  {
                    text: "Invoice",
                    icon: <img src="./images/invoice.svg" alt="" />,
                  },
                  {
                    text: "UI Elements",
                    icon: <img src="./images/ui.svg" alt="" />,
                  },
                  {
                    text: "Team",
                    icon: <img src="./images/team.svg" alt="" />,
                  },
                  {
                    text: "Table",
                    icon: <img src="./images/table.svg" alt="" />,
                  },
                ].map((item, index) => (
                  <ListItem key={index}>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Divider inset sx={{ width: "100%" }} />

            <Box
              sx={{
                width: "87%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <List>
                {[
                  {
                    text: "Settings",
                    icon: <img src="./images/setting.svg" alt="" />,
                  },
                  {
                    text: "Logout",
                    icon: <img src="./images/log.svg" alt="" />,
                  },
                ].map((item, index) => (
                  <ListItem key={index}>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default Sidebar;
