import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropertyMap from './property-map';
import places from '../../mock/test-offers';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`PropertyMap`, () => {
  it(`should render correctly`, () => {
    const nearPlaces = [places[2], places[1], places[3]];
    const wrapper = shallow(
        <PropertyMap currentPlace={places[0]} places={nearPlaces}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
