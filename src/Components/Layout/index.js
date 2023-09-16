import React from "react";
import { Navbar } from "../../Components/Header/Navbar";
import { Footer } from "../../Components/Footer";
import { Box } from "@mui/material";
export const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};
