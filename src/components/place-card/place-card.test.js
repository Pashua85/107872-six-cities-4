import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {PlaceCard} from './place-card';
import places from '../../mock/test-offers';

describe(`PlaceCard`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <PlaceCard
              place={places[0]}
              onCardHover={() => {}}
              onCardUnhover={() => {}}
              onCardClick={() => {}}
              onFavoriteClick={() => {}}
              cardClass="cities__place-card"
              imageClass="cities__image-wrapper"
            />
          </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
