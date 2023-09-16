import React from "react";
import company from "../../Styles/Pages/Company/company.module.css";
import { Box, Typography, Grid, Container } from "@mui/material";
import houzePk from "../../Images/houzePk.png";
import marronStudios from "../../Images/marronStudios.png";
import omidLife from "../../Images/omidLife.png";
import viralTech from "../../Images/viralTech.png";
import blend from "../../Images/blend.png";
export const MeetOurClient = () => {
  return (
    <Box
      className={company.meetOurClientContainer}
      sx={{ padding: { lg: "35px", md: "35px", sm: "35px", xs: "35px 10px" } }}
    >
      <Typography
        fontSize={{ lg: "48px;", md: "48px;", sm: "48px", xs: "32px;" }}
      >
        Meet Our Client
      </Typography>
      <Grid container lg={12}>
        <Grid item lg={4} md={4} sm={6} xs={12} marginTop={3}>
          <Box
            className={company.meetOurClientBoxContainer}
            width={{ lg: "400px", md: "321px;", sm: "324px;" }}
          >
            <img src={houzePk} alt="houzePk" />
            <Typography
              variant="h4"
              fontSize={{ xs: "20px;", paddingTop: "32px" }}
              paddingLeft={1}
            >
              Houze Pk
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12} marginTop={3}>
          <Box
            className={company.meetOurClientBoxContainer}
            width={{ lg: "400px", md: "321px;", sm: "324px;" }}
          >
            <img src={marronStudios} alt="marronStudios" />
            <Typography
              variant="h4"
              paddingLeft={1}
              color="white;"
              fontSize={{ xs: "20px;", paddingTop: "32px" }}
            >
              Maroon Studios
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12} marginTop={3}>
          <Box
            className={company.meetOurClientBoxContainer}
            width={{ lg: "400px", md: "321px;", sm: "324px;" }}
          >
            <img src={omidLife} alt="omidLife" />
            <Typography
              variant="h4"
              paddingLeft={1}
              color="white;"
              fontSize={{ xs: "20px;", paddingTop: "32px" }}
            >
              Omid Life
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          lg={4}
          md={4}
          sm={6}
          xs={12}
          marginTop={3}
          width={{ lg: "400px", md: "321px;", sm: "324px;" }}
        >
          <Box
            className={company.meetOurClientBoxContainer}
            width={{ lg: "400px", md: "321px;", sm: "324px;" }}
          >
            <img src={viralTech} alt="viralTech" />
            <Typography
              variant="h4"
              paddingLeft={1}
              color="white;"
              fontSize={{ xs: "20px;", paddingTop: "32px" }}
            >
              Vival Tech
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Box></Box>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12} marginTop={3}>
          <Box
            className={company.meetOurClientBoxContainer}
            width={{ lg: "400px", md: "321px;", sm: "324px;" }}
          >
            <img src={blend} alt="blend" />
            <Typography
              variant="h4"
              paddingLeft={1}
              paddingBottom={3}
              color="white;"
              fontSize={{ xs: "20px;", paddingTop: "32px" }}
            >
              Blend Menu
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
