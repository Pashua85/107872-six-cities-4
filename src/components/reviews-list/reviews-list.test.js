import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewsList from './reviews-list';
import places from '../../mock/test-offers';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Review`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(<ReviewsList reviews={places[0].reviews} />);
    expect(wrapper).toMatchSnapshot();
  });
});
