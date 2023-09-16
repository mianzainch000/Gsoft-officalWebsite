import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import home from "../../Styles/Pages/Home/home.module.css";
import Text from "../../Components/TextOfAllComponent/Text.json";
import { services } from "../../Components/JsonData";
export const OurServices = () => {
  return (
    <>
      <Typography
        textAlign="center;"
        variant="h4"
        data-aos="fade-right"
        className={home.servicesHeading}
        sx={{
          background:
            "linear-gradient(259.45deg, #16BCE1 -6.94%, #9FE8FF 104.78%)",
        }}
      >
        {Text.services}
      </Typography>
      <Grid
        container
        lg={12}
        sx={{
          background:
            "linear-gradient(259.45deg, #16BCE1 -6.94%, #9FE8FF 104.78%)",
        }}
        data-aos="fade-right"
      >
        {services.map((item, index) => {
          const isLastThree = index >= services.length - 3;
          return (
            <Grid
              container
              key={index}
              lg={3}
              md={3}
              sm={6}
              xs={12}
              sx={{
                margin: isLastThree ? "auto" : 0,
                padding: "0px 30px",
              }}
              className={home.ourServicesHover}
            >
              <Box
                sx={{
                  padding: {
                    lg: "20px 10px",
                    md: "20px 10px",
                    sm: "20px 10px",
                    xs: "20px 26px",
                  },
                  width: { lg: "300px;" },
                  textAlign: "center",
                }}
              >
                <Typography>
                  <img src={item.img} className={home.img360} />
                </Typography>
                <Typography fontSize="27px;">{item.heading}</Typography>
                <Typography>{item.paragraph}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
