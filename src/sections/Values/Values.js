import React from 'react';
import './Values.scss';
import placeholder from '../../images/emoji.svg';

const Values = () => {
  return (
    <section className="values">
      <div className="values__container">
        <h2 className="values__heading">Livour Tours</h2>
        <p className="values__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Eu lobortis elementum nibh tellus molestie nunc. Dui
          ut ornare lectus sit amet. Elementum pulvinar etiam non quam
          lacus suspendisse faucibus interdum.
        </p>
        <div className="values__list">
          <div className="values__list-item">
            <img
              className="values__item-image"
              alt="value"
              src={placeholder}
            />
            <h3 className="values__item-heading">Best Price</h3>
            <p className="values__item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>
          <div className="values__list-item">
            <img
              className="values__item-image"
              alt="value"
              src={placeholder}
            />
            <h3 className="values__item-heading">Best Price</h3>
            <p className="values__item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>
          <div className="values__list-item">
            <img
              className="values__item-image"
              alt="value"
              src={placeholder}
            />
            <h3 className="values__item-heading">Best Price</h3>
            <p className="values__item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>
          <div className="values__list-item">
            <img
              className="values__item-image"
              alt="value"
              src={placeholder}
            />
            <h3 className="values__item-heading">Best Price</h3>
            <p className="values__item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
