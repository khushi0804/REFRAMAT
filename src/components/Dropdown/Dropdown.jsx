import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dropdown.css';

const Dropdown = ({ items }) => {
  return (
    <ul className="dropdown-menu">
      {items.map((item) => (
        <li key={item.id} className="dropdown-item">
          <NavLink className="dropdown-link" to={item.path}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;

