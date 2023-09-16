import React from "react";
import home from "../../Styles/Pages/Home/home.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqs } from "../../Components/JsonData";
import {
  Button,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from "@mui/material";
export const Faqs = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid container lg={12} marginTop={10} data-aos="fade-right">
        <Grid item lg={6} md={12} sm={12} xs={12} sx={{ padding: "0px 40px;" }}>
          <Typography
            sx={{
              fontFamily: "Montserrat;",
              fontWeight: "600;",
              fontSize: { lg: "48px", md: "48px;", sm: "48px", xs: "30px;" },
            }}
          >
            Frequently Ask Questions
          </Typography>
          <>
            {faqs.map((faq, index) => (
              <>
                <Accordion
                  key={index}
                  sx={{
                    boxShadow: "none",
                  }}
                  className="faq"
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "rgb(22, 177, 225);" }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <br />
                <br />
              </>
            ))}
          </>
          <Button
            variant="contained"
            sx={{
              width: "200px;",
              padding: "5px;",
              textTransform: "none;",
              fontSize: "20px;",
              textAlign: "center;",
            }}
          >
            Discover More
          </Button>
        </Grid>
        {isMatch ? (
          ""
        ) : (
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <img
              src="https://www.gsoftconsulting.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdegqlc4iv%2Fimage%2Fupload%2Fv1676359270%2FGroup_9325_47830e1b5d.webp&w=1920&q=75"
              className={home.questionMarkImg}
            />
          </Grid>
        )}
      </Grid>
      <br />
      <br />
    </>
  );
};
