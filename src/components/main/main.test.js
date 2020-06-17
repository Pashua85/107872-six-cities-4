import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import places from '../../mock/test-offers';

describe(`Main`, () => {
  it(`should render correctly with four places`, () => {
    const tree = renderer
      .create(<Main places={places} placeAmount={214} onTitleClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  // it(`should render correctly with three places`, () => {
  //   const places = [`Little house`, `Luxirous appartment`, `Tiny room`];
  //   const tree = renderer
  //     .create(<Main places={places} placeAmount={115} onTitleClick={() => {}} />)
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
