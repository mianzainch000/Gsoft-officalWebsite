import React from "react";
import { Layout } from "../../Components/Layout";
import { Grid, Box, Typography, Paper } from "@mui/material";
import life from "../../Styles/Pages/Life/life.module.css";
import Text from "../../Components//TextOfAllComponent/Text.json";

export const Life = () => {
  return (
    <Layout>
      <Grid container lg={12}>
        <Box className={life.bannerImg}>
          <Box>
            <Grid item lg={12}>
              <Typography
                className={life.bannerHeading}
                fontSize={{ lg: "48px", md: "48px;", sm: "48px", xs: "40px;" }}
              >
                {Text.lifeAtGsoftBannerHeading}
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Typography
                className={life.bannerHeading2}
                fontSize={{ lg: "40px", md: "40px;", sm: "40px", xs: "25px;" }}
              >
                {Text.lifeAtGsoftBannerHeading2}
              </Typography>
            </Grid>
          </Box>
        </Box>
      </Grid>

      <Grid
        container
        lg={11}
        md={11}
        sm={11}
        xs={11}
        columnGap={2}
        sx={{ margin: "20px auto;" }}
      >
        <Grid item lg={5.5} md={5.5} sm={5.5} xs={12}>
          <Box>
            {" "}
            <Typography
              textAlign={{
                lg: "justify",
                md: "justify",
                sm: "justify",
                xs: "center;",
              }}
              className={life.ourTeamHeading}
            >
              {Text.ourTeamHeading}
            </Typography>
            <Typography
              textAlign={{
                lg: "justify",
                md: "justify",
                sm: "justify",
                xs: "center;",
              }}
              className={life.ourTeamHeading}
            >
              {Text.ourTeamHeading2}
            </Typography>
            <Typography
              className={life.ourTeamParagraph}
              textAlign={{
                lg: "justify",
                md: "justify",
                sm: "justify",
                xs: "center;",
              }}
            >
              {Text.ourTeamParagraph}
            </Typography>
          </Box>
        </Grid>

        <Grid item lg={5.5} md={5.5} sm={5.5} xs={12}>
          <Box>
            <img
              src="http://cdn.royal-flags.co.uk/media/image/1925r.jpg"
              className={life.img}
            />
          </Box>
        </Grid>

        <Grid item lg={5.5} md={5.5} sm={5.5} xs={12}>
          <Box>
            <img
              src="http://cdn.royal-flags.co.uk/media/image/1925r.jpg"
              className={life.img}
            />
          </Box>
        </Grid>
        <Grid container lg={5.5} md={5.5} sm={5.5} xs={12} columnGap={2}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box>
              <img
                src="http://cdn.royal-flags.co.uk/media/image/1925r.jpg"
                className={life.img}
              />
            </Box>
          </Grid>
          <Grid item lg={5.5} md={5.5} sm={5.5} xs={12}>
            <Box>
              <img
                src="http://cdn.royal-flags.co.uk/media/image/1925r.jpg"
                className={life.img}
              />
            </Box>
          </Grid>
          <Grid item lg={5.5} md={5.5} sm={5.5} xs={12}>
            <Box>
              <img
                src="http://cdn.royal-flags.co.uk/media/image/1925r.jpg"
                className={life.img}
              />
            </Box>
          </Grid>
        </Grid>
        {/* map */}
        {[0, 0, 0, 0].map((item) => {
          return (
            <Grid item lg={5.5} md={5.5} sm={5.5} xs={12}>
              <Box>
                <img
                  src="http://cdn.royal-flags.co.uk/media/image/1925r.jpg"
                  className={life.img}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
};
