import React from 'react';

import './Container.scss';

const Container = ({ children, title, icon }) => {
  return (
    <div className="Container">
      {children}

      {/* для HomePage */}
      <div className="homepage-container">
        <h1 className="homepage-title">
          {title}
          <span role="img" aria-label="Phonebook icon">
            {icon}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Container;
