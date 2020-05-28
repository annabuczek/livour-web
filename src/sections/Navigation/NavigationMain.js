import React from 'react';
import NavigationMenu from './NavigationMenu';
import useVisibilityOnScroll from '../../effects/useVisibilityOnScroll';
import './Navigation.scss';

const NavigationMain = () => {
  const visible = useVisibilityOnScroll();

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
