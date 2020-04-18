import React from 'react';
import MainBanner from './sections/MainBanner/MainBanner';
import Navigation from './sections/Navigation/Navigation';
import Values from './sections/Values/Values';
import './App.scss';

function App() {
  return (
    <div>
      <Navigation />
      <MainBanner />
      <Values />
    </div>
  );
}
export default App;
