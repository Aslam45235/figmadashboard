import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TablePagination,
  Box,
  Divider,
  colors,
  Typography,
} from "@mui/material";
import { Opacity, Search } from "@mui/icons-material";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const imageUrls = [
  "./images/ic1.svg",
  "./images/ic2.svg",
  "./images/ic3.svg",
  "./images/ic4.svg",
  "./images/ic5.svg",
  "./images/ic2.svg",
  "./images/ic3.svg",
  "./images/ic4.svg",
  "./images/ic5.svg",
  "./images/ic2.svg",
];

// Define a repeating pattern for color counts
const colorPattern = [3, 4, 4, 3, 3, 4]; // This will repeat for every 6 rows

// Function to get unique colors based on index
const getRandomColors = (index) => {
  const colorOptions = [
    "black",
    "#9F9F9F",
    "#E98F8F",
    "#F57C7C",
    "#E9C157",
    "#4D88EF",
    "#882853",
    "#7CB7F5",
    "#4343EE",
    "#283988",
    "#A32147",
  ];
  const colorCount = colorPattern[index % colorPattern.length]; // Get color count from pattern
  const shuffledColors = colorOptions.sort(() => 0.5 - Math.random()); // Shuffle colors randomly
  return shuffledColors.slice(0, colorCount); // Pick the first `colorCount` colors
};

const productNames = [
  "Apple Watch Series 4",
  "Microsoft Headsquare",
  "Women’s Dress",
  "Samsung A50",
  "Camera",
  "Microsoft Headsquare",
  "Microsoft Headsquare",
  "Women’s Dress",
  "Samsung A50",
  "Microsoft Headsquare",
];
const categr = [
  "Digital Product",
  "Digital Product",
  "Fashion",
  "Mobile",
  "Electronic",
  "Digital Product",
  "Fashion",
  "Mobile",
  "Electronic",
  "Digital Product",
  "Fashion",
];

const initialProducts = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  image: imageUrls[i % imageUrls.length], // Cycle through images
  name: productNames[i % productNames.length], // Assign product name from array
  category: categr[i % categr.length],
  price: `$${(Math.random() * 1000).toFixed(2)}`,
  piece: Math.floor(Math.random() * 1000),
  colors: getRandomColors(i), // Assign colors based on pattern
}));

console.log(initialProducts);

