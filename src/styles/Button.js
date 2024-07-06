import styled from "styled-components";
// this button section for every single button in the website we are creating this component to fetch all the buttons together of our website
export const Button = styled.button `
  text-decoration: none;
  max-width: auto;
  background-color: #2565AF;
  color: rgb(255 255 255);
  padding: 1.6rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  border-radius:20px;
  font-weight:600;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
    background-color:white;
    border:2px solid #2565AF;
    a{
    color:#2565AF;
    font-weight:800;}
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.7rem;
  }
`;