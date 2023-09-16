import React from "react";
import company from "../../Styles/Pages/Company/company.module.css";
import { Box, Typography, Grid, Container } from "@mui/material";
import number from "../../Images/number.png";
export const Number = () => {
  return (
    <Container>
      <Grid container lg={12} sx={{ margin: "40px 0px" }}>
        <Grid item lg={6} md={12} sm={12}>
          <img src={number} alt="number" className={company.number} />
        </Grid>
        <Grid
          item
          lg={2}
          md={2}
          sm={2}
          textAlign="center"
          margin={{ lg: "auto;", md: "auto;", sm: "auto;", xs: "30px auto;" }}
        >
          <Typography variant="h3">60 +</Typography>
          <Typography textAlign="center"> Happy Client</Typography>
          <Typography variant="h3">1430+</Typography>
          <Typography>Hours of support</Typography>
        </Grid>
        <Grid
          item
          lg={2}
          md={2}
          sm={2}
          margin={{ lg: "auto;", md: "auto;", sm: "auto;", xs: "30px auto;" }}
          textAlign="center"
        >
          <Typography variant="h3">60 +</Typography>
          <Typography> project</Typography>
          <Typography variant="h3">30+</Typography>
          <Typography>Talented Gsoftians</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
