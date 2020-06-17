import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';


const App = (props) => {
  const {placeAmount, places} = props;
  return <Main places={places} placeAmount={placeAmount} onTitleClick={() => {}} />;
};

App.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.shape({
        propertyName: PropTypes.string.isRequired,
        propertyType: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        picture: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
      })
  ),
  placeAmount: PropTypes.number.isRequired
};

export default App;
