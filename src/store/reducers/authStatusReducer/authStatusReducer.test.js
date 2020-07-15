import {REQUIRE_AUTHORIZATION} from '../../action-types/action-types';
import authStatusReducer from './authStatusReducer';

describe(`authStatusReducer`, () => {
  test(`When it is called with "NO_AUTH" as state and object { type: ${REQUIRE_AUTHORIZATION}, payload: "AUTH" } as action, it should return "AUTH"`, () => {
    const result = authStatusReducer(`NO_AUTH`, {
      type: REQUIRE_AUTHORIZATION,
      payload: `AUTH`
    });
    expect(result).toBe(`AUTH`);
  });

  test(`When it is called with "NO_AUTH" as state and object { type: "SOME_ACTION", payload: "AUTH" } as action, it should return "NO_AUTH"`, () => {
    const result = authStatusReducer(`NO_AUTH`, {
      type: `SOME_ACTION`,
      payload: `AUTH`
    });
    expect(result).toBe(`NO_AUTH`);
  });
});
