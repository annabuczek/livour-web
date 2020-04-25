import React, { useState } from 'react';
import ReviewCard from './ReviewCard';
import leftArrow from '../../images/left-arrow.svg';
import rightArrow from '../../images/right-arrow.svg';
import reviews from './reviewsCopy';

const ReviewsCarousel = () => {
  const [review, setReview] = useState(reviews[0]);

  return (
    <div className="reviews-carousel__container">
      <button className="reviews-carousel__arrow reviews-carousel__arrow--left">
        <img src={leftArrow} alt="left arrow button" />
      </button>
      <ReviewCard review={review} />
      <button className="reviews-carousel__arrow reviews-carousel__arrow--right">
        <img src={rightArrow} alt="right arrow button" />
      </button>
    </div>
  );
};

export default ReviewsCarousel;
