import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import styled from "styled-components";

const About = () => {
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);

  return (
    <WrappeR>
      <HeroSection />
      <h2 className="ad">Advantages Served</h2>
      <ul>
        <h3 className="headd">Best quality products assurance:</h3>
        <li className="linkss">
          Our dealing in major furnace related materials and energy conservation
          solutions ensure our customers getting all their major needs served
          under a single roof. We serve across industries including Iron &
          Steel, Cement, Power, Non Ferrous…. With premium solution offerings
          for industrial products including Refractories – Shaped (Bricks,
          Special Shaped) & Unshaped (Monolithics – Ramming Masses, Castables,
          Mortars), Thermal Insulation – Ceramic Fibre products (Ceramic Fibre
          Blankets, Boards, Papers, Textiles, Modules), Rockwool Products
          (Slabs, Wired Mat, Pipe Sections), Calcium Silicate – HYSIL (Blocks,
          Pipe Sections), Bio-soluble Products, Microporous Boards and Bulk
          product offerings (Ferro Alloys, Carbon products like CPC, Grahpite
          Granules, Metallics like Pig Iron, Sponge Iron)..
        </li>
        <h3 className="headd">Customer First Approach:</h3>
        <li className="linkss">
          We continue enjoying great rapport with our customers as we have
          maintained our policy of "Serving our clients with utmost attention on
          Quality and Reliability". We serve across industries including Iron &
          Steel, Cement, Power, Non Ferrous…. With premium solution offerings
          for industrial products including Refractories – Shaped (Bricks,
          Special Shaped) & Unshaped (Monolithics – Ramming Masses, Castables,
          Mortars), Thermal Insulation – Ceramic Fibre products (Ceramic Fibre
          Blankets, Boards, Papers, Textiles, Modules), Rockwool Products
          (Slabs, Wired Mat, Pipe Sections), Calcium Silicate – HYSIL (Blocks,
          Pipe Sections), Bio-soluble Products, Microporous Boards and Bulk
          product offerings (Ferro Alloys, Carbon products like CPC, Grahpite
          Granules, Metallics like Pig Iron, Sponge Iron)..
        </li>
        <h3 className="headd">Single Stop Solution:</h3>
        <li className="linkss">
          Our associations with best of manufacturing facilities in the
          sub-continent ensures our customers receiving the best of products
          available.We serve across industries including Iron & Steel, Cement,
          Power, Non Ferrous…. With premium solution offerings for industrial
          products including Refractories – Shaped (Bricks, Special Shaped) &
          Unshaped (Monolithics – Ramming Masses, Castables, Mortars), Thermal
          Insulation – Ceramic Fibre products (Ceramic Fibre Blankets, Boards,
          Papers, Textiles, Modules), Rockwool Products (Slabs, Wired Mat,.
        </li>
        <h3 className="headd">Stratigically Planned Warehouses:</h3>
        <li className="linkss">
          Strategic advance planning with decades of experience allows us to
          stock at multiple states Warehouses, adequate quantities of stock to
          meet both urgent and regular requirement of clients.We serve across
          industries including Iron & Steel, Cement, Power, Non Ferrous…. With
          premium solution offerings for industrial products including
          Refractories – Shaped (Bricks, Special Shaped) & Unshaped (Monolithics
          – Ramming Masses, Castables, Mortars), Thermal Insulation – Ceramic
          Fibre products (Ceramic Fibre Blankets, Boards, Papers, Textiles,
          Modules), Rockwool Products (Slabs, Wired Mat, Pipe Sections), Calcium
          Silicate – HYSIL (Blocks, Pipe Sections), Bio-soluble Products,
          Microporous Boards and Bulk product offerings (Ferro Alloys, Carbon
          products like CPC, Grahpite Granules, Metallics like Pig Iron, Sponge
          Iron)..
        </li>

        <h3 className="headd">Multi-Location Presence:</h3>
        <li className="linkss">
          Presence of our group concerns in states of Delhi, Rajasthan, West
          Bengal supports our operations in North, Central & Eastern India by
          extending local support to our clients. Same is to get further
          augmented by new branches planned in other parts of the country
          including west & south India.We serve across industries including Iron
          & Steel, Cement, Power, Non Ferrous…. With premium solution offerings
          for industrial products including Refractories – Shaped (Bricks,
          Special Shaped) & Unshaped (Monolithics – Ramming Masses, Castables,
          Mortars), Thermal Insulation – Ceramic Fibre products (Ceramic Fibre
          Blankets, Boards, Papers, Textiles, Modules), Rockwool Products
          (Slabs, Wired Mat, Pipe Sections), Calcium Silicate – HYSIL (Blocks,
          Pipe Sections), Bio-soluble Products, Microporous Boards and Bulk
          product offerings (Ferro Alloys, Carbon products like CPC, Grahpite
          Granules, Metallics like Pig Iron, Sponge Iron)..
        </li>
        <h3 className="headd">37 Years of Trust-Winning Services:</h3>
        <li className="linkss">
          The Group now boasts thirty five years of strong relationships with
          all its major associates, with five decades of experience of the group
          promoter in serving industry, allowing all the teams-members to work
          efficiently for complete customer satisfaction. We serve across
          industries including Iron & Steel, Cement, Power, Non Ferrous…. With
          premium solution offerings for industrial products including
          Refractories – Shaped (Bricks, Special Shaped) & Unshaped (Monolithics
          – Ramming Masses, Castables, Mortars),
        </li>
      </ul>
    </WrappeR>
  );
};
const WrappeR = styled.section`
  .hero-heading {
    cursor: pointer;
  }
  .hero-img {
    width: 720px;
    height: 410px;
  }

  .hero-para {
    font-size: 1.6rem;
    color: black;
    font-weight: 600;
    cursor: pointer;
  }
  .ad {
    font-size: 5rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #c7a532;
    margin-top: 30px;
    transition: all ease 0.5s;
    cursor: pointer;
  }
  .ad:hover {
    color: #2565af;
    font-size: 5.3rem;
  }
  .hero-heading {
    color: #c7a532;
  }

  ul {
    padding: 5rem 7rem;
  }
  .headd {
    font-size: 3rem;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 3rem;
    color: #2565af;
    cursor: pointer;
  }
  .linkss {
    font-size: 1.6rem;
    margin-bottom: 3.5rem;
    font-family: gilroy;
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .hero-heading {
    }

    
  .hero-img {
    width: 500px;
    height: 300px;
    object-fit :cover;
  }

  .hero-para {
    font-size: 1.8rem;
    color: black;
    font-weight: 700;
    cursor: pointer;
}
    
  .hero-heading {
    color: #c7a532;
  }

  ul {
    padding: 5rem 4rem;
  }
  .headd {
    font-size: 4rem;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 2rem;
    color: #2565af;
    cursor: pointer;
  }
  .linkss {
    font-size: 1.8rem;
    margin-bottom: 3.2rem;
    font-family: gilroy;
    cursor: pointer;
  }
  }
`;

export default About;
