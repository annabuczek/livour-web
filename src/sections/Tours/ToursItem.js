import React from 'react';

const ToursItem = ({ tour }) => {
  return (
    <div className="tours__list-item">
      <div className="tours__item-image-container">
        <img
          src={tour.thumbnail}
          alt={tour.alt}
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
          <a href="#contact" className="tours__item-button">
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToursItem;
