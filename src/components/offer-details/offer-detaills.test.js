import React from 'react';
import renderer from 'react-test-renderer';
import OfferDetails from './offer-details';
import places from '../../mock/test-offers';

describe(`OfferDetails`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<OfferDetails place={places[0]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
