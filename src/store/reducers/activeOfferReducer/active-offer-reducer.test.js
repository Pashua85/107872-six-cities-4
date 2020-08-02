import activeOfferReducer from './active-offer-reducer';
import offers from '../../../mock/test-offers';

describe(`activeOfferReducer`, () => {
  test(`When it is called with offer-1-object as state and object { type: "SET_ACTIVE_OFFER", offer: offer-2-object }, it should return offer-2-object`, () => {
    const offer1 = offers[0];
    const offer2 = offers[1];
    const result = activeOfferReducer(offer1, {
      type: `SET_ACTIVE_OFFER`,
      offer: offer2
    });
    expect(result).toEqual(offer2);
  });

  test(`When it is called with offer-1-object as state and object { type: "SET_SOME_OFFER", offer: offer-2-object }, it should return offer-1-object`, () => {
    const offer1 = offers[0];
    const offer2 = offers[1];
    const result = activeOfferReducer(offer1, {
      type: `SET_SOME_OFFER`,
      offer: offer2
    });
    expect(result).toEqual(offer1);
  });
});
