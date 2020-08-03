import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import OfferDetails from '../offer-details/offer-details';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import PrivateRoute from '../private-route/private-route';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/offer/:id" component={OfferDetails} />
        <Route exact path="/login" component={SignIn} />
        <PrivateRoute exact path="/favorites" component={Favorites} redirectPath="/login" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
