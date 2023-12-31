import { Box } from "@mui/material";
import React from "react";
import logo from "../../assets/images/logo.jpg";

const Branding = ({ isMobile }) => {
  return (
    <Box
      sx={{
        "& img": {
          width: isMobile ? "100%" : "100%",
        },
        backgroundColor: "#ffffff",
        minHeight: isMobile ? "auto" : "18rem",
        maxHeight: isMobile ? "auto" : "18rem",
        padding: "1rem",
      }}
    >
      <img src={logo} alt="logo" />
    </Box>
  );
};

export default Branding;
