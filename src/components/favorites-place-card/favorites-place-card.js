import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

const FavoritesPlaceCard = (props) => {
  return (
    <PlaceCard
      cardClass="favorites__card"
      imageClass="favorites__image-wrapper"
      {...props}
    />
  );
};

FavoritesPlaceCard.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    propertyName: PropTypes.string.isRequired,
    propertyType: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]),
    propertyText: PropTypes.string,
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
};

export default FavoritesPlaceCard;
