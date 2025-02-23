import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useNavigate } from "react-router-dom";

const contacts = [
  {
    name: "Jason Price",
    email: "kuhlman.jeremy@yahoo.com",
    image: "./images/p1.svg",
  },
  {
    name: "Duane Dean",
    email: "rusty.botsford@wilfrid.io",
    image: "./images/p2.svg",
  },
  {
    name: "Jonathan Barker",
    email: "cora_haley@quinn.biz",
    image: "./images/p3.svg",
  },
  {
    name: "Rosie Glover",
    email: "lockman.marques@hotmail.com",
    image: "./images/p4.svg",
  },
  {
    name: "Patrick Greer",
    email: "pearlie.eichmann@trevion.net",
    image: "./images/p5.svg",
  },
  {
    name: "Darrell Ortega",
    email: "chaya.shields@ferry.info",
    image: "./images/p6.svg",
  },
];

const Contact = () => {

  const navigate = useNavigate(); // Initialize navigation

  const handleDashboardClick = () => {
    navigate("/addcontact"); // Navigate to Main Page
  };
  return (
    <Box sx={{ padding:"24px" }}>
      {/* Header with Add Contact Button */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h5" fontWeight="bold">
          Contact
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "170px",
            height: "48px",
            borderRadius: "6px",
            fontSize: "14px",
          }}
          onClick={handleDashboardClick}
        >
          Add New Contact
        </Button>
      </Box>

      {/* Contact Cards Grid */}
      <Box
  display="grid"
  gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
  gap={2}
  p={0}
>
  {contacts.map((contact, index) => (
    <Card key={index} sx={{ borderRadius: "12px", textAlign: "center", boxShadow: 3 }}>
      <Box
        sx={{
          overflow: "hidden",
          height: "360px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Avatar
          src={contact.image}
          alt={contact.name}
          sx={{ width: "100%", height: "100%", borderRadius: 0 }}
        />
      </Box>
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            fontFamily: "Nunito Sans",
            fontSize: "16px",
            lineHeight: "21.82px",
            letterSpacing: "-0.06px",
            textAlign: "center",
          }}
        >
          {contact.name}
        </Typography>

        <Typography
          variant="body2"
          color="#202224"
          sx={{
            fontFamily: "Nunito Sans",
            fontSize: "14px",
            lineHeight: "19.1px",
            letterSpacing: "-0.05px",
            textAlign: "center",
            opacity: "0.6",
          }}
        >
          {contact.email}
        </Typography>

        <Button
          variant="outlined"
          startIcon={<MailOutlineIcon />}
          sx={{
            mt: 2,
            borderRadius: "6px",
            px: 3,
            borderColor: "#B9B9B9",
            color: "#979797",
            "&:hover": {
              borderColor: "#979797",
              backgroundColor: "rgba(185, 185, 185, 0.1)",
            },
          }}
        >
          Message
        </Button>
      </CardContent>
    </Card>
  ))}
</Box>

    </Box>
  );
};

export default Contact;
