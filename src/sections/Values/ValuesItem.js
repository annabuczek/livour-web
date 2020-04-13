import React from 'react';
import placeholder from '../../images/emoji.svg';

const ValuesItem = ({ value }) => {
  return (
    <div className="values__list-item">
      <img
        className="values__item-image"
        alt="value"
        src={placeholder}
      />
      <h3 className="values__item-heading">{value.title}</h3>
      <p className="values__item-description">{value.description}</p>
    </div>
  );
};

export default ValuesItem;
