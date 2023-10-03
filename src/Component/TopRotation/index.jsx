import React, { useState } from "react";
import "./style.css";
import { Typography, Button, Popover } from "@mui/material";

//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//Owl Carousel Settings
const options = {
  margin: 30,
  rtl: true,
  autoWidth: true,
  responsiveClass: true,
  nav: false,
  dots: false,
  autoplay: true,
  loop: true,
  navText: ["", ""],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 2,
    },
    400: {
      items: 2,
    },
    600: {
      items: 5,
    },
    700: {
      items: 5,
    },
    1000: {
      items: 7,
    },
    1170: {
      items: 10,
    },
  },
};

class App extends React.Component {
  render() {
    return (
      <div>
        <OwlCarousel className="TopRotation-carousel owl-carousel" {...options}>
          <div className="item">
            <div className="ShipName">TAO (3)</div>
          </div>
          <div className="item">
            <div className="ShipName">SHA (2)</div>
          </div>
          <div className="item">
            <div className="ShipName">NGB (2)</div>
          </div>
          <div className="item">
            <div className="ShipName">SHK (2)</div>
          </div>
          <div className="item">
            <div className="ShipName">SIN (2)</div>
          </div>
          <div className="item">
            <div className="ShipName">HKHKG (2)</div>
          </div>
          <div className="item">
            <div className="ShipName">HKHKG (3)</div>
          </div>
          <div className="item">
            <div className="ShipName">IGI (2)</div>
          </div>
          <div className="item">
            <div className="ShipName">HKHKG (2)</div>
          </div>
          <div className="item">
            <div className="ShipName">IOA(2)</div>
          </div>
          <div className="item">
            <div className="ShipName">PNG(2)</div>
          </div>
          <div className="item">
            <div className="ShipName">NVT(2)</div>
          </div>
          <div className="item">
            <div className="ShipName">TAO (3)</div>
          </div>
          <div className="item">
            <div className="ShipName">SHA (2)</div>
          </div>
          <div className="item">
            <div className="ShipName">NGB (2)</div>
          </div>
          <div className="item">
            <div className="ShipName">SHK (2)</div>
          </div>
          <div className="item">
            <div className="ShipName">SIN (2)</div>
          </div>
          <div className="item">
            <div className="ShipName">HKHKG (2)</div>
          </div>
          <div className="item">
            <div className="ShipName">HKHKG (3)</div>
          </div>
          <div className="item">
            <div className="ShipName">IGI (2)</div>
          </div>
          <div className="item">
            <div className="ShipName">HKHKG (2)</div>
          </div>
          <div className="item">
            <div className="ShipName">IOA(2)</div>
          </div>
          <div className="item">
            <div className="ShipName">PNG(2)</div>
          </div>
          <div className="item">
            <div className="ShipName">NVT(2)</div>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}
export default App;
