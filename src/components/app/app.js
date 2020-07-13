import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import OfferDetails from '../offer-details/offer-details';
import offers from '../../mock/offers';


const App = () => {
  const currentPlace = offers[0];
  const nearPlaces = [offers[1], offers[2], offers[3]];

  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path="/">
    //       <Main />
    //     </Route>
    //     <Route exact path="/dev-offer">
    //       <OfferDetails place={currentPlace} nearPlaces={nearPlaces} />
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
    <div></div>
  );
};

export default App;
