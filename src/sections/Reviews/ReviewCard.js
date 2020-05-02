import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div className="reviews-carousel__card">
      <div className="reviews-carousel__card-top">
        <div className="reviews-carousel__card-image">
          <img src={review.image} alt={review.imageAlt} />
        </div>
        <div className="reviews-carousel__card-info">
          <div className="reviews-carousel__card-author">
            {review.author}
          </div>
          <div className="reviews-carousel__card-country">
            {review.country}
          </div>
        </div>
      </div>
      <div className="reviews-carousel__card-bottom">
        <div className="reviews-carousel__card-review">
          {review.content}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
