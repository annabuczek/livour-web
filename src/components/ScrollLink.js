import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

const ScrollLink = ({ className, to, children }) => {
  return (
    <Link
      className={className}
      activeClass="navigation__link--active"
      to={to}
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
    >
      {children}
    </Link>
  );
};

ScrollLink.propTypes = {
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ScrollLink;
