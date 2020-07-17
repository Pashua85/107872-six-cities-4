import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import OfferDetails from '../offer-details/offer-details';
import SignIn from '../sign-in/sign-in';


const App = () => {
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
