import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';
import places from '../../mock/test-offers';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`PlaceCard`, () => {
  test(`When user hovers the card with mouse, onCardHover should be called with place object from its props as a parameter`, () => {
    const onCardHover = jest.fn();
    const wrapper = shallow(
        <PlaceCard
          place={places[3]}
          onCardHover={onCardHover}
          onCardUnhover={() => {}}
        />
    );
    wrapper
      .find(`.place-card`)
      .simulate(`mouseEnter`);
    expect(onCardHover).toHaveBeenCalledTimes(1);
    expect(onCardHover).toHaveBeenCalledWith(places[3]);
  });
});

