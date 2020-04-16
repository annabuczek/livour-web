import React, { Component } from 'react';
import './Navigation.scss';
import './Hamburger.scss';

class NavigationMobile extends Component {
  state = {
    active: false,
  };

  handleHamburgerClick = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };

  render() {
    return (
      <div
        className={`navigation-mobile ${
          this.state.active ? 'navigation-mobile--active' : ''
        }`}
      >
        <header className="navigation__toolbar navigation-mobile__toolbar">
          <div className="navigation__logo">Livour</div>
          <button
            class={`hamburger hamburger--spin ${
              this.state.active ? 'is-active' : ''
            }`}
            type="button"
            onClick={this.handleHamburgerClick}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </header>
        <div className="navigation-mobile__drawer"></div>
      </div>
    );
  }
}

export default NavigationMobile;

/* <ul className="main-navigation__menu">
      <li className="main-navigation__menu-item">
        <a href="#about" className="main-navigation__link">
          Home
        </a>
      </li>
      <li className="main-navigation__menu-item">
        <a href="#about" className="main-navigation__link">
          Tours
        </a>
      </li>
      <li className="main-navigation__menu-item">
        <a href="#about" className="main-navigation__link">
          About
        </a>
      </li>
      <li className="main-navigation__menu-item">
        <a href="#about" className="main-navigation__link">
          Reviews
        </a>
      </li>
      <li className="main-navigation__menu-item">
        <a href="#about" className="main-navigation__link">
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
    </ul> */
