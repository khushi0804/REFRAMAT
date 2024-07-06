import React from 'react';
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <Wrapper>
      <section className='contact-short'>
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today?</h3>
          </div>
          <div>
            <NavLink to="/">
              <Button className='btno'>Get started</Button>
            </NavLink>
          </div>
        </div>
      </section>



      {/* footer section */}
      <footer>
        <div className="container grid grid-four-column">
          <div className='footer-about'>
            <h3>Reframat Enterprises</h3>
            <p>"Serving our clients with best attention on Quality and Reliability".</p>
          </div>
          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input  className="btne" type="submit" value="Subscribe" />
            </form>
          </div>


          {/* 3rd column */}
          <div className='footer-social'>
            <h3>follow us </h3>
            <div className='footer-social--icons'>
              <div>
                <FaDiscord className='icons'></FaDiscord>

              </div>
              <div>
                <FaInstagram className='icons'></FaInstagram>

              </div>

              <div>
                <a href="https://www.youtube.com/" target='_blank'>
                  <FaYoutube className='icons'></FaYoutube></a>


              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 93105 58800</h3>
            <h3>Email us</h3>
            <h3>reframat@reframat.com</h3>
          </div>



        </div>

          {/* bottom section  */}
          <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p className='hope'>
              @{new Date().getFullYear()} REFRAMAT ENTERPRISES. All Rights Reserved
            </p>
            <div>
              <p className='hope' >PRIVACY POLICY</p>
              <p className='hope'>TERMS & CONDITIONS</p>
            </div>
          </div>
          </div>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
.hope{
font-weight:800;
color:white;
cursor:pointer;
}
.btno:hover{
color:#2565AF;
}
.btne{
background-color:#C7A532;
color:white;
border-radius:12px;
font-weight:600
}
.btne:hover{
color:red;
background-color:white;
    transform: scale(0.96);

}
.contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color:#2565AF;

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
      font-weight:700
    }
    p {
      color: ${({ theme }) => theme.colors.white};
      font-weight:700;

    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
                font-weight:700

        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;
      

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 3px;
        font-weight:900
      }
    }
  }


@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .contact-short {
    max-width: 95vw;
    padding: 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .contact-short-btn {
      text-align: center;
      justify-self: flex-start;
    }
  }

  footer .footer-bottom--section {
    padding-top: 3.2rem;
  }
`

export default Footer;