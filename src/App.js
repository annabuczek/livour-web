import React from 'react';
import About from './sections/About/About';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Gallery from './sections/Gallery/Gallery';
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
      <Contact />
      <Gallery />
      <Footer />
      <BackToTopButton />
    </div>
  );
}
export default App;
