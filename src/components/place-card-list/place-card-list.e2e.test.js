import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from 'react-router-dom';
import PlaceCardList from './place-card-list';
import places from '../../mock/test-offers';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`PlaceCardList`, () => {
  test(`When user hovers one of the cards from list, its activeCard value in state should change from null to place object from this card`, () => {
    const wrapper = mount(
        <MemoryRouter>
          <PlaceCardList places={places} className="cities__places-list" />
        </MemoryRouter>
    );
    expect(wrapper.find(PlaceCardList).instance().state.activeCard).toBe(null);
    wrapper
      .find(`.place-card`)
      .at(2)
      .simulate(`mouseEnter`);
    expect(wrapper.find(PlaceCardList).instance().state.activeCard).toBe(places[2]);
  });

  test(`When user stops hover one of the cards from list, its activeCard value in state should return from place object to null`, () => {
    const wrapper = mount(
        <MemoryRouter>
          <PlaceCardList places={places} className="cities__places-list" />
        </MemoryRouter>
    );
    wrapper
      .find(`.place-card`)
      .at(2)
      .simulate(`mouseEnter`);
    expect(wrapper.find(PlaceCardList).instance().state.activeCard).toBe(places[2]);
    wrapper
      .find(`.place-card`)
      .at(2)
      .simulate(`mouseLeave`);
    expect(wrapper.find(PlaceCardList).instance().state.activeCard).toBe(null);
  });
});
