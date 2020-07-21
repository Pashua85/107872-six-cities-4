import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getOffersNearby} from '../../store/reducers/offers-nearby-reducer/selectors';
import PlaceCardList from '../place-card-list/place-card-list';

const NearPlaceCardList = (props) => {
  return (
    <PlaceCardList className="near-places__list" {...props} />
  );
};

NearPlaceCardList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = (state) => ({
  places: getOffersNearby(state)
});

export default connect(mapStateToProps)(NearPlaceCardList);
export {NearPlaceCardList};
