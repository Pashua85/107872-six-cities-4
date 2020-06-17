import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import places from '../../mock/test-offers';

describe(`App`, () => {
  it(`renderer correctly`, () => {
    const tree = renderer
      .create(<App places={places} placeAmount={14} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
