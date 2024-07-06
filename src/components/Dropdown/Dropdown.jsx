import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dropdown.css';

const Dropdown = ({ items }) => {
  return (
    <ul className="dropdown-menu">
      {items.map((item, index) => (
        <li key={index} className="dropdown-item">
          <NavLink className="dropdown-link" to={item.path}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;

