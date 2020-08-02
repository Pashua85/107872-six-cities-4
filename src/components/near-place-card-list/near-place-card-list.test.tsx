import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {NearPlaceCardList} from './near-place-card-list';
import places from '../../mock/test-places';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`NearPlaceCardList`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <NearPlaceCardList places={places} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
