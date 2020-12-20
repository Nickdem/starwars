import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './header.css';

const Header = () => {

  const renderLinks = (links) => {
    return links.map(({name, url}) => {
      return (
        <li className="header__nav-link" key={name}>
          <NavLink activeClassName="active" to={url}>{name}</NavLink>
        </li>
      )
    })
  }

  const links = [
    {name: 'People', url: '/people/'},
    {name: 'Planets', url: '/planets/'},
    {name: 'Starships', url: '/starships/'},
    {name: 'Login', url: '/login'},
    {name: 'Secret', url: '/secret'}
  ]

  return (
    <div className="header">
      <h3 className="header__nav-link">
        <Link className="header__logo" to="/">StarDB</Link>
      </h3>
      <ul className="header__nav-list">
        {renderLinks(links)}
      </ul>
    </div>
  );
};

export default Header;