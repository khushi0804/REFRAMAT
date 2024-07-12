import React from "react";
import "./Navbardash.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ListIcon from "@mui/icons-material/List";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
const Navbardash = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input className="yes" type="text" placeholder="Search.." />
          <SearchIcon className="sea" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icons"/>
            English
          </div>
          <div className="item">
            <ListIcon className="icons" />
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icons"/>
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbardash;
