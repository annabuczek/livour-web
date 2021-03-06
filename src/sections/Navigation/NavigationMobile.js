import React, { useState } from 'react';
import useVisibilityOnScroll from '../../effects/useVisibilityOnScroll';
import NavigationMenu from './NavigationMenu';
import './Navigation.scss';
import './Hamburger.scss';

const NavigationMobile = () => {
  const [open, setOpen] = useState(false);
  const visible = useVisibilityOnScroll();

  return (
    <div
      className={`navigation-mobile 
      ${open ? 'navigation-mobile--open' : ''} 
      ${visible ? 'navigation--visible' : ''}
      `}
    >
      <header className="navigation__navbar navigation-mobile__navbar">
        <div className="navigation__logo">Livour</div>
        <button
          className={`hamburger hamburger--spin ${
            open ? 'is-active' : ''
          }`}
          type="button"
          onClick={(e) => setOpen(!open)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </header>
      <div className="navigation-mobile__drawer">
        <NavigationMenu
          handleMobileNavItemClick={() => setOpen(false)}
          navClassName="navigation-mobile"
        />
      </div>
    </div>
  );
};

export default NavigationMobile;
