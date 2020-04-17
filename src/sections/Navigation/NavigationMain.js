import React, { Component } from 'react';
import NavigationMenu from './NavigationMenu';
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
      <div
        className={`navigation-main ${
          this.state.show ? 'navigation--active' : ''
        }`}
      >
        <header className="navigation__toolbar">
          <div className="navigation__logo">Livour</div>
          <NavigationMenu navClassName="navigation-main" />
        </header>
      </div>
    );
  }
}

export default NavigationMain;
