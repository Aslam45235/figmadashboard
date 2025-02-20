import React, { useState } from "react";
import { Box, Button, Typography, Grid, IconButton, Card } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Dummy Data for Carousel
const slides = [
  {
    date: "September 12-22",
    title: "Enjoy free home delivery in this summer",
    description: "Designer Dresses - Pick from trendy Designer Dress.",
    buttonText: "Get Started",
    image: "/images/Mask.svg", 
  },
  {
    date: "October 1-10",
    title: "Biggest Sale of the Year!",
    description: "Exclusive discounts on all categories.",
    buttonText: "Shop Now",
    image: "/images/Mask.svg", 
  },
  {
    date: "November 5-15",
    title: "Winter Collection is Here",
    description: "Find the latest winter fashion trends.",
    buttonText: "Explore",
    image: "/images/Mask.svg", 
  },
];

const PromoBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Move to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Move to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <Grid container spacing={2} sx={{ padding: "24px" }}>
      <Grid item xs={12}>
        <Typography
          sx={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
        >
          Products
        </Typography>
        <Box>
          
        </Box>
        <Card
          sx={{
            borderRadius: "16px",
            position: "relative",
            overflow: "hidden",
            height: "346px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "20px",
            px:"0",
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: "1920px 1080px",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat"
          }}
        >
          {/* Left Arrow */}
          <IconButton
            onClick={prevSlide}
            sx={{
              position: "absolute",
              left: 20,
              backgroundColor: "#F4F4F4",
              width: "40px",
              height: "40px",
              "&:hover": { backgroundColor: "#ddd" },
            }}
          >
            <ArrowBackIos sx={{ fontSize: "18px" }} />
          </IconButton>

          {/* Content */}
          <Box sx={{ color: "white", textAlign: "left", maxWidth: "413px", pl:{md:"130px" , xs:'70px' , sm:'100px' }}}>
            <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "30px" }}>
              {slides[currentSlide].date}
            </Typography>
            <Typography variant="p" sx={{ fontWeight: "700", fontSize:"37px", mt: 1 }}>
              {slides[currentSlide].title}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "8px", fontSize: "16px", lineHeight: "30px" }}>
              {slides[currentSlide].description}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF7F50",
                color: "white",
                marginTop: "30px",
                textTransform: "none",
                width: "156px",
                borderRadius: "11px",
                boxShadow: "0",
                "&:hover": { backgroundColor: "#FF6347" },
              }}
            >
              {slides[currentSlide].buttonText}
            </Button>
          </Box>

          {/* Right Arrow */}
          <IconButton
            onClick={nextSlide}
            sx={{
              position: "absolute",
              right: 20,
              backgroundColor: "#F4F4F4",
              width: "40px",
              height: "40px",
              "&:hover": { backgroundColor: "#ddd" },
            }}
          >
            <ArrowForwardIos sx={{ fontSize: "18px" }} />
          </IconButton>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PromoBanner;
