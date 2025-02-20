import React, { useState } from "react";
import { Box, Button, Typography, IconButton, Divider } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import dayjs from "dayjs";

const Calendar = ({ onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const handleDateClick = (day) => {
    const fullDate = currentDate.format(
      `YYYY-MM-${day < 10 ? "0" + day : day}`
    );
    setSelectedDate(fullDate);
  };

  const handleApply = () => {
    if (selectedDate) {
      onSelectDate(selectedDate);
    }
  };

  const generateCalendarDays = () => {
    const startOfMonth = currentDate.startOf("month");
    const daysInMonth = currentDate.daysInMonth();
    const startDay = startOfMonth.day();
    let days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  return (
    <Box
      sx={{
        width: "280px",
        background: "#fff",
        borderRadius: "28px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        padding: "16px",
      }}
    >
      {/* Header: Month & Year Navigation */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontWeight="bold">
          {currentDate.format("MMMM YYYY")}
        </Typography>
        <Box>
          <IconButton onClick={handlePrevMonth} size="small">
            <ArrowBackIos fontSize="small" />
          </IconButton>
          <IconButton onClick={handleNextMonth} size="small">
            <ArrowForwardIos fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <Divider inset sx={{ my: 2 }} />

      {/* Week Days */}
      <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap="4px" mt={2}>
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <Typography key={index} fontWeight="bold" color="gray">
            {day}
          </Typography>
        ))}
      </Box>

      {/* Calendar Days */}
      <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap="4px" mt={1}>
        {generateCalendarDays().map((day, index) => (
          <Box
            key={index}
            onClick={() => day && handleDateClick(day)}
            sx={{
              width: "32px",
              height: "32px",
              lineHeight: "32px",
              textAlign: "center",
              cursor: day ? "pointer" : "default",
              borderRadius: "50%",
              backgroundColor:
                selectedDate ===
                currentDate.format(`YYYY-MM-${day < 10 ? "0" + day : day}`)
                  ? "#4D7CFE"
                  : "transparent",
              color:
                selectedDate ===
                currentDate.format(`YYYY-MM-${day < 10 ? "0" + day : day}`)
                  ? "#fff"
                  : "#000",
              fontWeight:
                selectedDate ===
                currentDate.format(`YYYY-MM-${day < 10 ? "0" + day : day}`)
                  ? "bold"
                  : "normal",
              "&:hover": day
                ? {
                    backgroundColor: "#e0e0e0",
                  }
                : {},
            }}
          >
            {day || ""}
          </Box>
        ))}
      </Box>

      {/* Apply Button */}

      <Divider inset sx={{ my: 2 }} />

      <Typography
        variant="p"
        color="#434343"
        sx={{
          fontSize: "14px",
          opacity: "0.83",
          textAlign: "left",
        }}
      >
        *You can choose multiple date
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          onClick={handleApply}
          sx={{
            backgroundColor: "#4D7CFE",
            color: "#fff",
            textTransform: "none",
            borderRadius: "8px",
            mt: 2,

            width: "129px",
            "&:hover": {
              backgroundColor: "#3a5fcc",
            },
          }}
        >
          Apply
        </Button>
      </Box>
    </Box>
  );
};

export default Calendar;
