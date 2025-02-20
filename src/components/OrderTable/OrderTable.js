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
  TablePagination,
  ButtonGroup,
} from "@mui/material";
import Calendar from "./Calendar";

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
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Order Lists
      </Typography>

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
        borderTop: "1px solid #D5D5D5", // Double border
        borderBottom: "1px solid #D5D5D5", // Double border
        "& .MuiButtonGroup-grouped": {
          borderColor: "#D5D5D5",
          flexGrow: 1,
          minWidth: "100px",
          textTransform: "none",
          fontFamily: "Nunito Sans, sans-serif",
          fontSize: "14px",
          lineHeight: "19.1px",
          letterSpacing: "0px",
          fontWeight: 400,
        },
        "@media (max-width: 600px)": {
          flexDirection: "column",
          alignItems: "stretch",
        },
      }}
    >
      {/* Filter Button */}
      <Button sx={{ height: "70px", minWidth: "50px", px: 2, display: "flex", justifyContent: "center" }}>
        <img src="./images/filter.svg" alt="Filter" />
      </Button>

      {/* Filter By */}
      <Button sx={{ height: "70px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        Filter By
      </Button>

      {/* Date Filter with Popover */}
      <Button
        sx={{
          height: "70px",
          display: "flex",
          justifyContent: "space-between",
          px: 2,
        }}
        onClick={handleDateClick} // Opens popover
      >
        {selectedDate || "Date"}
        <img src="./images/arr.svg" alt="Dropdown" width="16px" height="16px" />
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
      <Button sx={{ height: "70px", display: "flex", justifyContent: "space-between", px: 2 }}>
        Order Type
        <img src="./images/arr.svg" alt="Dropdown" width="16px" height="16px" />
      </Button>

      {/* Order Status Dropdown */}
      <Button sx={{ height: "70px", display: "flex", justifyContent: "space-between", px: 2 }}>
        Order Status
        <img src="./images/arr.svg" alt="Dropdown" width="16px" height="16px" />
      </Button>

      {/* Reset Filter */}
      <Button
        sx={{
          height: "70px",
          display: "flex",
          justifyContent: "center",
          color: "#EA0234",
          cursor: "pointer",
        }}
        onClick={() => setSelectedDate("")}
      >
        <img src="./images/re.svg" alt="Reset" width="16px" height="16px" />
        Reset Filter
      </Button>
    </ButtonGroup>

      <TableContainer
        component={Paper}
        sx={{ display: "flex", justifyContent: "center", mt: 3, boxShadow:"0", borderRadius:'12px'}} // Center the table inside its container
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
                      textAlign: "center", // Center header text
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
                <TableRow
                  key={order.id}
                  sx={{  }}
                >
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
                        textAlign: "center", // Center table data
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
          mt: 3,
        }}
      >
        {/* Left: Showing "1–9 of 10" */}
        <Typography variant="body2" sx={{ ml: 2 }}>
          Showing{" "}
          {`${page * rowsPerPage + 1}–${Math.min(
            (page + 1) * rowsPerPage,
            filteredOrders.length
          )} of ${filteredOrders.length}`}
        </Typography>

        {/* Order Table with Pagination */}

        {/* Right: Only forward & backward buttons with customized icons */}
        <TablePagination
  rowsPerPageOptions={[]} // Hide rows per page options
  component="div"
  count={filteredOrders.length}
  rowsPerPage={rowsPerPage}
  page={page}
  onPageChange={handleChangePage}
  labelDisplayedRows={() => ""} // Hides page number text
  slotProps={{
    actions: {
      sx: {
        marginLeft: "auto",
        "& button": {
          backgroundColor: "#979797", // Background color
          borderRadius: "6px", // Rounded edges
          color: "#FFFFFF", // Text color
          width: "36px", // Square button
          height: "36px", // Square button
          "&:hover": {
            backgroundColor: "#7a7a7a", // Darker hover effect
          },
          "&.Mui-disabled": {
            backgroundColor: "#D3D3D3", // Disabled button color
            color: "#B0B0B0",
          },
        },
      },
    },
  }}
/>




      </Box>
    </Box>
  );
};

export default OrderTable;