const Stock = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    setProducts(products.filter((p) => p.id !== selectedProduct.id));
    setDeleteDialog(false);
  };

  const handleCancelDelete = () => {
    setDeleteDialog(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box padding={3}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "27px",
        }}
      >
        <Typography
          variant="p"
          color="#202224"
          sx={{ fontSize: "32px", lineHeight: "43px", fontWeight: "600" }}
        >
          Product Stock
        </Typography>
        <TextField
          placeholder="Search product name"
          onChange={handleSearch}
          variant="outlined"
          InputProps={{
            startAdornment: <Search sx={{ marginRight: 1, color: "gray" }} />,
            sx: {
              borderRadius: "50px",
              backgroundColor: "white",
              border: "none", // Remove border
              boxShadow: "none", // Remove shadow if any
              "& fieldset": { border: "none" }, // Ensures the outlined variant has no border
            },
          }}
          sx={{
            borderRadius: "50px",
            width: "300px",
            backgroundColor: "white",
          }}
        />
      </Box>

      <Paper
        sx={{
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
          boxShadow: "0",
          border: "1px solid #D5D5D5",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <TableContainer
            sx={{ borderTopRightRadius: "8px", borderTopLeftRadius: "8px" }}
          >
            <Table>
              <TableHead>
                <TableRow
                  sx={{
                    backgroundColor: "#FFFFFF",
                    boxShadow: "1",
                    "& td": { borderTop: "none" }, // Remove top border for first row
                  }}
                >
                  <TableCell
                    sx={{ paddingLeft: 5, width: "70px", textAlign: "left" }}
                  >
                    <b>Image</b>
                  </TableCell>
                  <TableCell sx={{ width: "200px", textAlign: "left" }}>
                    <b>Product Name</b>
                  </TableCell>
                  <TableCell sx={{ width: "150px", textAlign: "left" }}>
                    <b>Category</b>
                  </TableCell>
                  <TableCell sx={{ width: "100px", textAlign: "left" }}>
                    <b>Price</b>
                  </TableCell>
                  <TableCell sx={{ width: "100px", textAlign: "left" }}>
                    <b>Piece</b>
                  </TableCell>
                  <TableCell sx={{ textAlign: "left" }}>
                    <b>Available Color</b>
                  </TableCell>
                  <TableCell sx={{ pl: 5, textAlign: "left" }}>
                    <b>Action</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProducts
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((product) => (
                    <TableRow
                      key={product.id}
                      sx={{
                        "&:first-of-type td": { borderTop: "none" },
                        "&:last-of-type td": { borderBottom: "none" },
                      }}
                    >
                      <TableCell
                        sx={{
                          paddingLeft: 5,
                          width: "70px",
                          textAlign: "left",
                        }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          width="50"
                        />
                      </TableCell>
                      <TableCell sx={{ width: "200px", textAlign: "left" }}>
                        {product.name}
                      </TableCell>
                      <TableCell sx={{ width: "150px", textAlign: "left" }}>
                        {product.category}
                      </TableCell>
                      <TableCell sx={{ width: "100px", textAlign: "left" }}>
                        {product.price}
                      </TableCell>
                      <TableCell sx={{ width: "100px", textAlign: "left" }}>
                        {product.piece}
                      </TableCell>
                      <TableCell sx={{ width: "150px", textAlign: "left" }}>
                        {product.colors.map((color, index) => (
                          <span
                            key={index}
                            style={{
                              display: "inline-block",
                              width: 15,
                              height: 15,
                              backgroundColor: color,
                              borderRadius: "50%",
                              marginRight: 15, // Increased spacing between colors
                              marginBottom: 5, // Optional: Adds some vertical spacing
                            }}
                          ></span>
                        ))}
                      </TableCell>

                      <TableCell sx={{ width: "120px", textAlign: "left" }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid #E0E0E0",
                            borderRadius: "10px",
                            backgroundColor: "#F9F9FB",
                            padding: "0 5px",
                            width: "96px",
                            height: "32px",
                          }}
                        >
                          {/* Edit Button */}
                          <IconButton>
                            <img src="./images/path.svg" alt="Edit" />
                          </IconButton>

                          {/* Divider */}
                          <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                              backgroundColor: "#E0E0E0",
                              height: "auto",
                              margin: "0 8px",
                            }}
                          />

                          {/* Delete Button */}
                          <IconButton
                            onClick={() => handleDeleteClick(product)}
                          >
                            <img src="./images/bin.svg" alt="Delete" />
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Delete Confirmation Dialog */}
        <Dialog open={deleteDialog} onClose={handleCancelDelete}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete "{selectedProduct?.name}"?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelDelete} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} color="error">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          marginTop: "32px",
        }}
      >
        {/* Pagination Text (Left Side) */}
        <Box style={{ color: "#202224", opacity: 0.6 }}>
          Showing {page * rowsPerPage + 1} -{" "}
          {Math.min((page + 1) * rowsPerPage, filteredProducts.length)} of{" "}
          {filteredProducts.length}
        </Box>

        {/* Navigation Buttons (Right Side) */}
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            backgroundColor: "#FAFBFD",
            borderRadius: "12px",
            border: "1px solid #D5D5D5",
           
            height: "30px",
          }}
        >
          {/* Custom Previous Button */}
          <IconButton
            onClick={(e) => handleChangePage(e, page - 1)}
            disabled={page === 0}
          >
            <ChevronLeft
              sx={{ fontSize: "24px", color: page === 0 ? "gray" : "black" }}
            />
          </IconButton>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "#E0E0E0",
              height: "auto",
              margin: "0 5px",
            }}
          />
          {/* Custom Next Button */}
          <IconButton
            onClick={(e) => handleChangePage(e, page + 1)}
            disabled={
              page >= Math.ceil(filteredProducts.length / rowsPerPage) - 1
            }
          >
            <ChevronRight
              sx={{
                fontSize: "24px",
                color:
                  page >= Math.ceil(filteredProducts.length / rowsPerPage) - 1
                    ? "gray"
                    : "black",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Stock;
