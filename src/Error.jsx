import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <img className='err' src="../images/404.2.avif" alt="error" />
      <NavLink to="/">
        <Button className="btn"> Go Back</Button>
      </NavLink>
      {/* we are using navlink here to go back to home page by clicking the button so basically the navlink is redirecting the error page to home page  */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
    .err{
    width:90rem;
    height:42rem;
    object-fit:cover;
    margin-top:-6rem;}
`;

export default Error;