import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Header} from './header';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Header`, () => {
  it(`should render correctly for guest`, () => {
    const wrapper = shallow(
        <Header authStatus={`NO_AUTH`} user={{email: `email`}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});


