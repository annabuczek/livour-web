import React from 'react';
import FacebookIcon from '../../images/facebook.svg';
import InstagramIcon from '../../images/instagram.svg';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="main-navigation">
      <div className="main-navigation__inner">
        <div className="main-navigation__logo">Livour</div>
        <ul className="main-navigation__menu">
          <li className="main-navigation__menu-item">
            <a href="#" className="main-navigation__link">
              Home
            </a>
          </li>
          <li className="main-navigation__menu-item">
            <a href="#" className="main-navigation__link">
              Tours
            </a>
          </li>
          <li className="main-navigation__menu-item">
            <a href="#" className="main-navigation__link">
              About
            </a>
          </li>
          <li className="main-navigation__menu-item">
            <a href="#" className="main-navigation__link">
              Reviews
            </a>
          </li>
          <li className="main-navigation__menu-item">
            <a href="#" className="main-navigation__link">
              Contact
            </a>
          </li>
          <li className="main-navigation__menu-item">
            <a
              href="https://facebook.com"
              className="main-navigation__link"
            >
              <img
                src={FacebookIcon}
                alt="facebook"
                className="main-navigation__social-icon"
              />
            </a>
          </li>
          <li className="main-navigation__menu-item">
            <a
              href="https://instagram.com"
              className="main-navigation__link"
            >
              <img
                src={InstagramIcon}
                alt="instagram"
                className="main-navigation__social-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
