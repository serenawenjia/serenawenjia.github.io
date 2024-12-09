import { Typography } from "@mui/material";
import React from "react";

export function BigHeader({ children, sx }) {
  return (
    <Typography
      variant="h3"
      sx={{ fontWeight: "bold", marginTop: 15, marginBottom: 5, ...sx }}
    >
      {children}
    </Typography>
  );
}

export function SmallHeader({ children, sx }) {
  return (
    <Typography
      variant="h5"
      sx={{ fontWeight: "bold", marginBottom: 1, marginTop: 5, ...sx }}
    >
      {children}
    </Typography>
  );
}
