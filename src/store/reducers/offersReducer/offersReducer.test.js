import {LOAD_OFFERS, SET_CURRENT_CITY} from '../../action-types/action-types';
import offersReducer from './offersReducer';
import offers from '../../../mock/test-places';

describe(`offersReducer`, () => {
  test(`When it is called with [] as state and object {type: ${LOAD_OFFERS}, payload: offers}, it should return offers`, () => {
    const result = offersReducer([], {
      type: LOAD_OFFERS,
      payload: offers
    });
    expect(result).toEqual(offers);
  });

  test(`When it is called with [] as state and object {type: ${SET_CURRENT_CITY}, payload: offers}, it should return []`, () => {
    const result = offersReducer([], {
      type: SET_CURRENT_CITY,
      payload: offers
    });
    expect(result).toEqual([]);
  });
});
