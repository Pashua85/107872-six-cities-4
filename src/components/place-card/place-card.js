import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const PlaceCard = (props) => {
  const {propertyName, propertyType, price, isPremium, titlePhoto, rating} = props.place;
  const {onCardHover, onCardUnhover, cardClass, imageClass, styleObject} = props;
  let propertyTypeString;
  switch (propertyType) {
    case `room`:
      propertyTypeString = `Private room`;
      break;
    case `house`:
      propertyTypeString = `House`;
      break;
    case `hotel`:
      propertyTypeString = `Hotel`;
      break;
    default:
      propertyTypeString = `Apartment`;
  }

  const ratingStyle = {
    width: `${Math.floor(rating) * 20}%`
  };

  return (
    <Link to="/dev-offer">
      <article
        className={`${cardClass} place-card`}
        onMouseEnter={() => {
          onCardHover(props.place);
        }}
        onMouseLeave={() => {
          onCardUnhover();
        }}
        style={styleObject}
      >
        {
          cardClass === `cities__place-card` && isPremium ? (
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
          ) : null
        }
        <div className={`${imageClass} place-card__image-wrapper`}>
          <img className="place-card__image" src={titlePhoto} width="260" height="200" alt="Place image" />
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
              <span style={ratingStyle}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            {propertyName}
          </h2>
          <p className="place-card__type">{propertyTypeString}</p>
        </div>
      </article>
    </Link>
  );
};

PlaceCard.defaultProps = {
  cardClass: `cities__place-card`,
  imageClass: `cities__image-wrapper`
};

PlaceCard.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    propertyName: PropTypes.string.isRequired,
    propertyType: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]),
    propertyText: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    bedroomsAmount: PropTypes.number.isRequired,
    guestMax: PropTypes.number.isRequired,
    propertyItems: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      isSuper: PropTypes.bool
    }).isRequired,
    titlePhoto: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          userName: PropTypes.string,
          avatar: PropTypes.string,
          rating: PropTypes.number,
          text: PropTypes.string
        })
    ),
    coords: PropTypes.arrayOf(PropTypes.number).isRequired
  }),
  onCardHover: PropTypes.func.isRequired,
  onCardUnhover: PropTypes.func.isRequired,
  cardClass: PropTypes.string,
  imageClass: PropTypes.string,
  styleObject: PropTypes.object
};

export default PlaceCard;


