import React from "react";
import { Box, Typography } from "@mui/material";
import home from "../../Styles/Pages/Home/home.module.css";
import Text from "../../Components/TextOfAllComponent/Text.json";
export const WhoWeAre = () => {
  return (
    <Box
      sx={{
        padding: {
          lg: "100px 161px;",
          md: "100px 161px;",
          sm: "100px 161px;",
          xs: "20px;",
        },
      }}
      data-aos="fade-right"
      className={home.whoWeAreContainer}
    >
      <Typography textAlign="center;" fontSize="30px;">
        {Text.whoWeAreHeading}
      </Typography>

      <Typography
        textAlign="center;"
        sx={{ marginTop: "20px;" }}
        fontSize="20px;"
      >
        {Text.whoWeAreSubHeading}
      </Typography>

      <Typography
        textAlign="center;"
        sx={{ marginTop: "20px;" }}
        fontSize="18px;"
      >
        {Text.whoWeAreParagraph}
      </Typography>
    </Box>
  );
};
