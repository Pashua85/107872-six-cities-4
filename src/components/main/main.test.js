import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

describe(`Main`, () => {
  it(`should render correctly with two places`, () => {
    const places = [`Some cozy place`, `Another comfortable room`];
    const tree = renderer
      .create(<Main places={places} placeAmount={214} onTitleClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`should render correctly with three places`, () => {
    const places = [`Little house`, `Luxirous appartment`, `Tiny room`];
    const tree = renderer
      .create(<Main places={places} placeAmount={115} onTitleClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
