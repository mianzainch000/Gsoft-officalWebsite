import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import home from "../../Styles/Pages/Home/home.module.css";
import Text from "../../Components/TextOfAllComponent/Text.json";
import bannerArea from "../../Images/bannerArea.png";
export const BannerArea = () => {
  return (
    <Box
      className={home.bannerImg}
      sx={{ backgroundImage: `url(${bannerArea})` }}
    >
      <Box data-aos="fade-right">
        <Container>
          <Typography
            fontSize={{ lg: "48px;", md: "48px", sm: "48px;", xs: "30px" }}
            width={{ lg: "541px;", md: "541px", sm: "541px", xs: "200px" }}
            className={home.bannerImgHeading}
          >
            {Text.bannerHeading}
          </Typography>
          <Typography
            width={{ lg: "600px", md: "600px", sm: "600px", xs: "none" }}
            className={home.bannerImgParagraph}
          >
            {Text.bannerParagraph}
          </Typography>

          <Button
            variant="outlined"
            sx={{
              width: { lg: "330px", md: "330px;", sm: "330px;", xs: "240px" },
            }}
            className={home.bannerImgButton}
          >
            {Text.bannerButton}
          </Button>
        </Container>
      </Box>
    </Box>
  );
};
