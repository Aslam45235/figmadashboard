import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Chip,
  Popover,
  ButtonGroup,
} from "@mui/material";
import Calendar from "./Calendar";
import { IconButton, Divider } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// Dummy Order Data
const orders = [
  {
    id: "00001",
    name: "Christine Brooks",
    address: "089 Kutch Green Apt. 448",
    date: "2019-09-04",
    type: "Electric",
    status: "Completed",
  },
  {
    id: "00002",
    name: "Rosie Pearson",
    address: "979 Immanuel Ferry Suite 526",
    date: "2019-05-28",
    type: "Book",
    status: "Processing",
  },
  {
    id: "00003",
    name: "Darrell Caldwell",
    address: "8587 Frida Ports",
    date: "2019-11-23",
    type: "Medicine",
    status: "Rejected",
  },
  {
    id: "00004",
    name: "Gilbert Johnston",
    address: "768 Destiny Lake Suite 600",
    date: "2019-02-05",
    type: "Mobile",
    status: "Completed",
  },
  {
    id: "00005",
    name: "Alan Cain",
    address: "042 Mylene Throughway",
    date: "2019-07-29",
    type: "Watch",
    status: "Processing",
  },
  {
    id: "00006",
    name: "John Doe",
    address: "123 Main St",
    date: "2020-01-10",
    type: "Laptop",
    status: "Completed",
  },
  {
    id: "00007",
    name: "Jane Smith",
    address: "456 Elm St",
    date: "2021-03-15",
    type: "Tablet",
    status: "Processing",
  },
  {
    id: "00008",
    name: "Mike Johnson",
    address: "789 Pine St",
    date: "2022-05-20",
    type: "TV",
    status: "Rejected",
  },
  {
    id: "00009",
    name: "Emily White",
    address: "101 Maple St",
    date: "2023-07-25",
    type: "Headphones",
    status: "Completed",
  },
  {
    id: "00010",
    name: "Robert Brown",
    address: "202 Oak St",
    date: "2023-08-30",
    type: "Camera",
    status: "Processing",
  },
];

