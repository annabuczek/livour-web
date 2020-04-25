import React from 'react';
import reviews from './reviewsCopy';
import './Reviews.scss';

const Reviews = () => {
  const [first, ...rest] = reviews;
  return (
    <section className="reviews">
      <div className="reviews__container">
        <h2 className="reviews__heading">Reviews</h2>
        <img src={first.image}></img>
      </div>
    </section>
  );
};

export default Reviews;
