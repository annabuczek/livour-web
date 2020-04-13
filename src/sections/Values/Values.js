import React from 'react';
import ValuesItem from './ValuesItem';
import values from './valuesCopy';
import './Values.scss';

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
          {values.map((value, index) => (
            <ValuesItem key={`value-${index}`} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
