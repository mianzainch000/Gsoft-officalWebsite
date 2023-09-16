import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
  Grid,
  Button,
} from "@mui/material";
import slider from "../../Styles/Pages/Slider/slider.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { imgSlider } from "../JsonData";
import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,
  useDragToScroll,
} from "react-snaplist-carousel";

export const Slider = () => {
  const snapList = useRef(null);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const visible = useVisibleElements(
    { debounce: 10, ref: snapList },
    ([element]) => element
  );
  const [currentIndex, setCurrentIndex] = useState(1);
  const goToSnapItem = useScroll({ ref: snapList });
  const { isDragging } = useDragToScroll({ ref: snapList });
  const MyItem = ({ onClick, children, visible }) => (
    <Box
      style={{
        cursor: isMatch
          ? visible
            ? "default"
            : "pointer"
          : visible
          ? "default"
          : "pointer",
        opacity: isMatch ? "" : visible ? 1 : 0.1,
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
  useEffect(() => {
    goToSnapItem(1);
  }, []);

  const handleNext = () => {
    if (currentIndex < imgSlider.length - 1 && !isDragging) {
      const nextIndex = currentIndex + 1;
      goToSnapItem(nextIndex);
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0 && !isDragging) {
      const prevIndex = currentIndex - 1;
      goToSnapItem(prevIndex);
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <>
      <Typography textAlign="center;" variant="h4" marginTop={4}>
        Our Work
      </Typography>
      <Typography textAlign="center;" variant="h5">
        Portfolio
      </Typography>
      <br />
      <Container>
        <SnapList ref={snapList}>
          {imgSlider.map((item, index) => {
            return (
              <SnapItem
                key={index}
                margin={{
                  left:
                    index == 0 && isMatch
                      ? "5vw"
                      : index == 0
                      ? "30vw"
                      : "35px",
                  right:
                    imgSlider.length - 1 == 3 && isMatch
                      ? "5vw"
                      : index == imgSlider.length - 1
                      ? "30vw"
                      : "35px",
                }}
                snapAlign="center"
              >
                <MyItem visible={visible === index}>
                  <Box className={slider.sliderContainer}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={item.image}
                        className={slider.sliderImg}
                        style={{
                          height: isMatch ? "200px" : "350px",
                          width: isMatch ? "85%" : "100%",
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center;",
                        marginTop: "30px",
                      }}
                    >
                      <Typography
                        fontSize={{
                          lg: "38px",
                          md: "38px",
                          sm: "38px",
                          xs: "25px",
                        }}
                        textAlign="center;"
                        sx={{
                          marginRight: {
                            lg: "50px",
                            md: "100px",
                            sm: "100px",
                            xs: "10px",
                          },
                          marginTop: "20px",
                        }}
                      >
                        {item.heading}
                      </Typography>
                      {currentIndex !== 0 && (
                        <button
                          onClick={handlePrevious}
                          className={slider.sliderMovingButton}
                          style={{
                            padding: isMatch ? "5px" : "10px",
                            marginTop: isMatch ? "10px" : "10px",
                          }}
                        >
                          <ArrowBackIcon sx={{ fontSize: "36px" }} />
                        </button>
                      )}
                      {currentIndex !== imgSlider.length - 1 && (
                        <button
                          onClick={handleNext}
                          className={slider.sliderMovingButton}
                          style={{
                            padding: isMatch ? "5px" : "10px",
                            marginTop: isMatch ? "10px" : "10px",
                          }}
                        >
                          <ArrowForwardIcon sx={{ fontSize: "36px" }} />
                        </button>
                      )}
                    </Box>

                    <Box
                      width={{
                        lg: "556px;",
                        md: "556px;",
                        sm: "556px;",
                        xs: "280px;",
                        margin: "20px 0px",
                      }}
                    >
                      <Typography>{item.paragraph}</Typography>
                    </Box>

                    <Grid
                      container
                      lg={12}
                      sx={{
                        marginTop: "10px",
                        width: { xs: "300px", sm: "revert" },
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Grid lg={3} md={3} sm={3} xs={6}>
                        <Button className={slider.sliderButton}>
                          {item.button1}
                        </Button>
                      </Grid>
                      <Grid lg={2} md={2} sm={3} xs={6}>
                        <Button className={slider.sliderButton}>
                          {item.button2}
                        </Button>
                      </Grid>
                      <Grid lg={2} md={2} sm={3} xs={6}>
                        <Button className={slider.sliderButton}>
                          {item.button3}
                        </Button>
                      </Grid>
                      <Grid lg={2} md={2} sm={3} xs={6}>
                        <Button className={slider.sliderButton}>
                          {item.button4}
                        </Button>
                      </Grid>
                      <Grid lg={2} md={2} sm={3} xs={6}>
                        <Button className={slider.sliderButton}>
                          {item.button5}
                        </Button>
                      </Grid>
                      <Grid lg={2} md={2} sm={3} xs={6}>
                        <Button className={slider.sliderButton}>
                          {item.button6}
                        </Button>
                      </Grid>
                      <Grid lg={2} md={2} sm={3} xs={6}>
                        <Button className={slider.sliderButton}>
                          {item.button7}
                        </Button>
                      </Grid>
                      <Grid lg={3} md={3} sm={3} xs={6}>
                        <Button className={slider.sliderButton}>
                          {item.button8}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </MyItem>
              </SnapItem>
            );
          })}
        </SnapList>
      </Container>
    </>
  );
};
