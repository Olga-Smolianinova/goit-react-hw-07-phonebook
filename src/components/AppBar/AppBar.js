import React from 'react';

// Components
import Navigation from '../Navigation';
import AuthNavigation from '../AuthNavigation';
// import UserMenu from '../UserMenu';

// Styles
import './AppBar.scss';

const AppBar = () => {
  return (
    <header className="header">
      <Navigation />
      <AuthNavigation />
    </header>
  );
};

export default AppBar;
