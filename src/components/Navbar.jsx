import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";
import Dropdown from "./Dropdown/Dropdown";
import {data} from "../data/data"
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const partnersWithItems = data;
  // const partnersWithItems = [
  //   { name: "Carborundum Universal Limited", path: "/partnerswith/partner1" },
  //   { name: "HYSIL", path: "/partnerswith/partner2" },
  //   {
  //     name: "MURUGAPPA MORGAN ADVANCED MATERIALS",
  //     path: "/partnerswith/partner3",
  //   },
  //   { name: "BOHLERWELDING BY VOESTALPINE", path: "/partnerswith/partner4" },
  //   { name: "HOGANAS", path: "/partnerswith/partner5" },
  //   {
  //     name: "ROCKWOOL ROXUL ROCKWOOL TECHNICAL INSULATION INDIA (P) LTD",
  //     path: "/partnerswith/partner6",
  //   },
  //   { name: "DALMIA MAGNESITE CORPORATION", path: "/partnerswith/partner7" },
  // ];
  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 8rem;


      li {
        list-style: none;

        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            transition: color 0.3s linear;
            color: black;
            font-weight: 700;
            transition: all ease 0.5s;
            z-index:99;
            position:relative;
          }

          &:hover,
          &:active {
            color: #c7a532;
            transition: all ease 0.5s;
            transform: scale(1.2);
          }
        }
      }
    }
    .mobile-navbar-btn {
      display: none;
      .close-outline {
        display: none;
      }
    }
    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      /* hide the original nav menu  */
      .navbar-list {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;
        transform: translateX(100%);
        visibility: hidden;
        opacity: 0;

        li {
          .navbar-link {
            &:link,
            &:visited {
              font-size: 4.2rem;
            }

            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.helper};
            }
          }
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 3%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .active .navbar-list {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
      }
     
    }
  `;
  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        {/* if the condition is true then active class will be present other not .. */}
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/partnerswith"
            >
              <Dropdown items={partnersWithItems} />
              Partners With
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>

        {/* nav icon */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
