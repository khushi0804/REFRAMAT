import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';

// here we are using navlink it is a component in react- dom that is stop the page from reloading on click on any element
const Header = () => {
  return (
  <MainHeader>

    <NavLink to="/">
        <img src="./images/logo.png" alt="logo" className='logo'/>
    </NavLink>
    <Navbar />
  </MainHeader>
  );
}
 const MainHeader = styled.header`
   padding: 0 4.8rem;
  height: 9rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 45%;
    margin-left:5rem;
  }`
  ;
export default Header;


// this is fixed header page as we know we want header and footer in every section toh we are creating a folder in src thats name is components and under this components we are creating the footer.jsx and header.jsx...here we are using JSX as extension beacuse JSX stands for javascript  extensible markup language that is more efficient and easy to declare , it ,makes the code more readable and easier to maintain.