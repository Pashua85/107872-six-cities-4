import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FavoritesPlaceCard from './favorites-place-card';
import places from '../../mock/test-offers';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`FavoritesPlaceCard`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <FavoritesPlaceCard
          key={2}
          place={places[0]}
          onCardHover={() => {}}
          onCardUnhover={() => {}}
        />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
