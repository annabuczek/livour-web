import React from 'react';
import NavigationMain from './NavigationMain';
import NavigationMobile from './NavigationMobile';
import './Navigation.scss';

class Navigation extends React.Component {
  state = {
    visible: false,
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
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }

    this.setState({ scrollPos: scrollPosCurrent });
  };

  render() {
    return (
      <React.Fragment>
        <NavigationMain visible={this.state.visible} />
        <NavigationMobile visible={this.state.visible} />
      </React.Fragment>
    );
  }
}

export default Navigation;
