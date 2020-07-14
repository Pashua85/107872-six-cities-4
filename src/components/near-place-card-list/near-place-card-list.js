import React from 'react';
import PropTypes from 'prop-types';
import PlaceCardList from '../place-card-list/place-card-list';

const NearPlaceCardList = (props) => {
  return (
    <PlaceCardList className="near-places__list" {...props} />
  );
};

NearPlaceCardList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object)
};

export default NearPlaceCardList;
