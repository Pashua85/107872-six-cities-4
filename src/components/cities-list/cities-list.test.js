import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CitiesList} from './cities-list';


Enzyme.configure({
  adapter: new Adapter()
});

const cityNames = [`London`, `Pitsburg`, `Washington`, `Moscow`, `Philadelphia`, `Yerevan`];

describe(`CitesList`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <CitiesList city={`Washington`} cityNames={cityNames} onClick={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
