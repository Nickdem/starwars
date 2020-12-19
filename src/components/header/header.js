import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <div className="header">
      <h3 className="header__nav-link">
        <Link className="header__logo" to="/">StarDB</Link>
      </h3>
      <ul className="header__nav-list">
        <li className="header__nav-link">
          <NavLink activeClassName="active" to="/people/">People</NavLink>
        </li>
        <li className="header__nav-link">
          <NavLink activeClassName="active" to="/planets/">Planets</NavLink>
        </li>
        <li className="header__nav-link">
          <NavLink activeClassName="active" to="/starships/">Starships</NavLink>
        </li>
        <li className="header__nav-link">
          <NavLink activeClassName="active" to="/login">Login</NavLink>
        </li>
        <li className="header__nav-link">
          <NavLink activeClassName="active" to="/secret">Secret</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;