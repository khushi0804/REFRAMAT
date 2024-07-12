import React from "react";
import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HandshakeIcon from "@mui/icons-material/Handshake";
import GradingIcon from "@mui/icons-material/Grading";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">adminpanel</span>
      </div>
      <hr className="hr" />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li className="lii">
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">CATEGORY</p>

          <li className="lii">
            <PersonIcon className="icon" />
            <span>Users</span>
          </li>
          <li className="lii">
            <AddShoppingCartIcon className="icon" />
            <span>Products</span>
          </li>
          <li className="lii">
            <HandshakeIcon className="icon" />
            <span>Partners</span>
          </li>
          <li className="lii">
            <GradingIcon className="icon" />
            <span>Orders</span>
          </li>
          <p className="title">USER</p>
          <li className="lii">
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li className="lii">
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
