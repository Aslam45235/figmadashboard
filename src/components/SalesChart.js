import React from "react";
import { Box, Typography, Grid, Select, MenuItem, Card } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart, CartesianGrid } from "recharts";

const data = [
  { name: "5k", value: 30 },
  { name: "10k", value: 50 },
  { name: "15k", value: 40 },
  { name: "20k", value: 90 },
  { name: "25k", value: 55 },
  { name: "30k", value: 65 },
  { name: "35k", value: 30 },
  { name: "40k", value: 75 },
  { name: "45k", value: 60 },
  { name: "50k", value: 70 },
  { name: "55k", value: 65 },
  { name: "60k", value: 68 },
  { name: "35k", value: 30 },
  { name: "40k", value: 75 },
  { name: "45k", value: 60 },
  { name: "50k", value: 70 },
  { name: "55k", value: 65 },
  { name: "60k", value: 68 },
];

const SalesChart = () => {
  return (
    <Grid container spacing={3} sx={{ padding: "24px" }}>
      <Grid item xs={12}>
        <Card sx={{ padding: "24px", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
          {/* Title and Dropdown */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography
              sx={{ fontFamily: "Nunito Sans", fontSize: "20px", fontWeight: "bold" }}
            >
              Sales Details
            </Typography>
            <Select defaultValue="October" sx={{ borderRadius: "4px", fontSize: "14px", height: "28px" }}>
              <MenuItem value="October">October</MenuItem>
              <MenuItem value="November">November</MenuItem>
              <MenuItem value="December">December</MenuItem>
            </Select>
          </Box>

          {/* Chart */}
          <Box sx={{ width: "100%", height: 300, marginTop: "16px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                {/* Background Grid */}
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                {/* Sharp Edged Area */}
                <Area type="line" dataKey="value" stroke="#3B82F6" fill="#EBF2FF" strokeWidth={3} />

                {/* Sharp Line with Dots */}
                <Line 
                  type="line" 
                  dataKey="value" 
                  stroke="#3B82F6" 
                  strokeWidth={2} 
                  dot={{ fill: "#3B82F6", stroke: "#FFFFFF", strokeWidth: 6, r: 5 }} // Dots with white stroke
                  activeDot={{ r: 7, stroke: "#2563EB", strokeWidth: 2 }} // Larger active dot
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SalesChart;
