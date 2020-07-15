import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {createAPI} from './api';
import OffersOperation from './store/operations/offers-operation/offers-operation';
import UserOperation from './store/operations/user-operation/user-operation';
import ActionCreator from './store/action-creator/action-creator';
import {AUTH_STATUS} from './store/reducers/authStatusReducer/authStatusReducer';
import reducer from './store/reducers/reducer';
import App from './components/app/app';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AUTH_STATUS.NO_AUTH));
};
const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(UserOperation.checkAuth());
store.dispatch(OffersOperation.loadOffers());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
