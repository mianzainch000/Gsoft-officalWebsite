import React from "react";
import company from "../../Styles/Pages/Company/company.module.css";
import { Typography, Grid, Container } from "@mui/material";
import vision from "../../Images/vision.png";
import mission from "../../Images/mission.png";
import Text from "../../Components/TextOfAllComponent/Text.json";

export const OurMissionAndVision = () => {
  return (
    <Grid
      container
      className={company.ourMissionContainer}
      sx={{
        padding: {
          lg: "100px 50px;",
          md: "100px 50px;",
          sm: "100px 50px;",
          xs: "100px 30px;",
        },
      }}
    >
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <img src={mission} alt="mission" />
        <Typography className={company.ourMissionHeading}>
          {Text.ourMissionHeading}
        </Typography>
        <Typography
          fontSize={{ lg: "48px;", md: "48px;", sm: "48px;", xs: "32px;" }}
          className={company.ourMissionHeading}
        >
          {Text.ourMissionSubHedaing}
        </Typography>
        <Typography
          fontSize={{ lg: "18px;", md: "18px;", sm: "18px;", xs: "16px;" }}
          className={company.ourMissionParagraph}
        >
          {Text.ourMissionParagraph}
        </Typography>
      </Grid>
      <Grid
        item
        lg={6}
        md={6}
        sm={12}
        xs={12}
        sx={{
          padding: { lg: "0px", md: "0px", sm: "100px 0px", xs: "100px 0px" },
        }}
      >
        <img src={vision} alt="vision" />
        <Typography className={company.ourMissionHeading}>
          {Text.ourVisionHeading}
        </Typography>
        <Typography
          fontSize={{ lg: "48px;", md: "48px;", sm: "48px;", xs: "32px;" }}
          className={company.ourMissionHeading}
        >
          {Text.ourVisionSubHedaing}
        </Typography>
        <Typography
          fontSize={{ lg: "18px;", md: "18px;", sm: "18px;", xs: "16px;" }}
          className={company.ourMissionParagraph}
        >
          {Text.ourVisionParagraph}
        </Typography>
      </Grid>
    </Grid>
  );
};
