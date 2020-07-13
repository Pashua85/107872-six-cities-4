import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Map from '../map/map';
import {getCityOffers} from '../../store/reducers/offersReducer/selectors';
import {getActiveOffer} from '../../store/reducers/activeOfferReducer/selectors';
import {getCurrentCity} from '../../store/reducers/currentCityReducer/selectors';

const CitiesMap = (props) => {
  const {places, activePlace, currentCity} = props;
  const otherPlaces = places.filter((p) => p !== activePlace);

  return (
    <Map className="cities__map" places={otherPlaces} currentPlace={activePlace} city={currentCity} />
  );
};

CitiesMap.propTypes = {
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
  activePlace: PropTypes.object,
  currentCity: PropTypes.object
};

const mapStateToProps = (state) => ({
  places: getCityOffers(state),
  activePlace: getActiveOffer(state),
  currentCity: getCurrentCity(state)
});

export default connect(mapStateToProps)(CitiesMap);
export {CitiesMap};
