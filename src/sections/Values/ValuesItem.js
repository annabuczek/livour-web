import React from 'react';

const ValuesItem = ({ value }) => {
  return (
    <div className="values__list-item">
      <img
        className="values__item-image"
        alt={value.alt}
        src={value.image}
      />
      <h2 className="values__item-heading">{value.title}</h2>
      <p className="values__item-description">{value.description}</p>
    </div>
  );
};

export default ValuesItem;
