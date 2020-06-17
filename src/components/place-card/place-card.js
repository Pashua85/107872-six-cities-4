import React from 'react';
import PropTypes from 'prop-types';

const PlaceCard = (props) => {
  const {propertyName, propertyType, price, isPremium, picture} = props.place;
  const {onMouseEnter, onMouseLeave} = props;

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => {
        onMouseEnter(props.place);
      }}
      onMouseLeave={() => {
        onMouseLeave();
      }}
    >
      {
        isPremium ? (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        ) : null
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={`img/${picture}`} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{propertyName}</a>
        </h2>
        <p className="place-card__type">{propertyType}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  place: PropTypes.shape({
    propertyName: PropTypes.string.isRequired,
    propertyType: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    picture: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }),
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

export default PlaceCard;