const OrderTable = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [page, setPage] = useState(0);
  const rowsPerPage = 9; // Show only 9 records per page

  // Filter orders based on the selected date
  const filteredOrders = selectedDate
    ? orders.filter((order) => order.date.includes(selectedDate))
    : orders;

  // Handle Pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleDateClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box px={3} py={4}>
      <Box mb="30px">
        <Typography variant="p" fontWeight="600" sx={{ fontSize: "35px" }}>
          Order Lists
        </Typography>
      </Box>

      {/* Filter Section */}
      <ButtonGroup
        variant="outlined"
        sx={{
          mb: 3,
          width: "100%", // Full width for responsiveness
          maxWidth: "700px", // Limits max width
          height: "auto",
          borderRadius: "14px",
          backgroundColor: "#F9F9FB",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap", // Ensures wrapping on small screens
          overflow: "hidden",
          border: "1px solid #D5D5D5", // Border for ButtonGroup
          "& .MuiButtonGroup-grouped": {
            borderTop: "none", // Remove top border
            borderBottom: "none", // Remove bottom border
            borderLeft: "1px solid #D5D5D5", // Default left border
            borderRight: "1px solid #D5D5D5", // Default right border
            flexGrow: 1,
            minWidth: "100px",
            textTransform: "none",
            fontSize: "14px", // Font size for every button
            color: "#202224", // Text color for every button
            fontWeight: 400,
            "&:first-of-type": {
              borderLeft: "none", // Remove left border for the first button
              minWidth: "40px", // Decrease width
              px: 1, // Reduce padding
            },
            "&:last-of-type": {
              borderRight: "none", // Remove right border for the last button
            },
          },
          "@media (max-width: 600px)": {
            flexDirection: "column",
            alignItems: "stretch",
          },
        }}
      >
        {/* Filter Button */}
        <Button
          sx={{
            height: "70px",
            minWidth: "40px", // Decreased width
            px: 1, // Reduced padding
            display: "flex",
            justifyContent: "center",
            fontWeight: "600",
          }}
        >
          <img src="./images/filter.svg" alt="Filter" />
        </Button>

        {/* Filter By */}
        <Button
          sx={{
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ color: "#202224", fontWeight: "600" }}>
            Filter By
          </Typography>
        </Button>

        {/* Date Filter with Popover */}
        <Button
          sx={{
            height: "70px",
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "600", // Ensure font weight is applied
            px: 2,
            typography: "body1", // Ensures text styling is applied correctly
          }}
          onClick={handleDateClick} // Opens popover
        >
          <Typography sx={{ fontWeight: "600" }}>
            {selectedDate || "Date"}
          </Typography>
          <img
            src="./images/arr.svg"
            alt="Dropdown"
            width="16px"
            height="16px"
          />
        </Button>

        {/* Calendar Popover */}
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <Calendar
            onSelectDate={(date) => {
              setSelectedDate(date);
              handleClose();
            }}
          />
        </Popover>

        {/* Order Type Dropdown */}
        <Button
          sx={{
            height: "70px",
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "600",
            px: 2,
          }}
        >
          <Typography sx={{ color: "#202224", fontWeight: "600" }}>
            Order Type
          </Typography>

          <img
            src="./images/arr.svg"
            alt="Dropdown"
            width="16px"
            height="16px"
          />
        </Button>

        {/* Order Status Dropdown */}
        <Button
          sx={{
            height: "70px",
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "600",
            px: 2,
          }}
        >
          <Typography sx={{ color: "#202224", fontWeight: "600" }}>
            Order Status
          </Typography>

          <img
            src="./images/arr.svg"
            alt="Dropdown"
            width="16px"
            height="16px"
          />
        </Button>

        {/* Reset Filter */}
        <Button
          sx={{
            height: "70px",
            display: "flex",
            justifyContent: "space-between",
            color: "#EA0234",
            cursor: "pointer",
            fontWeight: "600", // Ensures Button text has font-weight
          }}
          onClick={() => setSelectedDate("")}
        >
          <img src="./images/re.svg" alt="Reset" width="16px" height="16px" />
          <Typography sx={{ color: "#EA0234", fontWeight: "600" }}>
            Reset Filter
          </Typography>
        </Button>
      </ButtonGroup>

      <TableContainer
        component={Paper}
        sx={{
          display: "flex",
          justifyContent: "",
          mt: 3,
          boxShadow: "0",
          borderRadius: "12px",
        }} // Center the table inside its container
      >
        <Table>
          <TableHead>
            <TableRow>
              {["ID", "Name", "Address", "Date", "Type", "Status"].map(
                (header) => (
                  <TableCell
                    key={header}
                    sx={{
                      py: 3,
                      px: 2,
                      fontSize: "14px",
                      color: "#202224",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      pl: header === "Status" ? "70px" : "40px", // Extra padding for "Status"
                    }}
                  >
                    <b>{header}</b>
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredOrders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order) => (
                <TableRow key={order.id} sx={{}}>
                  {[
                    order.id,
                    order.name,
                    order.address,
                    order.date,
                    order.type,
                  ].map((value, index) => (
                    <TableCell
                      key={index}
                      sx={{
                        py: 3,
                        px: 2,
                        fontSize: "14px",
                        color: "#202224",
                        fontWeight: "500",
                        textTransform: "uppercase",
                        pl: "40px", // Center table data
                      }}
                    >
                      {value}
                    </TableCell>
                  ))}

                  {/* Status Column with Centered Chip */}
                  <TableCell
                    sx={{
                      py: 3,
                      px: 2,
                      fontSize: "14px",
                      color: "#202224",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      textAlign: "center",
                      borderBottom: "1px solid #D5D5D5", // Ensures same border as other cells
                      height: "50px", // Matches other cells for perfect row alignment
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center", // Center horizontally
                        alignItems: "center", // Center vertically
                      }}
                    >
                      <Chip
                        label={order.status}
                        sx={{
                          width: "100px",
                          height: "32px",
                          borderRadius: "4.5px",
                          fontSize: "12px",
                          fontWeight: "500",
                          backgroundColor:
                            order.status === "Completed"
                              ? "rgba(0, 182, 155, 0.2)"
                              : order.status === "Processing"
                              ? "rgba(98, 38, 239, 0.2)"
                              : "rgba(239, 56, 38, 0.2)",
                          color:
                            order.status === "Completed"
                              ? "#00B69B"
                              : order.status === "Processing"
                              ? "#6226EF"
                              : "#EF3826",
                          display: "flex",
                          justifyContent: "center", // Center text inside the Chip
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination Component */}

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
          {Math.min((page + 1) * rowsPerPage, filteredOrders.length)} of{" "}
          {filteredOrders.length}
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
              page >= Math.ceil(filteredOrders.length / rowsPerPage) - 1
            }
          >
            <ChevronRight
              sx={{
                fontSize: "24px",
                color:
                  page >= Math.ceil(filteredOrders.length / rowsPerPage) - 1
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

export default OrderTable;
