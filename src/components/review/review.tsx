import React from 'react';
import {IReview} from '../../types/types';

interface ReviewProps {
  review: IReview
}

const Review: React.FC<ReviewProps> = (props) => {
  const {user, rating, comment, date} = props.review;
  const dateString = new Date(date).toLocaleString(`en`, {
    month: `long`,
    year: `numeric`
  });

  const ratingStyle = {
    width: `${Math.floor(rating) * 20}%`
  };

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatar_url} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={ratingStyle}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{dateString}</time>
      </div>
    </li>
  );
};

export default Review;
