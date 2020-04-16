import React, { Component } from 'react';
import FacebookIcon from '../../images/facebook.svg';
import InstagramIcon from '../../images/instagram.svg';
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
        <div className="navigation-mobile__drawer">
          <ul className="navigation-mobile__menu">
            <li className="navigation-mobile__menu-item">
              <a href="#about" className="navigation__link">
                Home
              </a>
            </li>
            <li className="navigation-mobile__menu-item">
              <a href="#about" className="navigation__link">
                Tours
              </a>
            </li>
            <li className="navigation-mobile__menu-item">
              <a href="#about" className="navigation__link">
                About
              </a>
            </li>
            <li className="navigation-mobile__menu-item">
              <a href="#about" className="navigation__link">
                Reviews
              </a>
            </li>
            <li className="navigation-mobile__menu-item">
              <a href="#about" className="navigation__link">
                Contact
              </a>
            </li>
            <li className="navigation-mobile__menu-item">
              <a
                href="https://facebook.com"
                className="navigation__link"
              >
                <img
                  src={FacebookIcon}
                  alt="facebook"
                  className="navigation__social-icon"
                />
              </a>
            </li>
            <li className="navigation-mobile__menu-item">
              <a
                href="https://instagram.com"
                className="navigation__link"
              >
                <img
                  src={InstagramIcon}
                  alt="instagram"
                  className="navigation__social-icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavigationMobile;
