import * as React from "react";
import menuStyling from "./menu.module.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Grid, Typography } from "@mui/material";
export const MenuComp = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setIsHovered(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={menuStyling.button}
      >
        Services
        {isHovered ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMouseLeave}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          sx={{
            width: "100vw;",
            height: "200px;",
            padding: "140px 30px",
          }}
        >
          <Grid container lg={12}>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <Typography sx={{ lineHeight: "60px;" }}>Development</Typography>
              <Typography sx={{ lineHeight: "40px;" }}>
                Web App Development
              </Typography>
              <Typography sx={{ lineHeight: "40px;" }}>
                Backend App Development
              </Typography>
              <Typography sx={{ lineHeight: "40px;" }}>
                AI/Ml Development Services
              </Typography>
            </Grid>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <Typography sx={{ lineHeight: "60px;" }}>Development</Typography>
              <Typography sx={{ lineHeight: "40px;" }}>
                Web App Development
              </Typography>
              <Typography sx={{ lineHeight: "40px;" }}>
                Backend App Development
              </Typography>
              <Typography sx={{ lineHeight: "40px;" }}>
                AI/Ml Development Services
              </Typography>
            </Grid>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <Typography sx={{ lineHeight: "60px;" }}>Development</Typography>
              <Typography sx={{ lineHeight: "40px;" }}>
                Web App Development
              </Typography>
              <Typography sx={{ lineHeight: "40px;" }}>
                Backend App Development
              </Typography>
              <Typography sx={{ lineHeight: "40px;" }}>
                AI/Ml Development Services
              </Typography>
            </Grid>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <Typography sx={{ lineHeight: "60px;" }}>Development</Typography>
              <Typography sx={{ lineHeight: "40px;" }}>
                Web App Development
              </Typography>
              <Typography sx={{ lineHeight: "40px;" }}>
                Backend App Development
              </Typography>
              <Typography sx={{ lineHeight: "40px;" }}>
                AI/Ml Development Services
              </Typography>
            </Grid>
          </Grid>
        </MenuItem>
      </Menu>
    </div>
  );
};
