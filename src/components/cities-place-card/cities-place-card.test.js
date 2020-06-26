import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CitiesPlaceCard from './cities-place-card';
import places from '../../mock/test-offers';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`CititesPlaceCard`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <CitiesPlaceCard place={places[1]} onMouseEnter={() => {}} onMouseLeave={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
