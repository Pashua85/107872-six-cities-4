import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = (props) => {
  const {places, placeAmount} = props;
  return <Main places={places} placesAmount={placeAmount} />;
};

App.propTypes = {
  places: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeAmount: PropTypes.number.isRequired
};

export default App;
