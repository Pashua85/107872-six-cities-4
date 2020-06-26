import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';

const ReviewsList = (props) => {
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

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        userName: PropTypes.string,
        avatar: PropTypes.string,
        rating: PropTypes.number,
        text: PropTypes.string
      })
  )
};

export default ReviewsList;
