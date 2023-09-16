import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
  Card,
  Grid,
} from "@mui/material";
import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,
  useDragToScroll,
} from "react-snaplist-carousel";
import { TestImonial } from "../JsonData";
export const Testimonial = () => {
  const snapList = useRef(null);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const visible = useVisibleElements(
    { debounce: 10, ref: snapList },
    ([element]) => element
  );
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
  return (
    <>
      <Grid container lg={12} sx={{ bgcolor: "rgb(0, 26, 31)" }} marginTop={4}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography
            textAlign="center;"
            color="white;"
            marginTop={2}
            fontSize="20px"
          >
            Testimonials
          </Typography>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography
            textAlign="center;"
            color="white;"
            variant="h5"
            marginTop={2}
          >
            What Our Clients Say
          </Typography>
        </Grid>
        <Container sx={{ marginTop: "20px" }}>
          <SnapList ref={snapList}>
            {TestImonial.map((item, index) => {
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
                      TestImonial.length - 1 == 5 && isMatch
                        ? "5vw"
                        : index == TestImonial.length - 1
                        ? "30vw"
                        : "35px",
                  }}
                  snapAlign="center"
                >
                  <MyItem
                    onClick={() => {
                      goToSnapItem(index);
                    }}
                    visible={visible === index}
                  >
                    <Card
                      sx={{
                        backgroundColor: "rgb(0, 73, 96)",
                        borderRadius: "20px",
                        padding: {
                          lg: "80px",
                          md: "80px;",
                          sm: "50px;",
                          xs: "37px",
                        },
                        textAlign: "center",
                        width: {
                          lg: "40vw",
                          md: "40vw;",
                          sm: "50vw;",
                          xs: "95vw",
                        },
                      }}
                    >
                      <Typography textAlign="center" color="white">
                        {item.paragraph}
                      </Typography>
                    </Card>
                    <Box
                      sx={{
                        display: "flex;",
                        justifyContent: "center;",
                        marginTop: "20px;",
                      }}
                    >
                      <img src={item.img} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "38px",
                          fontWeight: "600;",
                          fontFamily: "Montserrat;",
                          lineHeight: "1.167;",
                          color: "#ffffff;",
                          marginTop: "10px;",
                          textAlign: "center;",
                        }}
                      >
                        {item.imgText}
                      </Typography>
                    </Box>
                  </MyItem>
                </SnapItem>
              );
            })}
          </SnapList>
        </Container>
      </Grid>
    </>
  );
};
