import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        exact
        to="/"
        className="nav-link"
        activeClassName="active-nav-link"
      >
        Home
      </NavLink>

      <NavLink
        exact
        to="/contacts"
        className="nav-link"
        activeClassName="active-nav-link"
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
