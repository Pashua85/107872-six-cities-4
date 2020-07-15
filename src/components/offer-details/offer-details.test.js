import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import OfferDetails from './offer-details';
import places from '../../mock/test-offers';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`OfferDetails`, () => {
  const nearPlaces = [places[1], places[2], places[3]];
  const mockStore = configureStore([]);
  const store = mockStore({
    USER: null,
    AUTH_STATUS: `NO_AUTH`
  });

  it(`should render correctly`, () => {
    const wrapper = shallow(
        <Provider store={store}>
          <OfferDetails place={places[0]} nearPlaces={nearPlaces} />
        </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
