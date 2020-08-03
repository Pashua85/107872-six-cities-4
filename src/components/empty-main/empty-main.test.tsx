import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EmptyMain from './empty-main';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`EmptyMain`, () => {
  it(`should render correctly`, () => {
    const wrapper = mount(<EmptyMain />);
    expect(wrapper).toMatchSnapshot();
  });
});
