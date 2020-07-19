import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {OfferDetails} from './offer-details';
import places from '../../mock/test-offers';
import reviews from '../../mock/test-reviews';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`OfferDetails`, () => {
  const nearPlaces = [places[1], places[2], places[3]];

  it(`should render correctly`, () => {
    const wrapper = shallow(
        <OfferDetails place={places[0]} nearPlaces={nearPlaces} authStatus={`AUTH`} reviews={reviews} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
