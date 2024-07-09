import React  from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from '../context';

const HeroSection = () => {
  
  const {name,image,para}= useGlobalContext();
  // by this line the useContext getting the whole AppContext 
    return (
      <Wrapper>
  
  <div className="container grid grid-two-column">
      <div className="section-hero-data">
          <h1 className='hero-heading'>{name}</h1>
          <p className="hero-para">{name},{para} </p>
  <Button className="btn hireme-btn">
          <NavLink to="/contact">Contact Us</NavLink>
      </Button>
      </div>
    
      {/* for image div this is second div that is used for image*/}
      <div className="section-hero-image">
        <picture>
            <img src={image} alt="image"  className="hero-img" />
        </picture>
      </div>
  </div>
  
    </Wrapper>
    );
  };

  const Wrapper = styled.section`
  padding: 6rem 4rem;


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
    font-size: 4.2rem;
    color:#2565AF;
          text-align:left;

  }

  .hero-para {
    margin-top: 1rem;
    margin-bottom: 3.7rem;
    max-width: 70rem;
        font-size: 1.36rem;
        font-weight:700;
        color:black;
      text-align:left

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
    max-width: 120%;
    margin-left:-20px;
    border-radius:20px;
}



     @media (max-width: ${({ theme }) => theme.media.mobile}) {
   
    .grid {
      gap: 7.2rem;
    }
      .hero-heading{
      font-size:6rem;
      margin-bottom:1rem;
      margin-top:-20px
      
      }
    
      .hero-para{
      font-size:1.5rem;
      width:104%;
      font-weight:800
      }
       .section-hero-image{
       width:100%;
       margin-bottom:-50px
       }
  }`;


export default HeroSection;