import offersNearbyReducer from './offers-nearby-reducer';
import offers from '../../../mock/test-places';

describe(`offersNearbyReducer`, () => {
  test(`When it is called with [] as state and object { type: "LOAD_OFFERS_NEARBY, offers: offers} as action, it should return [offers]`, () => {
    const result = offersNearbyReducer([], {
      type: `LOAD_OFFERS_NEARBY`,
      offers
    });
    expect(result).toEqual(offers);
  });

  test(`When it is called with [] as state and object { type: "LOAD_OFFERS_FARAWAY, offers: offers} as action, it should return []`, () => {
    const result = offersNearbyReducer([], {
      type: `LOAD_OFFERS_FARAWAY`,
      offers
    });
    expect(result).toEqual([]);
  });
});
