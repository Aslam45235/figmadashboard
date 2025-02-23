import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  IconButton,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  FavoriteBorder,
} from "@mui/icons-material";

const products = [
  {
    name: "Apple Watch Series 4",
    price: "$120.00",
    rating: <img src="./images/Stars.svg" alt="star" />,
    images: ["/images/watch.svg", "/images/watch.svg"], 
  },
  {
    name: "Apple Watch Series 4",
    price: "$120.00",
    rating: <img src="./images/Stars.svg" alt="star" />,
    images: ["/images/watch.svg", "/images/watch.svg"],
  },
  {
    name: "Apple Watch Series 4",
    price: "$120.00",
    rating: <img src="./images/Stars.svg" alt="star" />,
    images: ["/images/watch.svg", "/images/watch.svg"],
  },
];

const ProductCardItem = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          width: "100%",
          borderRadius: "12px",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Product Image with Navigation */}
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            image={product.images[currentImageIndex]}
            alt={product.name}
            sx={{
              height: "auto",
              width: "100%", 
              objectFit: "cover", 
              backgroundColor: "#e0e0e0", 
            }}
          />
          {/* Left Arrow */}
          <IconButton
            onClick={prevImage}
            sx={{
              position: "absolute",
              top: "50%",
              left: 8,
              transform: "translateY(-50%)",
              backgroundColor: "#E2EAF8",
              opacity: "0.5",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
              "&:hover": { backgroundColor: "#ddd" },
            }}
          >
            <ArrowBackIos sx={{ fontSize: "16px" }} />
          </IconButton>

          {/* Right Arrow */}
          <IconButton
            onClick={nextImage}
            sx={{
              position: "absolute",
              top: "50%",
              right: 8,
              transform: "translateY(-50%)",
              backgroundColor: "#E2EAF8",
              opacity: "0.5",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
              "&:hover": { backgroundColor: "#ddd" },
            }}
          >
            <ArrowForwardIos sx={{ fontSize: "16px" }} />
          </IconButton>
        </Box>

        {/* Product Details */}
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography
                variant="p"
                fontWeight="700"
                sx={{ fontSize: "18px", lineHeight: "20px" }}
              >
                {product.name}
              </Typography>
              <Typography
                variant="body1"
                color="#4880FF"
                sx={{ fontSize: "16px", fontWeight: "700" }}
              >
                {product.price}
              </Typography>
              <Typography variant="body2">{product.rating}</Typography>
            </Box>
            <Box>
              <IconButton>
                <FavoriteBorder />
              </IconButton>
            </Box>
          </Box>

          {/* Favorite & Edit Buttons */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Button variant="outlined" color="#E2EAF8" sx={{ textTransform: "none" , borderRadius:"12px", opacity:'0.7', border:'1px solid #E2EAF8'}}>
              Edit Product
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

// Parent Component (Still inside ProductCard)
const ProductCard = () => {
  return (
    <Grid container spacing={2} p="20px">
      {products.map((product, index) => (
        <ProductCardItem key={index} product={product} />
      ))}
    </Grid>
  );
};

export default ProductCard;
