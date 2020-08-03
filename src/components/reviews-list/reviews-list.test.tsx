import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewsList from './reviews-list';
import reviews from '../../mock/test-reviews';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Review`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(<ReviewsList reviews={reviews} />);
    expect(wrapper).toMatchSnapshot();
  });
});
