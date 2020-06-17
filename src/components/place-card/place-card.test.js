import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card';
import places from '../../mock/test-offers';

describe(`PlaceCard`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<PlaceCard place={places[0]} onMouseLeave={() => {}} onMouseEnter={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
