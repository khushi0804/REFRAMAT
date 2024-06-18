import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = () => {
    return <Wrapper>
  <div className="container grid grid-two-column">
      <div className="section-hero-data">
          <h1 className='hero-heading'>REFRAMAT ENTERPRISES</h1>
          <p className="hero-para">REFRAMAT – Your Single Solution Serving Platter – for BEST IN CLASS – Refractories, Thermal Insulation, Premium Solutions for Conserving Energy!
  We serve across industries including Iron & Steel, Cement, Power, Non Ferrous…. With premium solution offerings for industrial products including Refractories – Shaped (Bricks, Special Shaped) & Unshaped (Monolithics – Ramming Masses, Castables, Mortars), Thermal Insulation – Ceramic Fibre products (Ceramic Fibre Blankets, Boards, Papers, Textiles, Modules), Rockwool Products (Slabs, Wired Mat, Pipe Sections), Calcium Silicate – HYSIL (Blocks, Pipe Sections), Bio-soluble Products, Microporous Boards and Bulk product offerings (Ferro Alloys, Carbon products like CPC, Grahpite Granules, Metallics like Pig Iron, Sponge Iron)..
  From serving the industrial setups thus far, we are pleased to shared endeavours to diversify now into speciality Household solutions supplies. Initial focus, apart from insulation and acoustic solutions, is aimed at Automation devices, which syncs with our ideology of supporting Energy conservation..</p>
  <Button className="btn hireme-btn">
          <NavLink to="/contact">Contact Us</NavLink>
      </Button>
      </div>
    
      {/* for image div this is second div that is used for image*/}
      <div className="section-hero-image">
        <picture>
            <img src="./images/img1.avif" alt="image"  className="hero-img " />
        </picture>
      </div>
  </div>
  
    </Wrapper>;
  };

  const Wrapper = styled.section`
  padding: 3.6rem 4rem;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 4rem;
    color:#2565AF;
  }

  .hero-para {
    margin-top: 1rem;
    margin-bottom: 2.7rem;
    max-width: 70rem;
        font-size: 1.35rem;

  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 100%;
    
  }`;


export default HeroSection;