import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getOffersNearby} from '../../store/reducers/offers-nearby-reducer/selectors';
import Map from '../map/map';

const PropertyMap = (props) => {
  const {places, currentPlace, city} = props;

  return (
    <Map className="property__map" places={places} currentPlace={currentPlace} city={city} />
  );
};

PropertyMap.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object),
  currentPlace: PropTypes.object.isRequired,
  city: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  places: getOffersNearby(state)
});

export default connect(mapStateToProps)(PropertyMap);
export {PropertyMap};

