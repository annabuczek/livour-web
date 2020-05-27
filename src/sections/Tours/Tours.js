import React from 'react';
import ToursItem from './ToursItem';
import tours from './toursCopy';
import './Tours.scss';

const Tours = () => {
  return (
    <section className="tours" id="tours">
      <div className="tours__container">
        <h2 className="tours__heading">Our Tours</h2>
        <div className="tours__list">
          {tours.map((tour, index) => (
            <ToursItem key={`tour-${index}`} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
