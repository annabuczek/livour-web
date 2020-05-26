import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchPhoto } from '../../api/instagram';
import { formatPhotoCaption } from '../../helpers/instagram';

const PhotoInstagram = ({ id }) => {
  const [photoUrl, setPhotoUrl] = useState('');
  const [photoCaption, setPhotoCaption] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const photo = await fetchPhoto(id);

      setPhotoUrl(photo.media_url);
      setPhotoCaption(formatPhotoCaption(photo.caption));
    };
    fetch();
  }, [id]);

  return (
    <div className="gallery__image-wrapper">
      <img
        className="gallery__image"
        src={photoUrl}
        alt="instagram"
      />
      <p className="gallery__image-caption">{photoCaption}</p>
    </div>
  );
};

PhotoInstagram.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PhotoInstagram;
