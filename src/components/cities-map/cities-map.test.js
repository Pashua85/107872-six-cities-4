import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CitiesMap from './cities-map';
import places from '../../mock/test-offers';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`CitiesMap`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <CitiesMap place={places[0]} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
