import React from 'react';
import ScrollLink from '../../components/ScrollLink/ScrollLink';

const ToursItem = ({ tour }) => {
  return (
    <div className="tours__list-item">
      <div className="tours__item-image-container">
        <img
          src={tour.image}
          alt={tour.imageAlt}
          className="tours__item-image"
        />
      </div>
      <div className="tours__item-info-container">
        <h2 className="tours__item-title">{tour.title}</h2>
        <div className="tours__item-info-bottom">
          <div className="tours__item-description">
            <p>
              <strong>Location: </strong>
              {tour.location}
            </p>
            <p>
              <strong>Duration: </strong>
              {tour.duration}
            </p>
            <p>
              <strong>Available: </strong>
              {tour.available}
            </p>
          </div>
          <ScrollLink to="contact" className="tours__item-button">
            More Info
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default ToursItem;
