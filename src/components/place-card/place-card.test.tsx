import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {PlaceCard} from './place-card';
import places from '../../mock/test-places';

describe(`PlaceCard`, () => {
  it(`should render correctly`, () => {
    const routeComponentPropsMock = {
      history: {} as any,
      location: {} as any,
      match: {} as any,
    };

    const tree = renderer
      .create(
          <MemoryRouter>
            <PlaceCard
              {...routeComponentPropsMock}
              place={places[0]}
              onCardHover={() => {}}
              onCardUnhover={() => {}}
              onFavoriteClick={() => {}}
              cardClass="cities__place-card"
              imageClass="cities__image-wrapper"
              styleObject={{}}
            />
          </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
