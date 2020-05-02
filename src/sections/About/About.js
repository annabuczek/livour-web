import React from 'react';
import about from './aboutCopy';
import './About.scss';

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__heading">{about.title}</h2>
        <div className="about__content">
          <div className="about__info">
            <h3 className="about__info-heading">{about.subtitle}</h3>
            <p className="about__info-paragraph">{about.par1}</p>
            <p className="about__info-paragraph">{about.par2}</p>
            <p className="about__info-paragraph">{about.par3}</p>
          </div>
          <div className="about__image-container">
            <img
              src={about.image}
              alt={about.imageAlt}
              className="about__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
