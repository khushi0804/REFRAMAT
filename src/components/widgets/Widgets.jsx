import React from "react";
import "./Widget.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
const Widgets = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlineIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              borderRadius: "5px",
              padding: "3px",
            }}
          />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: true,
        link: "view all orders",
        icon: (
          <BorderColorIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
              borderRadius: "5px",
              padding: "3px",
            }}
          />
        ),
      };
      break;
    case "Products":
      data = {
        title: "PRODUCTS",
        isMoney: false,
        link: "View all Products",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(0, 128, 0, 0.2)",
              color: "green",
              borderRadius: "5px",
              padding: "3px",
            }}
          />
        ),
      };
      break;

    case "Partners":
      data = {
        title: "PARTNERS",
        isMoney: false,
        link: "See all Partners",
        icon: (
          <HandshakeOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
              borderRadius: "5px",
              padding: "3px",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">2121</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage">
          <KeyboardArrowUpIcon />
          20%
        </div>
        {data.icon}
        {/* <PersonOutlineIcon className="iconed" /> */}
      </div>
    </div>
  );
};

export default Widgets;
