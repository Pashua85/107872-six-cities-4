import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import PlaceCardList from './place-card-list';
import places from '../../mock/test-offers';

describe(`PlaceCardList`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <PlaceCardList places={places} />
          </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
