import React from 'react';
import nature from '../../images/nature.jpg';
import './Gallery.scss';

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery__container">
        <h2 className="gallery__heading">
          Our adventures on Instagram
        </h2>
        <div className="gallery__content">
          <div className="gallery__image-wrapper">
            <img
              className="gallery__image"
              src={nature}
              alt="instagram"
            />
          </div>
          <div className="gallery__image-wrapper">
            <img
              className="gallery__image"
              src={nature}
              alt="instagram"
            />
          </div>
          <div className="gallery__image-wrapper">
            <img
              className="gallery__image"
              src={nature}
              alt="instagram"
            />
          </div>
          <div className="gallery__image-wrapper">
            <img
              className="gallery__image"
              src={nature}
              alt="instagram"
            />
          </div>
          <div className="gallery__image-wrapper">
            <img
              className="gallery__image"
              src={nature}
              alt="instagram"
            />
          </div>
          <div className="gallery__image-wrapper">
            <img
              className="gallery__image"
              src={nature}
              alt="instagram"
            />
          </div>
          <div className="gallery__image-wrapper">
            <img
              className="gallery__image"
              src={nature}
              alt="instagram"
            />
          </div>
          <div className="gallery__image-wrapper">
            <img
              className="gallery__image"
              src={nature}
              alt="instagram"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
