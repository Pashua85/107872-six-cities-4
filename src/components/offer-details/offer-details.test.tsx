import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {OfferDetails} from './offer-details';
import places from '../../mock/test-places';
import reviews from '../../mock/test-reviews';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`OfferDetails`, () => {
  const nearPlaces = [places[1], places[2], places[3]];
  const routeComponentPropsMock = {
    history: {} as any,
    location: {} as any,
    match: {
      params: {
        id: `1`
      }
    } as any,
  }

  it(`should render correctly`, () => {
    const wrapper = shallow(
        <OfferDetails
          {...routeComponentPropsMock}
          place={places[0]}
          nearPlaces={nearPlaces}
          authStatus={`AUTH`}
          reviews={reviews}
          onComponentMount={() => {} }
          onComponentUpdate={() => {}}
          onComponentUnmount={() => {}}
        />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
