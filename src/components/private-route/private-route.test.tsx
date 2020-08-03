import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PrivateRoute} from './private-route';
import {Favorites} from '../favorites/favorites';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`PrivateRoute`, () => {
  it(`should render correctly for authenticated user`, () => {
    const wrapper = shallow(<PrivateRoute exact path="/favorites" component={Favorites} redirectPath="/login" authStatus="AUTH" />);
    expect(wrapper).toMatchSnapshot();
  });

  it(`should render correctly for nonauthenticated guest`, () => {
    const wrapper = shallow(<PrivateRoute exact path="/favorites" component={Favorites} redirectPath="/login" authStatus="NO_AUTH" />);
    expect(wrapper).toMatchSnapshot();
  });
});