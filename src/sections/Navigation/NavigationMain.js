import React, { Component } from 'react';
import FacebookIcon from '../../images/facebook.svg';
import InstagramIcon from '../../images/instagram.svg';
import './Navigation.scss';

class NavigationMain extends Component {
  state = {
    show: false,
    scrollPos: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
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
      <div className="navigation-main">
        <header
          className={`navigation__toolbar ${
            this.state.show ? 'navigation--active' : ''
          }`}
        >
          <div className="navigation__logo">Livour</div>
          <ul className="navigation-main__menu">
            <li className="navigation-main__menu-item">
              <a href="#about" className="navigation-main__link">
                Home
              </a>
            </li>
            <li className="navigation-main__menu-item">
              <a href="#about" className="navigation-main__link">
                Tours
              </a>
            </li>
            <li className="navigation-main__menu-item">
              <a href="#about" className="navigation-main__link">
                About
              </a>
            </li>
            <li className="navigation-main__menu-item">
              <a href="#about" className="navigation-main__link">
                Reviews
              </a>
            </li>
            <li className="navigation-main__menu-item">
              <a href="#about" className="navigation-main__link">
                Contact
              </a>
            </li>
            <li className="navigation-main__menu-item">
              <a
                href="https://facebook.com"
                className="navigation-main__link"
              >
                <img
                  src={FacebookIcon}
                  alt="facebook"
                  className="navigation-main__social-icon"
                />
              </a>
            </li>
            <li className="navigation-main__menu-item">
              <a
                href="https://instagram.com"
                className="navigation-main__link"
              >
                <img
                  src={InstagramIcon}
                  alt="instagram"
                  className="navigation-main__social-icon"
                />
              </a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default NavigationMain;
