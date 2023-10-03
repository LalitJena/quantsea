import React, { useState } from "react";
import {
  Box,
  IconButton,
  Breadcrumbs,
  Typography,
  Link,
  Badge,
  Chip,
  Popover,
  Grid,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./style.css";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconRotation from "../../Assets/images/icons/rotation.svg";

//Components

export default function Services() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const [visible, setVisible] = React.useState(false);

  const [style1, setStyle1] = useState({ display: "none" });
  const [style2, setStyle2] = useState({ display: "none" });
  const [style3, setStyle3] = useState({ display: "none" });
  const [style4, setStyle4] = useState({ display: "none" });
  const [style5, setStyle5] = useState({ display: "none" });
  const [style6, setStyle6] = useState({ display: "none" });
  const [style7, setStyle7] = useState({ display: "none" });
  const [style8, setStyle8] = useState({ display: "none" });
  const [style9, setStyle9] = useState({ display: "none" });
  const [style10, setStyle10] = useState({ display: "none" });
  const [style11, setStyle11] = useState({ display: "none" });
  const [style12, setStyle12] = useState({ display: "none" });

  const [style101, setStyle101] = useState({ display: "none" });
  const [style102, setStyle102] = useState({ display: "none" });
  const [style103, setStyle103] = useState({ display: "none" });
  const [style104, setStyle104] = useState({ display: "none" });
  const [style105, setStyle105] = useState({ display: "none" });
  const [style106, setStyle106] = useState({ display: "none" });
  const [style107, setStyle107] = useState({ display: "none" });
  const [style108, setStyle108] = useState({ display: "none" });
  const [style109, setStyle109] = useState({ display: "none" });
  const [style110, setStyle110] = useState({ display: "none" });

  const [style201, setStyle201] = useState({ display: "none" });
  const [style202, setStyle202] = useState({ display: "none" });
  const [style203, setStyle203] = useState({ display: "none" });
  const [style204, setStyle204] = useState({ display: "none" });
  const [style205, setStyle205] = useState({ display: "none" });
  const [style206, setStyle206] = useState({ display: "none" });
  const [style207, setStyle207] = useState({ display: "none" });
  const [style208, setStyle208] = useState({ display: "none" });
  const [style209, setStyle209] = useState({ display: "none" });
  const [style210, setStyle210] = useState({ display: "none" });

  const [style301, setStyle301] = useState({ display: "none" });
  const [style302, setStyle302] = useState({ display: "none" });
  const [style303, setStyle303] = useState({ display: "none" });
  const [style304, setStyle304] = useState({ display: "none" });
  const [style305, setStyle305] = useState({ display: "none" });
  const [style306, setStyle306] = useState({ display: "none" });
  const [style307, setStyle307] = useState({ display: "none" });
  const [style308, setStyle308] = useState({ display: "none" });

  return (
    <>
      <Box className="BreadcrumbContainer">
        <IconButton aria-label="Back">
          <ArrowBackIosNewIcon />
        </IconButton>
        <Breadcrumbs
          className="breadcrumbs"
          separator=">"
          aria-label="breadcrumb"
        >
          <Link underline="hover" color="inherit" href="/">
            Services
          </Link>
          <Typography color="text.primary">
            Service Company Name (Code)
          </Typography>
        </Breadcrumbs>
      </Box>

      <Box className="PortDetailsContainer">
        <Box className="port-heading">
          <figure>
            <img src={IconRotation} />
          </figure>
          <article>
            <Typography variant="h2" gutterBottom>
              Kaohsoiung Singapore Service<Badge badgeContent={12}></Badge>
            </Typography>
            <Typography variant="body1">CA6600 (4/12)</Typography>
          </article>
        </Box>
        <Box className="port-details">
          <Typography variant="body1" gutterBottom>
            Port Sequence ID : <span>#Port ID225</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Port Code : <span>CHBST</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Flag : <span>Proforma Yes</span>
          </Typography>
        </Box>
        <Box className="port-arrival">
          <Typography variant="body1" gutterBottom>
            Arrival Date & Time : <span>25th Aug 2023 @10:55 PM</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Departure Date & Time : <span>27th Aug 2023 @10:55 PM</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Arrival Status : <span>1 Day Late</span>
          </Typography>
        </Box>
        <Box className="port-departure">
          <Typography variant="body1" gutterBottom>
            Departure Status : <span>2 Day Late</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            A/E at Sea : <span>24.0 MT/Day</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Maneuvering Consumption : <span>24.0 MT/Hour</span>
          </Typography>
        </Box>
      </Box>

      <Box className="AllLinksContainer">
        <Typography variant="h2" className="title">
          All KPIs
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link className="links active" href="#">
            {"All"}
          </Link>
          <Link className="links" href="#">
            {"At Port"}
          </Link>
          <Link className="links" href="#">
            {"At Sea"}
          </Link>
        </Box>
      </Box>

      <Box className="PortPercentageContainer">
        <Box
          className="box"
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <Typography variant="h6" gutterBottom>
            Waiting Time
          </Typography>
          <Typography variant="h2">20 hrs</Typography>
          <Chip icon={<TrendingUpIcon />} label="+2.5%" />
          <div className="red-box">+16%</div>
        </Box>
        <Box
          className="box"
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <Typography variant="h6" gutterBottom>
            Port Stay
          </Typography>
          <Typography variant="h2">89.5%</Typography>
          <Chip icon={<TrendingUpIcon />} label="+2.5%" />
          <div className="red-box">+16%</div>
        </Box>
        <Box
          className="box"
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <Typography variant="h6" gutterBottom>
            Berth Productivity
          </Typography>
          <Typography variant="h2">89.5%</Typography>
          <Chip icon={<TrendingUpIcon />} label="+2.5%" />
          <div className="red-box">+16%</div>
        </Box>
        <Box
          className="box"
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <Typography variant="h6" gutterBottom>
            Container Moves (L/D/R)
          </Typography>
          <Typography variant="h2">23 hrs</Typography>
          <Chip icon={<TrendingUpIcon />} label="+2.5%" />
          <div className="red-box">+16%</div>
        </Box>
        <Box
          className="box"
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <Typography variant="h6" gutterBottom>
            Restow Moves
          </Typography>
          <Typography variant="h2">23 hrs</Typography>
          <Chip icon={<TrendingUpIcon />} label="+2.5%" />
          <div className="red-box">+16%</div>
        </Box>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none",
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Box className="box-hover">
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Typography variant="body1">
                  Proforma <span>0.30</span>
                </Typography>
              </Grid>
              <Grid className="text-right" item xs={4}>
                <Typography className="text-red" variant="body1">
                  +0.05
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body1">
                  Actual <span>0.30</span>
                </Typography>
              </Grid>
              <Grid className="text-right" item xs={4}>
                <Typography className="text-green" variant="body1">
                  +0.05
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body1">
                  Delta <span>0.30</span>
                </Typography>
              </Grid>
              <Grid className="text-right" item xs={4}>
                <Typography className="text-red" variant="body1">
                  +0.05
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Popover>
      </Box>

      <Box className="ShowMoreLessContainer">
        <Button
          size="medium"
          endIcon={<ExpandMoreIcon />}
          onClick={() => setVisible(!visible)}
        >
          {visible ? "Show Less" : "Show More"}
        </Button>
        {visible && (
          <div className="showmore">
            <Box className="PortPercentageContainer">
              <Box
                className="box"
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                <Typography variant="h6" gutterBottom>
                  Crane Productivity
                </Typography>
                <Typography variant="h2">89.5%</Typography>
                <Chip icon={<TrendingUpIcon />} label="+2.5%" />
                <div className="red-box">+16%</div>
              </Box>
              <Box
                className="box"
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                <Typography variant="h6" gutterBottom>
                  Crane Intensity
                </Typography>
                <Typography variant="h2">89.5%</Typography>
                <Chip icon={<TrendingUpIcon />} label="+2.5%" />
                <div className="red-box">+16%</div>
              </Box>
              <Box
                className="box"
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                <Typography variant="h6" gutterBottom>
                  Idle Times
                </Typography>
                <Typography variant="h2">89.5%</Typography>
                <Chip icon={<TrendingUpIcon />} label="+2.5%" />
                <div className="red-box">+16%</div>
              </Box>
              <Box
                className="box"
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                <Typography variant="h6" gutterBottom>
                  Time Lost Due to Restow Moves
                </Typography>
                <Typography variant="h2">23 hrs</Typography>
                <Chip icon={<TrendingUpIcon />} label="+2.5%" />
                <div className="red-box">+16%</div>
              </Box>

              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Box className="box-hover">
                  <Grid container spacing={1}>
                    <Grid item xs={8}>
                      <Typography variant="body1">
                        Proforma <span>0.30</span>
                      </Typography>
                    </Grid>
                    <Grid className="text-right" item xs={4}>
                      <Typography className="text-red" variant="body1">
                        +0.05
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body1">
                        Actual <span>0.30</span>
                      </Typography>
                    </Grid>
                    <Grid className="text-right" item xs={4}>
                      <Typography className="text-green" variant="body1">
                        +0.05
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body1">
                        Delta <span>0.30</span>
                      </Typography>
                    </Grid>
                    <Grid className="text-right" item xs={4}>
                      <Typography className="text-red" variant="body1">
                        +0.05
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Popover>
            </Box>
          </div>
        )}
      </Box>

      <Box className="PortRotationContainer">
        <Box className="container">
          <Typography variant="h4" gutterBottom>
            Port Rotation
          </Typography>
          <Box className="PortRotation">
            <div className="east">E</div>
            <section>
              <Box className="top-rotation">
                <div
                  className="ShipNameStay"
                  onMouseEnter={(e) => {
                    setStyle1({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle1({ display: "none" });
                  }}
                >
                  TAO (3)
                  <div className="dropdown" style={style1}>
                    <Typography variant="h5" gutterBottom>
                      SGSIN <CircleIcon className="green-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 1
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 2
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 3 <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipName"
                  onMouseEnter={(e) => {
                    setStyle2({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle2({ display: "none" });
                  }}
                >
                  SHA (2)
                  <div className="dropdown" style={style2}>
                    <Typography variant="h5" gutterBottom>
                      SGSIN <CircleIcon className="green-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 1
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 2
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 3 <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipNameStay"
                  onMouseEnter={(e) => {
                    setStyle3({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle3({ display: "none" });
                  }}
                >
                  NGB (2){" "}
                  <div className="dropdown" style={style3}>
                    <Typography variant="h5" gutterBottom>
                      SGSIN <CircleIcon className="green-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 1
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 2
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 3 <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipName"
                  onMouseEnter={(e) => {
                    setStyle4({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle4({ display: "none" });
                  }}
                >
                  SHK (2){" "}
                  <div className="dropdown" style={style4}>
                    <Typography variant="h5" gutterBottom>
                      SGSIN <CircleIcon className="green-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 1
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 2
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 3 <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipName"
                  onMouseEnter={(e) => {
                    setStyle5({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle5({ display: "none" });
                  }}
                >
                  SIN (2){" "}
                  <div className="dropdown" style={style5}>
                    <Typography variant="h5" gutterBottom>
                      SGSIN <CircleIcon className="green-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 1
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 2
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 3 <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipNameStay"
                  onMouseEnter={(e) => {
                    setStyle6({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle6({ display: "none" });
                  }}
                >
                  HKHKG (2){" "}
                  <div className="dropdown" style={style6}>
                    <Typography variant="h5" gutterBottom>
                      SGSIN <CircleIcon className="green-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 1
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 2
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 3 <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipName"
                  onMouseEnter={(e) => {
                    setStyle7({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle7({ display: "none" });
                  }}
                >
                  HKHKG (3){" "}
                  <div className="dropdown" style={style7}>
                    <Typography variant="h5" gutterBottom>
                      SGSIN <CircleIcon className="green-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 1
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 2
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 3 <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipName"
                  onMouseEnter={(e) => {
                    setStyle8({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle8({ display: "none" });
                  }}
                >
                  IGI (2){" "}
                  <div className="dropdown" style={style8}>
                    <Typography variant="h5" gutterBottom>
                      SGSIN <CircleIcon className="green-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 1
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 2
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 3 <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipNameStay"
                  onMouseEnter={(e) => {
                    setStyle9({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle9({ display: "none" });
                  }}
                >
                  HKHKG (2){" "}
                  <div className="dropdown" style={style9}>
                    <Typography variant="h5" gutterBottom>
                      SGSIN <CircleIcon className="green-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 1
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 2
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 3 <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipNameStay"
                  onMouseEnter={(e) => {
                    setStyle10({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle10({ display: "none" });
                  }}
                >
                  IOA(2){" "}
                  <div className="dropdown" style={style10}>
                    <Typography variant="h5" gutterBottom>
                      SGSIN <CircleIcon className="green-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 1
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 2
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 3 <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipName"
                  onMouseEnter={(e) => {
                    setStyle11({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle11({ display: "none" });
                  }}
                >
                  PNG(2){" "}
                  <div className="dropdown" style={style11}>
                    <Typography variant="h5" gutterBottom>
                      SGSIN <CircleIcon className="green-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 1
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 2
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 3 <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipNameStay"
                  onMouseEnter={(e) => {
                    setStyle12({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle12({ display: "none" });
                  }}
                >
                  NVT(2){" "}
                  <div className="dropdown" style={style12}>
                    <Typography variant="h5" gutterBottom>
                      SGSIN <CircleIcon className="green-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 1
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 2
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      KPI 3 <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
              </Box>
              <Box className="mid-rotation"></Box>
              <Box className="bot-rotation">
                <div
                  className="ShipNameStay"
                  onMouseEnter={(e) => {
                    setStyle101({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle101({ display: "none" });
                  }}
                >
                  TAO (2){" "}
                  <div className="dropdown" style={style101}>
                    <Typography variant="h5" gutterBottom>
                      Kota Lima <CircleIcon className="red-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      ETA
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      SPEED
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      FUEL CONS <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipNameStay"
                  onMouseEnter={(e) => {
                    setStyle102({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle102({ display: "none" });
                  }}
                >
                  HKHKG (2)
                  <div className="dropdown" style={style102}>
                    <Typography variant="h5" gutterBottom>
                      Kota Lima <CircleIcon className="red-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      ETA
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      SPEED
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      FUEL CONS <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipName"
                  onMouseEnter={(e) => {
                    setStyle103({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle103({ display: "none" });
                  }}
                >
                  SHA (2)
                  <div className="dropdown" style={style103}>
                    <Typography variant="h5" gutterBottom>
                      Kota Lima <CircleIcon className="red-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      ETA
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      SPEED
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      FUEL CONS <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipNameStay"
                  onMouseEnter={(e) => {
                    setStyle104({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle104({ display: "none" });
                  }}
                >
                  NGB (2)
                  <div className="dropdown" style={style104}>
                    <Typography variant="h5" gutterBottom>
                      Kota Lima <CircleIcon className="red-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      ETA
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      SPEED
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      FUEL CONS <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipName"
                  onMouseEnter={(e) => {
                    setStyle105({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle105({ display: "none" });
                  }}
                >
                  SHK (2)
                  <div className="dropdown" style={style105}>
                    <Typography variant="h5" gutterBottom>
                      Kota Lima <CircleIcon className="red-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      ETA
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      SPEED
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      FUEL CONS <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipName"
                  onMouseEnter={(e) => {
                    setStyle106({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle106({ display: "none" });
                  }}
                >
                  HKHKG (3)
                  <div className="dropdown" style={style106}>
                    <Typography variant="h5" gutterBottom>
                      Kota Lima <CircleIcon className="red-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      ETA
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      SPEED
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      FUEL CONS <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipName"
                  onMouseEnter={(e) => {
                    setStyle107({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle107({ display: "none" });
                  }}
                >
                  IGI (2)
                  <div className="dropdown" style={style107}>
                    <Typography variant="h5" gutterBottom>
                      Kota Lima <CircleIcon className="red-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      ETA
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      SPEED
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      FUEL CONS <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipNameStay"
                  onMouseEnter={(e) => {
                    setStyle108({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle108({ display: "none" });
                  }}
                >
                  IOA(2)
                  <div className="dropdown" style={style108}>
                    <Typography variant="h5" gutterBottom>
                      Kota Lima <CircleIcon className="red-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      ETA
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      SPEED
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      FUEL CONS <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipName"
                  onMouseEnter={(e) => {
                    setStyle109({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle109({ display: "none" });
                  }}
                >
                  PNG(2)
                  <div className="dropdown" style={style109}>
                    <Typography variant="h5" gutterBottom>
                      Kota Lima <CircleIcon className="red-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      ETA
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      SPEED
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      FUEL CONS <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
                <div
                  className="ShipNameStay"
                  onMouseEnter={(e) => {
                    setStyle110({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle110({ display: "none" });
                  }}
                >
                  NVT(2)
                  <div className="dropdown" style={style110}>
                    <Typography variant="h5" gutterBottom>
                      Kota Lima <CircleIcon className="red-circle" />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      ETA
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      SPEED
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      FUEL CONS <ArrowForwardIosIcon />
                    </Typography>
                  </div>
                </div>
              </Box>
            </section>
            <div className="west">W</div>
            <aside>
              <Typography variant="h3" gutterBottom>
                9.803 nm
              </Typography>
              <Typography variant="h3" gutterBottom>
                77 days
              </Typography>
              <Typography variant="h3" gutterBottom>
                17.5 kts
              </Typography>
            </aside>
          </Box>
        </Box>
      </Box>

      <Box className="VasselDetailsContainer">
        <Box className="container">
          <Box className="service-sidebar">
            <Typography variant="h2">KHS Service</Typography>
            <Typography variant="h4">Vessel Name</Typography>
            <Divider />
            <List className="sidelist">
              <ListItem disablePadding>
                <ListItemButton href="#">
                  <ListItemText primary="Kota Lima" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton href="#">
                  <ListItemText primary="Kota Santos" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton href="#">
                  <ListItemText primary="Kota Anggun" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding className="active">
                <ListItemButton href="#">
                  <ListItemText primary="Kota Azam" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton href="#">
                  <ListItemText primary="Kota Bistari" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton href="#">
                  <ListItemText primary="Kota Buana" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton href="#">
                  <ListItemText primary="Kota Cabra" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton href="#">
                  <ListItemText primary="Kota Cahaya" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton href="#">
                  <ListItemText primary="Kota Cepat" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton href="#">
                  <ListItemText primary="Kota Lima" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton href="#">
                  <ListItemText primary="Kota Bistari" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton href="#">
                  <ListItemText primary="Kota Bistari" />
                </ListItemButton>
              </ListItem>
              <Divider />
            </List>
          </Box>
          <Box className="service-table">
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      colSpan={3}
                      className="date"
                    >
                      15-Sep
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      colSpan={3}
                      className="date"
                    >
                      16-Sep
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      colSpan={3}
                      className="date"
                    >
                      17-Sep
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      colSpan={3}
                      className="date"
                    >
                      18-Sep
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      colSpan={3}
                      className="date"
                    >
                      19-Sep
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      colSpan={3}
                      className="date"
                    >
                      20-Sep
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      colSpan={3}
                      className="date"
                    >
                      21-Sep
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      colSpan={3}
                      className="date"
                    >
                      22-Sep
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      colSpan={3}
                      className="date"
                    >
                      23-Sep
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      colSpan={3}
                      className="date"
                    >
                      24-Sep
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      16:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      00:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      8:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      16:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      00:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      8:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      16:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      00:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      8:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      16:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      00:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      8:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      16:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      00:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      8:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      16:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      00:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      8:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      16:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      00:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      8:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      16:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      00:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      8:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      16:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      00:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      8:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      16:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      00:00
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="rotate-text"
                    >
                      8:00
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      component="td"
                      colSpan={12}
                      className="at-sea"
                      onMouseEnter={(e) => {
                        setStyle201({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setStyle201({ display: "none" });
                      }}
                    >
                      <div className="at-details" style={style201}>
                        <Typography variant="h4" gutterBottom>
                          At Sea
                        </Typography>
                        <div className="columns">
                          <div className="col-left">Consumption: 89.5%</div>
                          <div className="col-right">Cargo Onboard: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Distance: 89.5%</div>
                          <div className="col-right">CII: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Speed: 89.5%</div>
                          <div className="col-right">MCR/RPM/Slip: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">CO2 Emissions: 89.5%</div>
                          <div className="col-right">SECA distance: 89.5%</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="td"
                      colSpan={7}
                      className="at-port"
                      onMouseEnter={(e) => {
                        setStyle301({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setStyle301({ display: "none" });
                      }}
                    >
                      <div className="at-details" style={style301}>
                        <Typography variant="h4" gutterBottom>
                          At Port
                        </Typography>
                        <div className="columns">
                          <div className="col-left">Waiting Time: 89.5%</div>
                          <div className="col-right">
                            Crane Productivity: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Port Stay: 89.5%</div>
                          <div className="col-right">
                            Crane Intensity: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">
                            Berth Productivity: 89.5%
                          </div>
                          <div className="col-right">Idle Times: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Container Moves: 89.5%</div>
                          <div className="col-right">
                            Time lost due to restow Moves: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Restow Moves: 89.5%</div>
                          <div className="col-right"></div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell
                      component="td"
                      colSpan={12}
                      className="at-sea"
                      onMouseEnter={(e) => {
                        setStyle202({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setStyle202({ display: "none" });
                      }}
                    >
                      <div className="at-details" style={style202}>
                        <Typography variant="h4" gutterBottom>
                          At Sea
                        </Typography>
                        <div className="columns">
                          <div className="col-left">Consumption: 89.5%</div>
                          <div className="col-right">Cargo Onboard: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Distance: 89.5%</div>
                          <div className="col-right">CII: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Speed: 89.5%</div>
                          <div className="col-right">MCR/RPM/Slip: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">CO2 Emissions: 89.5%</div>
                          <div className="col-right">SECA distance: 89.5%</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="td"
                      colSpan={13}
                      className="at-sea"
                      onMouseEnter={(e) => {
                        setStyle203({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setStyle203({ display: "none" });
                      }}
                    >
                      <div className="at-details" style={style203}>
                        <Typography variant="h4" gutterBottom>
                          At Sea
                        </Typography>
                        <div className="columns">
                          <div className="col-left">Consumption: 89.5%</div>
                          <div className="col-right">Cargo Onboard: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Distance: 89.5%</div>
                          <div className="col-right">CII: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Speed: 89.5%</div>
                          <div className="col-right">MCR/RPM/Slip: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">CO2 Emissions: 89.5%</div>
                          <div className="col-right">SECA distance: 89.5%</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="td"
                      colSpan={10}
                      className="at-port"
                      onMouseEnter={(e) => {
                        setStyle302({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setStyle302({ display: "none" });
                      }}
                    >
                      <div className="at-details" style={style302}>
                        <Typography variant="h4" gutterBottom>
                          At Port
                        </Typography>
                        <div className="columns">
                          <div className="col-left">Waiting Time: 89.5%</div>
                          <div className="col-right">
                            Crane Productivity: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Port Stay: 89.5%</div>
                          <div className="col-right">
                            Crane Intensity: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">
                            Berth Productivity: 89.5%
                          </div>
                          <div className="col-right">Idle Times: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Container Moves: 89.5%</div>
                          <div className="col-right">
                            Time lost due to restow Moves: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Restow Moves: 89.5%</div>
                          <div className="col-right"></div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="td"
                      colSpan={12}
                      className="at-sea"
                      onMouseEnter={(e) => {
                        setStyle204({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setStyle204({ display: "none" });
                      }}
                    >
                      <div className="at-details" style={style204}>
                        <Typography variant="h4" gutterBottom>
                          At Sea
                        </Typography>
                        <div className="columns">
                          <div className="col-left">Consumption: 89.5%</div>
                          <div className="col-right">Cargo Onboard: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Distance: 89.5%</div>
                          <div className="col-right">CII: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Speed: 89.5%</div>
                          <div className="col-right">MCR/RPM/Slip: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">CO2 Emissions: 89.5%</div>
                          <div className="col-right">SECA distance: 89.5%</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell
                      component="td"
                      colSpan={12}
                      className="at-port"
                      onMouseEnter={(e) => {
                        setStyle303({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setStyle303({ display: "none" });
                      }}
                    >
                      <div className="at-details" style={style303}>
                        <Typography variant="h4" gutterBottom>
                          At Port
                        </Typography>
                        <div className="columns">
                          <div className="col-left">Waiting Time: 89.5%</div>
                          <div className="col-right">
                            Crane Productivity: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Port Stay: 89.5%</div>
                          <div className="col-right">
                            Crane Intensity: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">
                            Berth Productivity: 89.5%
                          </div>
                          <div className="col-right">Idle Times: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Container Moves: 89.5%</div>
                          <div className="col-right">
                            Time lost due to restow Moves: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Restow Moves: 89.5%</div>
                          <div className="col-right"></div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="td"
                      colSpan={3}
                      className="at-port"
                      onMouseEnter={(e) => {
                        setStyle304({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setStyle304({ display: "none" });
                      }}
                    >
                      <div className="at-details" style={style304}>
                        <Typography variant="h4" gutterBottom>
                          At Port
                        </Typography>
                        <div className="columns">
                          <div className="col-left">Waiting Time: 89.5%</div>
                          <div className="col-right">
                            Crane Productivity: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Port Stay: 89.5%</div>
                          <div className="col-right">
                            Crane Intensity: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">
                            Berth Productivity: 89.5%
                          </div>
                          <div className="col-right">Idle Times: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Container Moves: 89.5%</div>
                          <div className="col-right">
                            Time lost due to restow Moves: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Restow Moves: 89.5%</div>
                          <div className="col-right"></div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell
                      component="td"
                      colSpan={16}
                      className="at-sea"
                      onMouseEnter={(e) => {
                        setStyle205({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setStyle205({ display: "none" });
                      }}
                    >
                      <div className="at-details" style={style205}>
                        <Typography variant="h4" gutterBottom>
                          At Sea
                        </Typography>
                        <div className="columns">
                          <div className="col-left">Consumption: 89.5%</div>
                          <div className="col-right">Cargo Onboard: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Distance: 89.5%</div>
                          <div className="col-right">CII: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Speed: 89.5%</div>
                          <div className="col-right">MCR/RPM/Slip: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">CO2 Emissions: 89.5%</div>
                          <div className="col-right">SECA distance: 89.5%</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="td"
                      colSpan={7}
                      className="at-sea"
                      onMouseEnter={(e) => {
                        setStyle206({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setStyle206({ display: "none" });
                      }}
                    >
                      <div className="at-details" style={style206}>
                        <Typography variant="h4" gutterBottom>
                          At Sea
                        </Typography>
                        <div className="columns">
                          <div className="col-left">Consumption: 89.5%</div>
                          <div className="col-right">Cargo Onboard: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Distance: 89.5%</div>
                          <div className="col-right">CII: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Speed: 89.5%</div>
                          <div className="col-right">MCR/RPM/Slip: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">CO2 Emissions: 89.5%</div>
                          <div className="col-right">SECA distance: 89.5%</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell
                      component="td"
                      colSpan={9}
                      className="at-port"
                      onMouseEnter={(e) => {
                        setStyle305({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setStyle305({ display: "none" });
                      }}
                    >
                      <div className="at-details" style={style305}>
                        <Typography variant="h4" gutterBottom>
                          At Port
                        </Typography>
                        <div className="columns">
                          <div className="col-left">Waiting Time: 89.5%</div>
                          <div className="col-right">
                            Crane Productivity: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Port Stay: 89.5%</div>
                          <div className="col-right">
                            Crane Intensity: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">
                            Berth Productivity: 89.5%
                          </div>
                          <div className="col-right">Idle Times: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Container Moves: 89.5%</div>
                          <div className="col-right">
                            Time lost due to restow Moves: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Restow Moves: 89.5%</div>
                          <div className="col-right"></div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="td"
                      colSpan={11}
                      className="at-sea"
                      onMouseEnter={(e) => {
                        setStyle207({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setStyle207({ display: "none" });
                      }}
                    >
                      <div className="at-details" style={style207}>
                        <Typography variant="h4" gutterBottom>
                          At Sea
                        </Typography>
                        <div className="columns">
                          <div className="col-left">Consumption: 89.5%</div>
                          <div className="col-right">Cargo Onboard: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Distance: 89.5%</div>
                          <div className="col-right">CII: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Speed: 89.5%</div>
                          <div className="col-right">MCR/RPM/Slip: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">CO2 Emissions: 89.5%</div>
                          <div className="col-right">SECA distance: 89.5%</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="td"
                      colSpan={7}
                      className="at-sea"
                      onMouseEnter={(e) => {
                        setStyle208({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setStyle208({ display: "none" });
                      }}
                    >
                      <div className="at-details" style={style208}>
                        <Typography variant="h4" gutterBottom>
                          At Sea
                        </Typography>
                        <div className="columns">
                          <div className="col-left">Consumption: 89.5%</div>
                          <div className="col-right">Cargo Onboard: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Distance: 89.5%</div>
                          <div className="col-right">CII: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Speed: 89.5%</div>
                          <div className="col-right">MCR/RPM/Slip: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">CO2 Emissions: 89.5%</div>
                          <div className="col-right">SECA distance: 89.5%</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell
                      component="td"
                      colSpan={12}
                      className="at-port"
                      onMouseEnter={(e) => {
                        setStyle306({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setStyle306({ display: "none" });
                      }}
                    >
                      <div className="at-details" style={style306}>
                        <Typography variant="h4" gutterBottom>
                          At Port
                        </Typography>
                        <div className="columns">
                          <div className="col-left">Waiting Time: 89.5%</div>
                          <div className="col-right">
                            Crane Productivity: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Port Stay: 89.5%</div>
                          <div className="col-right">
                            Crane Intensity: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">
                            Berth Productivity: 89.5%
                          </div>
                          <div className="col-right">Idle Times: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Container Moves: 89.5%</div>
                          <div className="col-right">
                            Time lost due to restow Moves: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Restow Moves: 89.5%</div>
                          <div className="col-right"></div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="td"
                      colSpan={14}
                      className="at-sea"
                      onMouseEnter={(e) => {
                        setStyle209({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setStyle209({ display: "none" });
                      }}
                    >
                      <div className="at-details" style={style209}>
                        <Typography variant="h4" gutterBottom>
                          At Sea
                        </Typography>
                        <div className="columns">
                          <div className="col-left">Consumption: 89.5%</div>
                          <div className="col-right">Cargo Onboard: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Distance: 89.5%</div>
                          <div className="col-right">CII: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Speed: 89.5%</div>
                          <div className="col-right">MCR/RPM/Slip: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">CO2 Emissions: 89.5%</div>
                          <div className="col-right">SECA distance: 89.5%</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="td"
                      colSpan={10}
                      className="at-port"
                      onMouseEnter={(e) => {
                        setStyle307({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setStyle307({ display: "none" });
                      }}
                    >
                      <div className="at-details" style={style307}>
                        <Typography variant="h4" gutterBottom>
                          At Port
                        </Typography>
                        <div className="columns">
                          <div className="col-left">Waiting Time: 89.5%</div>
                          <div className="col-right">
                            Crane Productivity: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Port Stay: 89.5%</div>
                          <div className="col-right">
                            Crane Intensity: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">
                            Berth Productivity: 89.5%
                          </div>
                          <div className="col-right">Idle Times: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Container Moves: 89.5%</div>
                          <div className="col-right">
                            Time lost due to restow Moves: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Restow Moves: 89.5%</div>
                          <div className="col-right"></div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="td"
                      colSpan={12}
                      className="at-sea"
                      onMouseEnter={(e) => {
                        setStyle210({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setStyle210({ display: "none" });
                      }}
                    >
                      <div className="at-details" style={style210}>
                        <Typography variant="h4" gutterBottom>
                          At Sea
                        </Typography>
                        <div className="columns">
                          <div className="col-left">Consumption: 89.5%</div>
                          <div className="col-right">Cargo Onboard: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Distance: 89.5%</div>
                          <div className="col-right">CII: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Speed: 89.5%</div>
                          <div className="col-right">MCR/RPM/Slip: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">CO2 Emissions: 89.5%</div>
                          <div className="col-right">SECA distance: 89.5%</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell
                      component="td"
                      colSpan={4}
                      className="at-port"
                      onMouseEnter={(e) => {
                        setStyle308({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setStyle308({ display: "none" });
                      }}
                    >
                      <div className="at-details" style={style308}>
                        <Typography variant="h4" gutterBottom>
                          At Port
                        </Typography>
                        <div className="columns">
                          <div className="col-left">Waiting Time: 89.5%</div>
                          <div className="col-right">
                            Crane Productivity: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Port Stay: 89.5%</div>
                          <div className="col-right">
                            Crane Intensity: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">
                            Berth Productivity: 89.5%
                          </div>
                          <div className="col-right">Idle Times: 89.5%</div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Container Moves: 89.5%</div>
                          <div className="col-right">
                            Time lost due to restow Moves: 89.5%
                          </div>
                        </div>
                        <div className="columns">
                          <div className="col-left">Restow Moves: 89.5%</div>
                          <div className="col-right"></div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                    <TableCell component="td"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
}
