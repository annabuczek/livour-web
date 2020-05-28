import React from 'react';
import InstagramIcon from '../../images/instagram-white.svg';
import FacebookIcon from '../../images/facebook-white.svg';
import TripAdvisorIcon from '../../images/tripadvisor-white.svg';
import YouTubeIcon from '../../images/youtube-white.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__address">
            <h3 className="footer__title">Livour</h3>
            <p>Passionate about travelling.</p>
            <p>
              <strong>Main office:</strong>
            </p>
            <p>1440 Walnut St, Des Moines, IA</p>
            <p>50309, United States</p>
            <p>
              <strong>Tel:</strong> +1 785 755 6578
            </p>
          </div>
          <nav className="footer__navigation">
            <h3 className="footer__title">Explore</h3>
            <ul className="footer__navigation-list">
              <li className="footer__navigation-item">
                <a href="#about" className="footer__navigation-link">
                  FAQ
                </a>
              </li>
              <li className="footer__navigation-item">
                <a href="#about" className="footer__navigation-link">
                  Blog
                </a>
              </li>
              <li className="footer__navigation-item">
                <a href="#about" className="footer__navigation-link">
                  Contact Us
                </a>
              </li>
              <li className="footer__navigation-item">
                <a href="#about" className="footer__navigation-link">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </nav>
          <div className="footer__social">
            <h3 className="footer__title">Social Media</h3>
            <ul className="footer__social-list">
              <li className="footer__social-item">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={FacebookIcon}
                    alt="facebook"
                    className="footer__social-icon"
                  />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={InstagramIcon}
                    alt="instagram"
                    className="footer__social-icon"
                  />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  href="https://tripadvisor.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={TripAdvisorIcon}
                    alt="tripadvisor"
                    className="footer__social-icon"
                  />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={YouTubeIcon}
                    alt="youtube"
                    className="footer__social-icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__divider"></div>
        <p className="footer__copyrights">
          Copyright © 2020 Anna Buczek
        </p>
        <div className="footer__copyrights">
          Icons made by{' '}
          <a
            className="footer__copyrights-link"
            href="https://www.flaticon.com/authors/roundicons"
            target="_blank"
            rel="noreferrer noopener"
            title="Roundicons"
          >
            <strong>Roundicons</strong>
          </a>
          {', '}
          <a
            className="footer__copyrights-link"
            href="https://www.flaticon.com/authors/eucalyp"
            target="_blank"
            rel="noreferrer noopener"
            title="Eucalyp"
          >
            <strong>Eucalyp</strong>
          </a>
          {', '}
          <a
            className="footer__copyrights-link"
            href="https://www.flaticon.com/authors/freepik"
            target="_blank"
            rel="noreferrer noopener"
            title="Freepik"
          >
            <strong>Freepik</strong>
          </a>{' '}
          from{' '}
          <a
            className="footer__copyrights-link"
            href="https://www.flaticon.com/"
            target="_blank"
            rel="noreferrer noopener"
            title="Flaticon"
          >
            <strong>www.flaticon.com</strong>
          </a>
        </div>
        <div className="footer__copyrights">
          Photos by{' '}
          <a
            href="https://unsplash.com/@paulgilmore_?utm_source=github.com/annabuczek&utm_medium=referral"
            target="_blank"
            rel="noreferrer noopener"
            className="footer__copyrights-link"
          >
            <strong>Paul Gilmore</strong>
          </a>{' '}
          {', '}
          <a
            href="https://unsplash.com/@koalamoose?utm_source=github.com/annabuczek&utm_medium=referral"
            target="_blank"
            rel="noreferrer noopener"
            className="footer__copyrights-link"
          >
            <strong>Agnieszka Kowalczyk</strong>
          </a>{' '}
          {', '}
          <a
            href="https://unsplash.com/@sebaspenalambarri?utm_source=github.com/annabuczek&utm_medium=referral"
            target="_blank"
            rel="noreferrer noopener"
            className="footer__copyrights-link"
          >
            <strong>Sebastian Pena Lambarri</strong>
          </a>{' '}
          {', '}
          <a
            href="https://unsplash.com/@colt10jordan?utm_source=github.com/annabuczek&utm_medium=referral"
            target="_blank"
            rel="noreferrer noopener"
            className="footer__copyrights-link"
          >
            <strong>Colton Jones</strong>
          </a>{' '}
          {', '}
          <a
            href="https://unsplash.com/@averieclaire?utm_source=github.com/annabuczek&utm_medium=referral"
            target="_blank"
            rel="noreferrer noopener"
            className="footer__copyrights-link"
          >
            <strong>averie woodard</strong>
          </a>{' '}
          {', '}
          <a
            href="https://unsplash.com/@lucabravo?utm_source=github.com/annabuczek&utm_medium=referral"
            target="_blank"
            rel="noreferrer noopener"
            className="footer__copyrights-link"
          >
            <strong>Luca Bravo</strong>
          </a>{' '}
          on{' '}
          <a
            href="https://unsplash.com/?utm_source=github.com/annabuczek&utm_medium=referral"
            target="_blank"
            rel="noreferrer noopener"
            className="footer__copyrights-link"
          >
            <strong>Unsplash</strong>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
