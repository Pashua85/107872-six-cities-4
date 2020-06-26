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
    const wrapper = shallow(
        <PropertyMap place={places[0]} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
