import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PlacesSorting} from './places-sorting';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`PlacesSorting`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(<PlacesSorting onOptionClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
