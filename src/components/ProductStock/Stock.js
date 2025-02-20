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
} from "@mui/material";
import { Delete, Edit, Search } from "@mui/icons-material";

const initialProducts = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  image: "https://via.placeholder.com/50",
  name: `Product ${i + 1}`,
  category: "Category",
  price: `$${(Math.random() * 1000).toFixed(2)}`,
  piece: Math.floor(Math.random() * 1000),
  colors: ["black", "red", "blue"],
}));

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
    <Paper sx={{ padding: 3, bgcolor:"#F5F6FA"}}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2>Product Stock</h2>
        <TextField
          variant="outlined"
          placeholder="Search product name"
          onChange={handleSearch}
          InputProps={{
            startAdornment: <Search sx={{ marginRight: 1, color: "gray" }} />,
          }}
          sx={{ borderRadius: "50px", width: "300px", backgroundColor: "white" }}
        />
      </div>
      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#F5F5F5" }}>
              <TableCell><b>Image</b></TableCell>
              <TableCell><b>Product Name</b></TableCell>
              <TableCell><b>Category</b></TableCell>
              <TableCell><b>Price</b></TableCell>
              <TableCell><b>Piece</b></TableCell>
              <TableCell><b>Available Color</b></TableCell>
              <TableCell><b>Action</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <img src={product.image} alt={product.name} width="50" />
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.piece}</TableCell>
                  <TableCell>
                    {product.colors.map((color, index) => (
                      <span
                        key={index}
                        style={{
                          display: "inline-block",
                          width: 15,
                          height: 15,
                          backgroundColor: color,
                          borderRadius: "50%",
                          marginRight: 5,
                        }}
                      ></span>
                    ))}
                  </TableCell>
                  <TableCell>
                    <IconButton>
                      <Edit color="primary" />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteClick(product)}>
                      <Delete color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={filteredProducts.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[]}
      />

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
  );
};

export default Stock;
