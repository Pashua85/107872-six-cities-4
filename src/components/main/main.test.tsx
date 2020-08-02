import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Main} from './main';
import places from '../../mock/test-places';
import cities from '../../mock/test-cities';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Main`, () => {
  it(`should render correctly with four places`, () => {
    const wrapper = shallow(
        <Main places={places} city={cities[1]} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it(`should render correctly with two places`, () => {
    const newPlaces = [places[0], places[2]];
    const wrapper = shallow(
        <Main places={newPlaces} city={cities[0]} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
