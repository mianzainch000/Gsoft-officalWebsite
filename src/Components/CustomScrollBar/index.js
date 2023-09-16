import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import customScrollBar from "../../Styles/CustomScrollBar/customScrollBar.module.css";
export const CustomScrollBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box className={customScrollBar.progressBar}>
      <Box
        className={customScrollBar.progress}
        style={{ width: `${scrollProgress}%` }}
      ></Box>
    </Box>
  );
};
