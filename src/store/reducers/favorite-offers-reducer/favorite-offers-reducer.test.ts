import favoriteOffersReducer from './favorite-offers-reducer';
import favoriteOffers from '../../../mock/test-favorite-offers';
import {LOAD_FAVORITE_OFFERS, REPLACE_OFFER} from '../../action-types/action-types';

describe(`favoriteOffersReducer`, () => {
  test(`When it is called with [] as state and object { type: "LOAD_FAVORITE_OFFERS", offers: favoriteOffers} as action, it should return citiesWitOffers array`, () => {
    const result = favoriteOffersReducer([], {
      type: LOAD_FAVORITE_OFFERS,
      offers: favoriteOffers
    })
    expect(result).toEqual(favoriteOffers);
  });

  test(`When it is called with favotiesOffers as state and object { type: "REPLACE_OFFER", offer: favoritesOffers[0]} as action, it should return array without favoritesOffers[0]`, () => {
    const initialState = favoriteOffers.slice();
    const expectResult = favoriteOffers.slice(1);
    const result = favoriteOffersReducer(initialState, {
      type: REPLACE_OFFER,
      offer: favoriteOffers[0]
    });
    expect(result).toEqual(expectResult);
  });
});
