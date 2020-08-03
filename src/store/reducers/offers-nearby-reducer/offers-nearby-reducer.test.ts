import offersNearbyReducer from './offers-nearby-reducer';
import offers from '../../../mock/test-offers';

describe(`offersNearbyReducer`, () => {
  test(`When it is called with [] as state and object { type: "LOAD_OFFERS_NEARBY, offers: offers} as action, it should return [offers]`, () => {
    const result = offersNearbyReducer([], {
      type: `LOAD_OFFERS_NEARBY`,
      offers
    });
    expect(result).toEqual(offers);
  });

  test(`When it is called with offers as state and object {type: "REPLACE_OFFER", offer: newOffer} as action, it should return array with newOffer`, () => {
    const newOffer = Object.assign({}, offers[0]);
    newOffer.is_favorite = false;
    const expectedResult = offers.slice();
    expectedResult.splice(0,1,newOffer);
    
    const result = offersNearbyReducer(offers, {
      type: `REPLACE_OFFER`,
      offer: newOffer
    });

    expect(result).toEqual(expectedResult);
  });

  test(`When it is called with offers as state and object { type: "DELETE_OFFERS_NEARBY, offers: offers} as action, it should return []`, () => {
    const result = offersNearbyReducer(offers, {
      type: `DELETE_OFFERS_NEARBY`,
    });
    expect(result).toEqual([]);
  });
});
