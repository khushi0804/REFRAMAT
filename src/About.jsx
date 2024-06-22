import React, { useEffect } from 'react'
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import styled from "styled-components";


const About = () => {
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);

  return <WrappeR>
    <HeroSection />
    <h2 className='ad'>Advantages Served</h2>
    <ul>
      <h3 className='headd'>Best quality products assurance:
      </h3>
      <li className='linkss'>Our dealing in major furnace related materials and energy conservation solutions ensure
        our customers getting all their major needs served under a single roof.
        We serve across industries including Iron & Steel, Cement, Power, Non Ferrous…. With premium solution offerings for industrial products including Refractories – Shaped (Bricks, Special Shaped) & Unshaped (Monolithics – Ramming Masses, Castables, Mortars), Thermal Insulation – Ceramic Fibre products (Ceramic Fibre Blankets, Boards, Papers, Textiles, Modules), Rockwool Products (Slabs, Wired Mat, Pipe Sections), Calcium Silicate – HYSIL (Blocks, Pipe Sections), Bio-soluble Products, Microporous Boards and Bulk product offerings (Ferro Alloys, Carbon products like CPC, Grahpite Granules, Metallics like Pig Iron, Sponge Iron)..
      </li>
      <h3 className='headd'>Customer First Approach:
      </h3>
      <li className='linkss'>We continue enjoying great rapport with our customers as we have maintained our policy
        of "Serving our clients with utmost attention on Quality and Reliability".
        We serve across industries including Iron & Steel, Cement, Power, Non Ferrous…. With premium solution offerings for industrial products including Refractories – Shaped (Bricks, Special Shaped) & Unshaped (Monolithics – Ramming Masses, Castables, Mortars), Thermal Insulation – Ceramic Fibre products (Ceramic Fibre Blankets, Boards, Papers, Textiles, Modules), Rockwool Products (Slabs, Wired Mat, Pipe Sections), Calcium Silicate – HYSIL (Blocks, Pipe Sections), Bio-soluble Products, Microporous Boards and Bulk product offerings (Ferro Alloys, Carbon products like CPC, Grahpite Granules, Metallics like Pig Iron, Sponge Iron)..
      </li>
      <h3 className='headd'>Single Stop Solution:

      </h3>
      <li className='linkss'>Our associations with best of manufacturing facilities in the sub-continent ensures our
        customers receiving the best of products available.We serve across industries including Iron & Steel, Cement, Power, Non Ferrous…. With premium solution offerings for industrial products including Refractories – Shaped (Bricks, Special Shaped) & Unshaped (Monolithics – Ramming Masses, Castables, Mortars), Thermal Insulation – Ceramic Fibre products (Ceramic Fibre Blankets, Boards, Papers, Textiles, Modules), Rockwool Products (Slabs, Wired Mat,.

      </li>
      <h3 className='headd'>Stratigically Planned Warehouses:

      </h3>
      <li className='linkss'>Strategic advance planning with decades of experience allows us to stock at multiple
        states Warehouses, adequate quantities of stock to meet both urgent and regular
        requirement of clients.We serve across industries including Iron & Steel, Cement, Power, Non Ferrous…. With premium solution offerings for industrial products including Refractories – Shaped (Bricks, Special Shaped) & Unshaped (Monolithics – Ramming Masses, Castables, Mortars), Thermal Insulation – Ceramic Fibre products (Ceramic Fibre Blankets, Boards, Papers, Textiles, Modules), Rockwool Products (Slabs, Wired Mat, Pipe Sections), Calcium Silicate – HYSIL (Blocks, Pipe Sections), Bio-soluble Products, Microporous Boards and Bulk product offerings (Ferro Alloys, Carbon products like CPC, Grahpite Granules, Metallics like Pig Iron, Sponge Iron)..

      </li>

      <h3 className='headd'>Multi-Location Presence:

      </h3>
      <li className='linkss'>Presence of our group concerns in states of Delhi, Rajasthan, West Bengal supports our
        operations in North, Central & Eastern India by extending local support to our clients.
        Same is to get further augmented by new branches planned in other parts of the country
        including west & south India.We serve across industries including Iron & Steel, Cement, Power, Non Ferrous…. With premium solution offerings for industrial products including Refractories – Shaped (Bricks, Special Shaped) & Unshaped (Monolithics – Ramming Masses, Castables, Mortars), Thermal Insulation – Ceramic Fibre products (Ceramic Fibre Blankets, Boards, Papers, Textiles, Modules), Rockwool Products (Slabs, Wired Mat, Pipe Sections), Calcium Silicate – HYSIL (Blocks, Pipe Sections), Bio-soluble Products, Microporous Boards and Bulk product offerings (Ferro Alloys, Carbon products like CPC, Grahpite Granules, Metallics like Pig Iron, Sponge Iron)..

      </li>
      <h3 className='headd'>37 Years of Trust-Winning Services:


      </h3>
      <li className='linkss'>The Group now boasts thirty five years of strong relationships with all its major associates,
        with five decades of experience of the group promoter in serving industry, allowing
        all the teams-members to work efficiently for complete customer satisfaction.
        We serve across industries including Iron & Steel, Cement, Power, Non Ferrous…. With premium solution offerings for industrial products including Refractories – Shaped (Bricks, Special Shaped) & Unshaped (Monolithics – Ramming Masses, Castables, Mortars),
      </li>
    </ul>
  </WrappeR>;
};
const WrappeR = styled.section`
.hero-img{
width:450px
}

.hero-para{
font-size:1.6rem;
color:#6C63FF;
font-weight:600;
}
.ad{
font-size:3rem;
text-transform:uppercase;
font-weight:700;
color:#FF6584;
}
.hero-heading{
color:#FF6584;}

ul{
padding:5rem 7rem;
}
.headd{
font-size:3rem;
font-weight:500;
text-transform:capitalize;

margin-bottom:3rem;
color:#6C63FF
}
.linkss{
font-size:1.7rem;
margin-bottom:2rem;
color:#e2bb38;
}
`;

export default About;