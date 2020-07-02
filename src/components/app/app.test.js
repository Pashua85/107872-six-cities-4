import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from './app';
import places from '../../mock/test-offers';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`App`, () => {
  it(`renderer correctly`, () => {
    const wrapper = shallow(
        <App places={places} placeAmount={14} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
