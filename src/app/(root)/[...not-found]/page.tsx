import { Typography } from "@mui/material";
import { FC } from "react";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4">Page Not Found</Typography>
    </div>
  );
};