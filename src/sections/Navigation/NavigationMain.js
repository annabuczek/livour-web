import React from 'react';
import NavigationMenu from './NavigationMenu';
import './Navigation.scss';

const NavigationMain = ({ visible }) => {
  return (
    <div
      className={`navigation-main ${
        visible ? 'navigation--visible' : ''
      }`}
    >
      <header className="navigation__navbar">
        <div className="navigation__logo">Livour</div>
        <NavigationMenu navClassName="navigation-main" />
      </header>
    </div>
  );
};

export default NavigationMain;
