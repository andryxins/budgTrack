import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <ul>
      <li>
        <NavLink to="/homePage" activeClassName="">
          Home Page
        </NavLink>
      </li>
      <li>
        <NavLink to="/transactionsHistory" activeClassName="">
          Transactions History
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="">
          About
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
