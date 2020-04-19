import React from 'react';
import MainBanner from './sections/MainBanner/MainBanner';
import NavigationMain from './sections/Navigation/NavigationMain';
import NavigationMobile from './sections/Navigation/NavigationMobile';
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
    </div>
  );
}
export default App;
