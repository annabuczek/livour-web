import React from 'react';
import PropTypes from 'prop-types';
import FacebookIcon from '../../images/facebook.svg';
import InstagramIcon from '../../images/instagram.svg';

const NaviagtionMenu = ({ navClassName }) => {
  return (
    <ul className={`${navClassName}__menu`}>
      <li className={`${navClassName}__menu-item`}>
        <a href="#about" className="navigation__link">
          Home
        </a>
      </li>
      <li className={`${navClassName}__menu-item`}>
        <a href="#about" className="navigation__link">
          Tours
        </a>
      </li>
      <li className={`${navClassName}__menu-item`}>
        <a href="#about" className="navigation__link">
          About
        </a>
      </li>
      <li className={`${navClassName}__menu-item`}>
        <a href="#about" className="navigation__link">
          Reviews
        </a>
      </li>
      <li className={`${navClassName}__menu-item`}>
        <a href="#about" className="navigation__link">
          Contact
        </a>
      </li>
      <li className={`${navClassName}__menu-item`}>
        <a href="https://facebook.com" className="navigation__link">
          <img
            src={FacebookIcon}
            alt="facebook"
            className="navigation__social-icon"
          />
        </a>
      </li>
      <li className={`${navClassName}__menu-item`}>
        <a
          href="https://instagram.com"
          className={`${navClassName}__link`}
        >
          <img
            src={InstagramIcon}
            alt="instagram"
            className="navigation__social-icon"
          />
        </a>
      </li>
    </ul>
  );
};

NaviagtionMenu.propTypes = {
  navClassName: PropTypes.string.isRequired,
};

export default NaviagtionMenu;
