import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import home from "../../Styles/Pages/Home/home.module.css";
import frontEnd from "../../Images/frontEnd.png";
import mobile from "../../Images/mobile.png";
import cms from "../../Images/cms.png";
import devops from "../../Images/devops.png";
import backEnd from "../../Images/backEnd.png";
import dataBase from "../../Images/dataBase.png";
export const TechnologiesWeWorkWith = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Box data-aos="fade-right">
      <Typography textAlign="center;" variant="h4" marginTop={10}>
        Technologies We Work With
      </Typography>

      <Box
        sx={{
          margin: "auto;",
          width: { lg: "750px;", md: "750px;", sm: "750px;", xs: "none;" },
          textAlign: "center;",
          marginTop: "50px;",
        }}
      >
        <Grid container lg={12}>
          <Grid item lg={2} md={2} sm={2} xs={4}>
            <Box
              className={` ${activeTab === "tab1" ? "activeButton" : ""}`}
              onClick={() => handleTabClick("tab1")}
            >
              <Button>Fornt-End</Button>
            </Box>
          </Grid>
          <Grid
            item
            lg={2}
            md={2}
            sm={2}
            xs={4}
            className={home.buttonTechnologyWeWorkWithHeightFix}
          >
            <Box
              className={` ${activeTab === "tab2" ? "activeButton" : ""}`}
              onClick={() => handleTabClick("tab2")}
            >
              <Button>Mobile</Button>
            </Box>
          </Grid>
          <Grid
            item
            lg={2}
            md={2}
            sm={2}
            xs={4}
            className={home.buttonTechnologyWeWorkWithHeightFix}
          >
            <Box
              className={` ${activeTab === "tab3" ? "activeButton" : ""}`}
              onClick={() => handleTabClick("tab3")}
            >
              <Button>CMS</Button>
            </Box>
          </Grid>
          <Grid
            item
            lg={2}
            md={2}
            sm={2}
            xs={4}
            className={home.buttonTechnologyWeWorkWithHeightFix}
          >
            <Box
              className={` ${activeTab === "tab4" ? "activeButton" : ""}`}
              onClick={() => handleTabClick("tab4")}
            >
              <Button>Devops</Button>
            </Box>
          </Grid>
          <Grid
            item
            lg={2}
            md={2}
            sm={2}
            xs={4}
            className={home.buttonTechnologyWeWorkWithHeightFix}
          >
            <Box
              className={` ${activeTab === "tab5" ? "activeButton" : ""}`}
              onClick={() => handleTabClick("tab5")}
            >
              <Button>Back-End</Button>
            </Box>
          </Grid>
          <Grid
            item
            lg={2}
            md={2}
            sm={2}
            xs={4}
            className={home.buttonTechnologyWeWorkWithHeightFix}
          >
            <Box
              className={` ${activeTab === "tab6" ? "activeButton" : ""}`}
              onClick={() => handleTabClick("tab6")}
            >
              <Button>Database</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box className={home.buttonTechnologyWeWorkWithHeightFix}>
        {activeTab === "tab1" && <Tab1Content />}
        {activeTab === "tab2" && <Tab2Content />}
        {activeTab === "tab3" && <Tab3Content />}
        {activeTab === "tab4" && <Tab4Content />}
        {activeTab === "tab5" && <Tab5Content />}
        {activeTab === "tab6" && <Tab6Content />}
      </Box>
    </Box>
  );
};

const Tab1Content = () => {
  return (
    <Box
      sx={{
        margin: "auto;",
        width: {
          lg: "500px;",
          md: "500px;",
          sm: "500px;",
          xs: "none;",
        },
        textAlign: {
          lg: "center;",
          md: "center;",
          sm: "center;",
          xs: "center;",
        },
        marginTop: "20px;",
      }}
    >
      <Grid container lg={12}>
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={frontEnd} alt="frontEnd" />
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={frontEnd} alt="frontEnd" />
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={frontEnd} alt="frontEnd" />
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={frontEnd} alt="frontEnd" />
        </Grid>
      </Grid>
    </Box>
  );
};

const Tab2Content = () => {
  return (
    <Box
      sx={{
        margin: "auto;",
        width: {
          lg: "500px;",
          md: "500px;",
          sm: "500px;",
          xs: "none;",
        },
        textAlign: {
          lg: "center;",
          md: "center;",
          sm: "center;",
          xs: "center;",
        },
        marginTop: "20px;",
      }}
    >
      <Grid container lg={12}>
        {" "}
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={mobile} alt="mobile" />
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={mobile} alt="mobile" />
        </Grid>{" "}
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={mobile} alt="mobile" />
        </Grid>{" "}
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={mobile} alt="mobile" />
        </Grid>
      </Grid>
    </Box>
  );
};

const Tab3Content = () => {
  return (
    <Box
      sx={{
        margin: "auto;",
        width: {
          lg: "500px;",
          md: "500px;",
          sm: "500px;",
          xs: "none;",
        },
        textAlign: {
          lg: "center;",
          md: "center;",
          sm: "center;",
          xs: "center;",
        },
        marginTop: "20px;",
      }}
    >
      <Grid container lg={12}>
        {" "}
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={cms} alt="cms" />
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={cms} alt="cms" />
        </Grid>{" "}
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={cms} alt="cms" />
        </Grid>{" "}
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={cms} alt="cms" />
        </Grid>
      </Grid>
    </Box>
  );
};

const Tab4Content = () => {
  return (
    <Box
      sx={{
        margin: "auto;",
        width: {
          lg: "500px;",
          md: "500px;",
          sm: "500px;",
          xs: "none;",
        },
        textAlign: {
          lg: "center;",
          md: "center;",
          sm: "center;",
          xs: "center;",
        },
        marginTop: "20px;",
      }}
    >
      <Grid container lg={12}>
        {" "}
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={devops} alt="devops" />
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={devops} alt="devops" />
        </Grid>{" "}
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={devops} alt="devops" />
        </Grid>{" "}
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={devops} alt="devops" />
        </Grid>
      </Grid>
    </Box>
  );
};

const Tab5Content = () => {
  return (
    <Box
      sx={{
        margin: "auto;",
        width: {
          lg: "500px;",
          md: "500px;",
          sm: "500px;",
          xs: "none;",
        },
        textAlign: {
          lg: "center;",
          md: "center;",
          sm: "center;",
          xs: "center;",
        },
        marginTop: "20px;",
      }}
    >
      <Grid container lg={12}>
        {" "}
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={backEnd} alt="backEnd" />
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={backEnd} alt="backEnd" />
        </Grid>{" "}
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={backEnd} alt="backEnd" />
        </Grid>{" "}
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={backEnd} alt="backEnd" />
        </Grid>
      </Grid>
    </Box>
  );
};

const Tab6Content = () => {
  return (
    <Box
      sx={{
        margin: "auto;",
        width: {
          lg: "500px;",
          md: "500px;",
          sm: "500px;",
          xs: "none;",
        },
        textAlign: {
          lg: "center;",
          md: "center;",
          sm: "center;",
          xs: "center;",
        },
        marginTop: "20px;",
      }}
    >
      <Grid container lg={12}>
        {" "}
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={dataBase} alt="dataBase" />
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={dataBase} alt="dataBase" />
        </Grid>{" "}
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={dataBase} alt="dataBase" />
        </Grid>{" "}
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <img src={dataBase} alt="dataBase" />
        </Grid>
      </Grid>
    </Box>
  );
};
