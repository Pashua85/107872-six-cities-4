import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from './review';
import places from '../../mock/test-offers';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Review`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(<Review review={places[0].reviews[0]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
