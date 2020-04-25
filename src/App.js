import React from 'react';
import About from './sections/About/About';
import MainBanner from './sections/MainBanner/MainBanner';
import NavigationMain from './sections/Navigation/NavigationMain';
import NavigationMobile from './sections/Navigation/NavigationMobile';
import Reviews from './sections/Reviews/Reviews';
import Tours from './sections/Tours/Tours';
import Values from './sections/Values/Values';
import './App.scss';

function App() {
  return (
    <div>
      <NavigationMain />
      <NavigationMobile />
      <MainBanner />
      <Values />
      <Tours />
      <About />
      <Reviews />
    </div>
  );
}
export default App;
