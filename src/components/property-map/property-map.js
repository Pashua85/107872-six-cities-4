import React from 'react';
import PropTypes from 'prop-types';
import Map from '../map/map';
import {getOffersNearby} from '../../store/reducers/offers-nearby-reducer/selectors';
import {connect} from 'react-redux';
import {getOfferByParamsId} from '../../store/reducers/offersReducer/selectors';

const PropertyMap = (props) => {
  const {places, currentPlace} = props;
  return (
    <Map className="property__map" places={places} currentPlace={currentPlace} city={currentPlace.city} />
  );
};

PropertyMap.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object),
  currentPlace: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  currentPlace: ownProps.currentPlace,
  city: ownProps.city,
  places: getOffersNearby(state)
});

export default connect(mapStateToProps)(PropertyMap);
export {PropertyMap};
