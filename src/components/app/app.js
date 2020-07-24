import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import OfferDetails from '../offer-details/offer-details';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/offer/:id" component={OfferDetails} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
