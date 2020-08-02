import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CitiesMap} from './cities-map';
import places from '../../mock/test-places';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`CitiesMap`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <CitiesMap
          places={places}
          activePlace={places[0]}
          currentCity={places[0].city}
        />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
