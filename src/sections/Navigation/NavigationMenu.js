import React from 'react';
import PropTypes from 'prop-types';
import ScrollLink from '../../components/ScrollLink/ScrollLink';
import FacebookIcon from '../../images/facebook.svg';
import InstagramIcon from '../../images/instagram.svg';

const NaviagtionMenu = ({
  handleMobileNavItemClick,
  navClassName,
}) => {
  return (
    <ul className={`${navClassName}__menu`}>
      <li className={`${navClassName}__menu-item`}>
        <ScrollLink
          className="navigation__link"
          to="home"
          onSetActive={handleMobileNavItemClick}
        >
          Home
        </ScrollLink>
      </li>
      <li className={`${navClassName}__menu-item`}>
        <ScrollLink
          className="navigation__link"
          to="tours"
          onSetActive={handleMobileNavItemClick}
        >
          Tours
        </ScrollLink>
      </li>
      <li className={`${navClassName}__menu-item`}>
        <ScrollLink
          className="navigation__link"
          to="about"
          onSetActive={handleMobileNavItemClick}
        >
          About
        </ScrollLink>
      </li>
      <li className={`${navClassName}__menu-item`}>
        <ScrollLink
          className="navigation__link"
          to="reviews"
          onSetActive={handleMobileNavItemClick}
        >
          Reviews
        </ScrollLink>
      </li>
      <li className={`${navClassName}__menu-item`}>
        <ScrollLink
          className="navigation__link"
          to="contact"
          onSetActive={handleMobileNavItemClick}
        >
          Contact
        </ScrollLink>
      </li>
      <div className="navigation__social">
        <li className={`${navClassName}__menu-item`}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer noopener"
            className="navigation__link"
          >
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
            target="_blank"
            rel="noreferrer noopener"
            className="navigation__link"
          >
            <img
              src={InstagramIcon}
              alt="instagram"
              className="navigation__social-icon"
            />
          </a>
        </li>
      </div>
    </ul>
  );
};

NaviagtionMenu.propTypes = {
  navClassName: PropTypes.string.isRequired,
  handleMobileNavItemClick: PropTypes.func,
};

export default NaviagtionMenu;
