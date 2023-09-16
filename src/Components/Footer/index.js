//package imports
import React from "react";
import { Grid, Typography, Button, Box, Stack } from "@mui/material";
//components
import { companyFooter, services1Footer, services2Footer } from "../JsonData";
//styles
import footer from "../../Styles/Footer/footer.module.css";
// images
import be from "../../Images/be.png";
import fb from "../../Images/fb.png";
import up from "../../Images/Up.png";
import insta from "../../Images/insta.png";
import twitter from "../../Images/twiter.png";
import linkdin from "../../Images/linkedIn.png";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Grid
        container
        lg={12}
        sx={{ bgcolor: "rgb(0, 26, 31)" }}
        paddingLeft={4}
        paddingRight={4}
      >
        <Grid item lg={3} md={6} sm={6} xs={12} marginTop={5}>
          <Typography variant="h5" color="white;">
            COMPANY
          </Typography>
          {companyFooter.map((item) => {
            return <Button className={footer.footerButton}>{item.text}</Button>;
          })}
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} marginTop={5}>
          <Typography variant="h5" color="white">
            SERVICES
          </Typography>
          {services1Footer.map((item) => {
            return <Button className={footer.footerButton}>{item.text}</Button>;
          })}
        </Grid>

        <Grid item lg={3} md={6} sm={6} xs={12} marginTop={5}>
          <Typography variant="h5" color="white">
            SERVICES
          </Typography>
          {services2Footer.map((item) => {
            return <Button className={footer.footerButton}>{item.text}</Button>;
          })}
        </Grid>

        <Grid item lg={3} md={6} sm={6} xs={12} marginTop={5}>
          <Typography color="white" variant="h5">
            TECHNOLOGIES
          </Typography>
          <Button variant="outlined" className={footer.footerOutlineButton}>
            Redis
          </Button>
          <Button variant="outlined" className={footer.footerOutlineButton}>
            Node.js
          </Button>
          <Button variant="outlined" className={footer.footerOutlineButton}>
            Php
          </Button>
          <br />
          <Button variant="outlined" className={footer.footerOutlineButton}>
            Digital ocean
          </Button>
          <Button variant="outlined" className={footer.footerOutlineButton}>
            {" "}
            Gradle
          </Button>
          <br />
          <Button variant="outlined" className={footer.footerOutlineButton}>
            Amazon
          </Button>
          <Button variant="outlined" className={footer.footerOutlineButton}>
            Azure
          </Button>
          <Button variant="outlined" className={footer.footerOutlineButton}>
            Linode
          </Button>
          <Button variant="outlined" className={footer.footerOutlineButton}>
            Rackspace
          </Button>
          <Button variant="outlined" className={footer.footerOutlineButton}>
            Jenkins
          </Button>
        </Grid>
        <Box className={footer.line}></Box>
        <Grid item lg={10} md={10} sm={10}>
          <Stack direction="row" spacing={3} padding={2}>
            <img src={fb} />
            <img src={insta} />
            <img src={linkdin} />
            <img src={be} />
            <img src={twitter} />
          </Stack>
        </Grid>
        <Grid item lg={2} md={2} sm={2} xs={10}>
          <Stack direction="row">
            <img src={up} onClick={scrollToTop} className={footer.upButton} />
          </Stack>
        </Grid>
      </Grid>
      <Grid container lg={12} sx={{ bgcolor: "#16b1e1" }} padding={5}>
        <Grid item lg={3} md={3} sm={3} xs={12}>
          <Typography textAlign={{ xs: "center;" }} marginTop={{ xs: "20px;" }}>
            • Privacy policy
          </Typography>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={12}>
          <Typography textAlign={{ xs: "center;" }} marginTop={{ xs: "20px;" }}>
            • Terms & conditions
          </Typography>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={12}>
          <Typography textAlign={{ xs: "center;" }} marginTop={{ xs: "20px;" }}>
            ©All rights reserved 2023 GSC
          </Typography>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={12}>
          <Typography textAlign={{ xs: "center;" }} marginTop={{ xs: "20px;" }}>
            "info@gsoftconsulting.com"
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
