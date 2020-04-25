import React from 'react';
import ReviewsCarousel from './ReviewsCarousel';
import './Reviews.scss';

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="reviews__container">
        <h2 className="reviews__heading">Reviews</h2>
        <ReviewsCarousel />
      </div>
    </section>
  );
};

export default Reviews;
