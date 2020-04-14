import React, { Component } from 'react';
import FacebookIcon from '../../images/facebook.svg';
import InstagramIcon from '../../images/instagram.svg';
import './Navigation.scss';

class Navigation extends Component {
  state = {
    show: false,
    scrollPos: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    console.log('called!');
  }

  handleScroll = () => {
    const { scrollPos } = this.state;
    const scrollPosCurrent = window.scrollY;
    const valuesPos = document
      .querySelector('.values__description')
      .getBoundingClientRect().top;

    if (
      valuesPos <= 0 ||
      (scrollPos > scrollPosCurrent && scrollPosCurrent !== 0)
    ) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }

    this.setState({ scrollPos: scrollPosCurrent });
  };

  render() {
    return (
      <nav
        className={`main-navigation ${
          this.state.show ? 'main-navigation--active' : ''
        }`}
      >
        <div className="main-navigation__inner">
          <div className="main-navigation__logo">Livour</div>
          <ul className="main-navigation__menu">
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
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
