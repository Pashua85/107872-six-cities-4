import {REQUIRE_AUTHORIZATION} from '../../action-types/action-types';
import authStatusReducer from './auth-status-reducer';

describe(`authStatusReducer`, () => {
  test(`When it is called with "NO_AUTH" as state and object { type: ${REQUIRE_AUTHORIZATION}, payload: "AUTH" } as action, it should return "AUTH"`, () => {
    const result = authStatusReducer(`NO_AUTH`, {
      type: REQUIRE_AUTHORIZATION,
      payload: `AUTH`
    });
    expect(result).toBe(`AUTH`);
  });
});
