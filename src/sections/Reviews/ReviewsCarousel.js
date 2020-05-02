import React, { useState } from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import ReviewCard from './ReviewCard';
import leftArrow from '../../images/left-arrow.svg';
import rightArrow from '../../images/right-arrow.svg';
import reviews from './reviewsCopy';

const ReviewsCarousel = () => {
  const [review, setReview] = useState(reviews[0]);

  const prevCard = () => {
    const newIndex =
      review === reviews[0] ? reviews.length - 1 : review.index - 1;

    setReview(reviews[newIndex]);
  };

  const nextCard = () => {
    const newIndex =
      review === reviews[reviews.length - 1] ? 0 : review.index + 1;

    setReview(reviews[newIndex]);
  };

  return (
    <div className="reviews-carousel__container">
      <button
        className="reviews-carousel__arrow reviews-carousel__arrow--left"
        onClick={() => prevCard()}
      >
        <img src={leftArrow} alt="left arrow button" />
      </button>
      <TransitionGroup className="reviews-carousel__card-container">
        <CSSTransition
          key={review.id}
          timeout={600}
          classNames="reviews-carousel__card-"
        >
          <ReviewCard
            review={review}
            className="reviews-carousel__card"
          />
        </CSSTransition>
      </TransitionGroup>
      <button
        className="reviews-carousel__arrow reviews-carousel__arrow--right"
        onClick={() => nextCard()}
      >
        <img src={rightArrow} alt="right arrow button" />
      </button>
    </div>
  );
};

export default ReviewsCarousel;
