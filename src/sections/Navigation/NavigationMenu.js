import React from 'react';
import PropTypes from 'prop-types';
import ScrollLink from '../../components/ScrollLink';
import FacebookIcon from '../../images/facebook.svg';
import InstagramIcon from '../../images/instagram.svg';

const NaviagtionMenu = ({ navClassName }) => {
  return (
    <ul className={`${navClassName}__menu`}>
      <li className={`${navClassName}__menu-item`}>
        <ScrollLink className="navigation__link" to="home">
          Home
        </ScrollLink>
      </li>
      <li className={`${navClassName}__menu-item`}>
        <ScrollLink className="navigation__link" to="tours">
          Tours
        </ScrollLink>
      </li>
      <li className={`${navClassName}__menu-item`}>
        <ScrollLink className="navigation__link" to="about">
          About
        </ScrollLink>
      </li>
      <li className={`${navClassName}__menu-item`}>
        <ScrollLink className="navigation__link" to="reviews">
          Reviews
        </ScrollLink>
      </li>
      <li className={`${navClassName}__menu-item`}>
        <ScrollLink className="navigation__link" to="contact">
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
};

export default NaviagtionMenu;
