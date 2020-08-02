import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Favorites} from './favorites';
import citiesWithFavoriteOffers from '../../mock/test-cities-with-offers';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Favorites`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <Favorites
          citiesWithFavoriteOffers={citiesWithFavoriteOffers}
          onComponentMount={() => {}}
        />
    );
    expect(wrapper).toMatchSnapshot();
  });
});