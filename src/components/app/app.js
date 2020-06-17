import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main';
import OfferDetails from '../offer-details/offer-details';


const App = (props) => {
  const {placeAmount, places} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main places={places} placeAmount={placeAmount} onTitleClick={() => {}} />
        </Route>
        <Route exact path="/dev-offer">
          <OfferDetails />
        </Route>
      </Switch>
    </BrowserRouter>

  );
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
