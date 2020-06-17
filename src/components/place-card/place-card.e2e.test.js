import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';
import places from '../../mock/test-offers';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`PlaceCard`, () => {
  test(`When user hovers the card with mouse, onMouseEnter should be called with place object from its props as a parameter`, () => {
    const onMouseEnter = jest.fn();
    const wrapper = shallow(
        <PlaceCard
          place={places[3]}
          onMouseEnter={onMouseEnter}
          onMouseLeave={() => {}}
        />
    );
    wrapper
      .find(`.place-card`)
      .simulate(`mouseEnter`);
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseEnter).toHaveBeenCalledWith(places[3]);
  });
});

