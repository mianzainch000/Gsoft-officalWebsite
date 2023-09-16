import { useState } from "react";
import drawer from "../../../Styles/Header/Drawer/drawer.module.css";
import { Drawer, Box, IconButton, Button, Stack, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../../Images/logo.png";

export const DrawerComp = () => {
  const [isDraweOpen, setDrawerOpen] = useState(false);
  return (
    <Box className={drawer.menuIcon}>
      <Box onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </Box>
      <Drawer
        anchor="left"
        open={isDraweOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box className={drawer.drawerLogo}>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item sm={10} xs={8}>
              <IconButton
                sx={{ paddingLeft: "10px" }}
                size="large"
                // edge="start"
                color="inherit"
                aria-aria-label="logo"
              >
                <NavLink to="/">
                  {" "}
                  <img src={logo} alt="logo" />
                </NavLink>
              </IconButton>
            </Grid>
            <Grid item sm={2} xs={4}>
              <IconButton
                onClick={() => setDrawerOpen(false)}
                className={drawer.closeIcon}
              >
                <CloseIcon className="closeIcon" />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
        <Box className={drawer.drawerContainer}>
          <>
            <Grid container lg={12}>
              <Grid item>
                <Stack>
                  <Button
                    color="inherit"
                    className={drawer.drawerButton}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <NavLink className={drawer.drawerButton} to="/about">
                      Company
                    </NavLink>
                  </Button>
                  <Button
                    color="inherit"
                    className={drawer.drawerButton}
                    onClick={() => setDrawerOpen(false)}
                  >
                    Services
                  </Button>
                  <Button
                    color="inherit"
                    className={drawer.drawerButton}
                    onClick={() => setDrawerOpen(false)}
                  >
                    Portfolio
                  </Button>
                  <Button
                    color="inherit"
                    className={drawer.drawerButton}
                    onClick={() => setDrawerOpen(false)}
                  >
                    Blog
                  </Button>
                  <Button
                    color="inherit"
                    className={drawer.drawerButton}
                    onClick={() => setDrawerOpen(false)}
                  >
                    Careers
                  </Button>
                  <Button
                    color="inherit"
                    className={drawer.drawerButton}
                    onClick={() => setDrawerOpen(false)}
                  >
                    Contact Us
                  </Button>
                  <Button
                    color="inherit"
                    className={drawer.drawerButton}
                    onClick={() => setDrawerOpen(false)}
                  >
                    {/* <NavLink className={drawer.drawerButton} to="/life"> */}
                    Life At Gsoft
                    {/* </NavLink> */}
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    className={drawer.drawerButtonq}
                    onClick={() => setDrawerOpen(false)}
                  >
                    Estimate Your Project
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </>
        </Box>
      </Drawer>
    </Box>
  );
};
