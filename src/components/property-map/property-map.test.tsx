import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PropertyMap} from './property-map';
import offers from '../../mock/test-offers';
import cities from '../../mock/test-cities';


Enzyme.configure({
  adapter: new Adapter()
});

describe(`PropertyMap`, () => {
  it(`should render correctly`, () => {
    const nearPlaces = [offers[2], offers[1], offers[3]];
    const wrapper = shallow(
        <PropertyMap currentPlace={offers[0]} places={nearPlaces} city={cities[1]} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
