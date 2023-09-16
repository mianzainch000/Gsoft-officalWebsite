import React from "react";
import Banner from "../../Images/banner.png";
import company from "../../Styles/Pages/Company/company.module.css";
import { Box, Typography, Button, Grid } from "@mui/material";
import Text from "../../Components/TextOfAllComponent/Text.json";
export const BannerArea = () => {
  return (
    <Box
      sx={{ backgroundImage: `url(${Banner})` }}
      className={company.bannerImg}
    >
      <Grid container className={company.headerContainer}>
        <Grid item xs={9} sm={9} md={9} lg={9} sx={{ margin: "auto" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: { lg: "48px", md: "48px", sm: "48px", xs: "30px" },
            }}
            textAlign={{ xs: "center", sm: "revert" }}
          >
            {Text.bannerHeadingCompany}
          </Typography>
          <Typography
            sx={{ color: "white;" }}
            fontSize={{ lg: "36px;", md: "36px", sm: "36px;", xs: "24px" }}
            textAlign={{ xs: "center", sm: "revert" }}
          >
            {Text.bannerSubHeading}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <Button
              variant="outlined"
              sx={{
                width: { lg: "330px", md: "330px;", sm: "330px;", xs: "274px" },
              }}
            >
              {Text.bannerButton}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
