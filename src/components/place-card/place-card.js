import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import withFavoriteStatus from '../../hocs/withFavoriteStatus';

const PlaceCard = (props) => {
  const {propertyName, propertyType, price, isPremium, titlePhoto, rating, id, isFavorite} = props.place;
  const {onCardHover, onCardUnhover, cardClass, imageClass, styleObject, onCardClick, onFavoriteClick, history} = props;
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

  const buttonClass = isFavorite ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`;
  const infoClass = cardClass === `favorites__card` ? `favorites__card-info place-card__info` : `place-card__info`;
  const imageWidth = cardClass === `favorites__card` ? `150` : `260`;
  const imageHeight = cardClass === `favorites__card` ? `110` : `200`;

  return (
    <article
      className={`${cardClass} place-card`}
      onMouseEnter={() => {
        onCardHover(props.place);
      }}
      onMouseLeave={() => {
        onCardUnhover();
      }}
      style={styleObject}
      onClick={() => {
        onCardClick(id.toString());
        history.push(`/offer/${id}`);
      }}
    >
      {
        cardClass === `cities__place-card` && isPremium ? (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        ) : null
      }
      <div className={`${imageClass} place-card__image-wrapper`}>
        <img className="place-card__image" src={titlePhoto} width={imageWidth} height={imageHeight} alt="Place image" />
      </div>
      <div className={infoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={buttonClass}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onFavoriteClick(id.toString());
            }}
          >
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
  );
};

PlaceCard.defaultProps = {
  cardClass: `cities__place-card`,
  imageClass: `cities__image-wrapper`
};

PlaceCard.propTypes = {
  // place: PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   propertyName: PropTypes.string.isRequired,
  //   propertyType: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]),
  //   propertyText: PropTypes.arrayOf(PropTypes.string),
  //   price: PropTypes.number.isRequired,
  //   rating: PropTypes.number.isRequired,
  //   isPremium: PropTypes.bool.isRequired,
  //   bedroomsAmount: PropTypes.number.isRequired,
  //   guestMax: PropTypes.number.isRequired,
  //   propertyItems: PropTypes.arrayOf(PropTypes.string),
  //   host: PropTypes.shape({
  //     name: PropTypes.string,
  //     avatar: PropTypes.string,
  //     isSuper: PropTypes.bool
  //   }).isRequired,
  //   titlePhoto: PropTypes.string.isRequired,
  //   photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  //   reviews: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         id: PropTypes.string,
  //         userName: PropTypes.string,
  //         avatar: PropTypes.string,
  //         rating: PropTypes.number,
  //         text: PropTypes.string
  //       })
  //   ),
  //   coords: PropTypes.arrayOf(PropTypes.number).isRequired
  // }),
  place: PropTypes.object.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onCardUnhover: PropTypes.func.isRequired,
  cardClass: PropTypes.string,
  imageClass: PropTypes.string,
  styleObject: PropTypes.object,
  onCardClick: PropTypes.func.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withFavoriteStatus(withRouter(PlaceCard));
export {PlaceCard};


