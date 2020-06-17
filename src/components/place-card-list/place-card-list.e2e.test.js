import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCardList from './place-card-list';
import places from '../../mock/test-offers';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`PlaceCardList`, () => {
  test(`When user hovers one of the cards from list, its activeCard value in state should change from null to place object from this card`, () => {
    const wrapper = mount(
        <PlaceCardList places={places} />
    );
    expect(wrapper.state().activeCard).toBe(null);
    wrapper
      .find(`.place-card`)
      .at(2)
      .simulate(`mouseEnter`);
    expect(wrapper.state().activeCard).toEqual(places[2]);
  });

  test(`When user stops hover one of the cards from list, its activeCard value in state should return from place object to null`, () => {
    const wrapper = mount(
        <PlaceCardList places={places} />
    );
    wrapper
      .find(`.place-card`)
      .at(2)
      .simulate(`mouseEnter`);
    expect(wrapper.state().activeCard).toEqual(places[2]);
    wrapper
      .find(`.place-card`)
      .at(2)
      .simulate(`mouseLeave`);
    expect(wrapper.state().activeCard).toBe(null);
  });
});
