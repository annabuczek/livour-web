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
                <a href="https://facebook.com" className="">
                  <img
                    src={FacebookIcon}
                    alt="facebook"
                    className="footer__social-icon"
                  />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="https://instagram.com" className="">
                  <img
                    src={InstagramIcon}
                    alt="instagram"
                    className="footer__social-icon"
                  />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="https://tripadvisor.com" className="">
                  <img
                    src={TripAdvisorIcon}
                    alt="tripadvisor"
                    className="footer__social-icon"
                  />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="https://youtube.com" className="">
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
      </div>
    </section>
  );
};

export default Footer;
