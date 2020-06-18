import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import Main from './main';
import places from '../../mock/test-offers';

describe(`Main`, () => {
  it(`should render correctly with four places`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <Main places={places} placeAmount={214} onTitleClick={() => {}} />
          </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render correctly with two places`, () => {
    const newPlaces = [places[0], places[2]];
    const tree = renderer
      .create(
          <MemoryRouter>
            <Main places={newPlaces} placeAmount={23} onTitleClick={() => {}} />
          </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
