import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CitiesList} from './cities-list';
import cities from '../../mock/test-cities';


Enzyme.configure({
  adapter: new Adapter()
});

describe(`CitesList`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <CitiesList currentCity={cities[0]} cities={cities} onClick={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
