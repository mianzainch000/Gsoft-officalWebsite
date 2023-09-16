import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Grid,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { DrawerComp } from "../../../Components/Header/Drawer";
import { MenuComp } from "../../Menu";
import logo from "../../../Images/logo.png";
import navbar from "../../../Styles/Header/Navbar/navbar.module.css";
import WhatsApp from "../../../Images/whatsapp.webp";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "rgb(0, 26, 31)" }}>
        <Toolbar>
          <Grid container lg={12}>
            <Grid item lg={2}>
              <IconButton>
                <a
                  href="https://api.whatsapp.com/send?phone=+924232215942&text=I%20came%20across%20your%20website%20and%20was%20wondering%20if%20you%20could%20assist%20me%20with%20some%20information%20about%20[product/service].%20Can%20we%20chat%20now?"
                  target="_blank"
                >
                  <img src={WhatsApp} className={navbar.whatsApp} />
                </a>
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-aria-label="logo"
              >
                <NavLink to="/">
                  {" "}
                  <img src={logo} alt="logo" />
                </NavLink>
              </IconButton>
            </Grid>

            {isMatch ? (
              <>
                <DrawerComp />
              </>
            ) : (
              <>
                <Grid lg={8}>
                  <Stack direction="row" spacing={3} padding={2}>
                    <NavLink to="/about" className={navbar.navbarButton}>
                      <Button color="inherit" className={navbar.navbarButton}>
                        Company
                      </Button>
                    </NavLink>

                    <MenuComp />

                    <Button color="inherit" className={navbar.navbarButton}>
                      Portfolio
                    </Button>
                    <Button color="inherit" className={navbar.navbarButton}>
                      Blog
                    </Button>
                    <Button color="inherit" className={navbar.navbarButton}>
                      Careers
                    </Button>
                    <Button color="inherit" className={navbar.navbarButton}>
                      Contact Us
                    </Button>
                    <NavLink to="/life" className={navbar.navbarButton}>
                      <Button color="inherit" className={navbar.navbarButton}>
                        Life at Gsoft
                      </Button>
                    </NavLink>
                  </Stack>
                </Grid>
                <Grid lg={2} padding={2}>
                  <Stack direction="row" spacing={3}>
                    <Button
                      variant="outlined"
                      color="inherit"
                      className={navbar.navbarButton}
                    >
                      Estimate Your Project
                    </Button>
                  </Stack>
                </Grid>
              </>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
