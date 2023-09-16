import React, { useState } from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import Text from "../../Components/TextOfAllComponent/Text.json";
import { workingProcess } from "../../Components/JsonData";
export const WorkFlow = () => {
  const [isHover, setIsHover] = useState(false);
  const [indexState, setindexState] = useState(null);

  const handleMouseEnter = (index) => {
    setIsHover(true);
    setindexState(index);
  };
  const handleMouseLeave = () => {
    setIsHover(false);

    setindexState(null);
  };
  return (
    <Box
      sx={{
        padding: "40px 0px;",
        backgroundColor: "#001A1F",
        marginTop: "20px;",
        color: "white;",
      }}
    >
      <Container>
        <Typography
          fontSize={{ lg: "50px;", md: "50px;", sm: "50px;", xs: "30px;" }}
        >
          {" "}
          {Text.workingProcessHeading}
        </Typography>
        <Typography
          fontSize={{ lg: "50px;", md: "50px;", sm: "50px;", xs: "30px;" }}
          marginTop={3}
        >
          {Text.workingProcessSubHeading}
        </Typography>
        <Grid container lg={12}>
          {workingProcess.map((item, index) => {
            return (
              <Grid
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                item
                key={index}
                lg={3}
                md={3}
                sm={6}
                xs={12}
                sx={{
                  marginTop: "50px;",
                  transition: "transform 1s ease",
                  transform:
                    isHover && indexState === index
                      ? "translateY(-60px)"
                      : "translateY(0)",
                  backgroundColor:
                    isHover && indexState === index
                      ? "rgba(255,255,255,0.1)"
                      : "",
                  height: isHover && indexState === index ? "60vh" : "",
                  padding: isHover && indexState === index ? "200px 0x" : "",
                }}
              >
                <Typography color="blue;" textAlign="center;" fontSize="50px">
                  {item.heading}
                </Typography>
                <Typography
                  textAlign="center;"
                  sx={{ padding: "5px 22px;" }}
                  fontSize="20px"
                >
                  {" "}
                  {item.subHeading}
                </Typography>
                <Typography
                  color="white;"
                  textAlign="center;"
                  sx={{ padding: "5px 22px;" }}
                  fontSize="20px"
                >
                  {item.paragraph}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
