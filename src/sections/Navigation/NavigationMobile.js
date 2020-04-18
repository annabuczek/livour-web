import React, { Component } from 'react';
import NavigationMenu from './NavigationMenu';
import './Navigation.scss';
import './Hamburger.scss';

class NavigationMobile extends Component {
  state = {
    open: false,
    visible: false,
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
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }

    this.setState({ scrollPos: scrollPosCurrent });
  };

  handleHamburgerClick = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    return (
      <div
        className={`navigation-mobile ${
          this.state.open ? 'navigation-mobile--open' : ''
        } ${this.state.visible ? 'navigation--visible' : ''}`}
      >
        <header className="navigation__navbar navigation-mobile__navbar">
          <div className="navigation__logo">Livour</div>
          <button
            class={`hamburger hamburger--spin ${
              this.state.open ? 'is-active' : ''
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
          <NavigationMenu navClassName="navigation-mobile" />
        </div>
      </div>
    );
  }
}

export default NavigationMobile;
