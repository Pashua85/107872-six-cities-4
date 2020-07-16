import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import OfferDetails from '../offer-details/offer-details';
// import offers from '../../mock/offers';
import SignIn from '../sign-in/sign-in';


const App = () => {
  // const currentPlace = offers[0];
  // const nearPlaces = [offers[1], offers[2], offers[3]];

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/dev-offer/:id" component={OfferDetails} />
        <Route exact path="/dev-login" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
