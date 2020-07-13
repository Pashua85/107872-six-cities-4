import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PlaceCardList from '../place-card-list/place-card-list';
import {getCityOffers} from '../../store/reducers/offersReducer/selectors';
import {getCurrentCity} from '../../store/reducers/currentCityReducer/selectors';

const CitiesPlaceCardList = (props) => {
  return (
    <PlaceCardList className="cities__places-list" {...props} />
  );
};

CitiesPlaceCardList.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.shape({
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
      })
  ),
};

const mapStateToProps = (state) => ({
  city: getCurrentCity(state),
  places: getCityOffers(state)
});

export default connect(mapStateToProps)(CitiesPlaceCardList);
export {CitiesPlaceCardList};
