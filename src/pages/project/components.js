import { Typography } from "@mui/material";
import React from "react";

export function BigHeader({ children, sx }) {
  return (
    <Typography
      variant="h3"
      sx={{ fontWeight: "bold", marginTop: 5, marginBottom: 5, ...sx }}
    >
      {children}
    </Typography>
  );
}

export function SmallHeader({ children, sx }) {
  return (
    <Typography
      variant="h5"
      gutterBottom
      sx={{ fontWeight: "bold", marginTop: 5, ...sx }}
    >
      {children}
    </Typography>
  );
}
