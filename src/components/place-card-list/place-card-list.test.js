import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCardList from './place-card-list';
import places from '../../mock/test-offers';

describe(`PlaceCard`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<PlaceCardList places={places} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
