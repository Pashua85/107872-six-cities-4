import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

const NearPlaceCard = (props) => {
  return (
    <PlaceCard
      cardClass="near-places__card"
      imageClass="near-places__image-wrapper"
      {...props}
    />
  );
};

NearPlaceCard.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.string.isRequired,
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
    photos: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          id: PropTypes.string
        })
    ),
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
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default NearPlaceCard;
