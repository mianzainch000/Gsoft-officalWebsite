import "./App.css";
import React from "react";
import { CustomScrollBar } from "./Components/CustomScrollBar";
import { Routers } from "./Router";
import { Box } from "@mui/material";

function App() {
  return (
    <Box className="app">
      <CustomScrollBar />
      <Routers />
    </Box>
  );
}

export default App;
