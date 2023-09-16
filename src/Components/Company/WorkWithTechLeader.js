import React from "react";
import company from "../../Styles/Pages/Company/company.module.css";

import {
  Box,
  Typography,
  Grid,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Text from "../../Components/TextOfAllComponent/Text.json";
import workWithTechLeaderImg from "../../Images/workWithTechLeaderImg.png";
export const WorkWithTechLeader = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container>
      <Grid container data-aos="fade-right" sx={{ margin: "100px 0px" }}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box>
            <Typography textAlign={{ xs: "center;", sm: "revert" }}>
              {Text.workWithTechLeaderHeading}
            </Typography>
            <Typography
              className={company.workWithTechLeaderCompanyHeading}
              fontSize={{ lg: "48px;", md: "48px;", sm: "48px", xs: "32px;" }}
              textAlign={{ lg: "left;", md: "left", sm: "left", xs: "center" }}
            >
              {Text.workWithTechLeaderSubHeading}
            </Typography>

            <Typography
              className={company.workWithTechLeaderCompanyPara}
              fontSize={{ lg: "18px;", md: "20px;", sm: "20px;", xs: "16px;" }}
              textAlign={{ xs: "center;", sm: "revert" }}
              padding-right={{ lg: "34px", md: "34px", sm: "0", xs: "0" }}
            >
              {Text.workWithTechLeaderParagraph}
            </Typography>
          </Box>
        </Grid>
        {isMatch ? (
          ""
        ) : (
          <Grid item lg={6} md={6} sm={12}>
            <img
              src={workWithTechLeaderImg}
              alt="workWithTechLeaderImg"
              className={company.workWithTechLeaderImg}
            />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};
