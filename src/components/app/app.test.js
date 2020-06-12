import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

describe(`App`, () => {
  it(`renderer correctly`, () => {
    const tree = renderer
      .create(<App places={[`Place one`, `Place two`]} placeAmount={14} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
