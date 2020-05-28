import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import useVisibilityOnScroll from '../../effects/useVisibilityOnScroll';
import UpArrow from '../../images/up-arrow.svg';
import './BackToTopButton.scss';

const BackToTopButton = () => {
  const visible = useVisibilityOnScroll();
  return (
    <button
      className={`backtotop-button ${
        visible ? 'backtotop-button--visible' : ''
      }`}
      onClick={() => scroll.scrollToTop()}
    >
      <img
        src={UpArrow}
        alt="up-arrow"
        className="backtotop-button__icon"
      ></img>
    </button>
  );
};

export default BackToTopButton;
