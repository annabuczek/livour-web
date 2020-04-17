import React, { Component } from 'react';
import NavigationMenu from './NavigationMenu';
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
          <NavigationMenu navClassName="navigation-mobile" />
        </div>
      </div>
    );
  }
}

export default NavigationMobile;
