import {LOAD_OFFERS} from '../../action-types/action-types';
import offersReducer from './offers-reducer';
import offers from '../../../mock/test-offers';

describe(`offersReducer`, () => {
  test(`When it is called with [] as state and object {type: ${LOAD_OFFERS}, payload: offers} as action, it should return offers`, () => {
    const result = offersReducer([], {
      type: LOAD_OFFERS,
      payload: offers
    });
    expect(result).toEqual(offers);
  });

  test(`When it is called with offers as state and object {type: "REPLACE_OFFER", offer: newOffer} as action, it should return array with newOffer`, () => {
    const newOffer = Object.assign({}, offers[0]);
    newOffer.is_favorite = false;
    const expectedResult = offers.slice();
    expectedResult.splice(0, 1, newOffer);
    const result = offersReducer(offers, {
      type: `REPLACE_OFFER`,
      offer: newOffer
    });
    expect(result).toEqual(expectedResult);
  });
});
