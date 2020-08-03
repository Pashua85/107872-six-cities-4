import React from 'react';
import Review from '../review/review';
import {IReview} from '../../types/types';

interface ReviewsListProps {
  reviews: IReview[]
}

const ReviewsList: React.FC<ReviewsListProps> = (props) => {
  const {reviews} = props;
  return (
    <ul className="reviews__list">
      {
        reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))
      }
    </ul>
  );
};

export default ReviewsList;
