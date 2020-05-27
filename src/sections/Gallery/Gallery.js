import React, { useState, useEffect } from 'react';
import PhotoInstagram from './PhotoInstagram';
import { fetchPhotoIds } from '../../api/instagram';
import './Gallery.scss';

const Gallery = () => {
  const [photoIds, setPhotoIds] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const photoIds = await fetchPhotoIds();

      setPhotoIds(photoIds);
    };
    fetch();
  }, []);

  return (
    <section className="gallery">
      <div className="gallery__container">
        <h2 className="gallery__heading">
          Our adventures on Instagram
        </h2>
        <div className="gallery__content">
          {photoIds.map((photo, index) => (
            <PhotoInstagram key={`photo-${index}`} id={photo.id} />
          ))}
        </div>
        <button
          onClick={() => {
            window.open(
              'https://instagram.com/littraveler',
              '_blank',
            );
          }}
          className="gallery__button"
        >
          Follow us on Instagram
        </button>
      </div>
    </section>
  );
};

export default Gallery;
