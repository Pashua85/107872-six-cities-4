import {SET_USER} from '../../action-types/action-types';
import userReducer from './userReducer';

describe(`userReducer`, () => {
  const user0 = {
    name: `user0`
  };
  const user1 = {
    name: `user1`
  };

  test(`When it is called with user-object-0 as state and objec {type: ${SET_USER}, user: user-object-1}, it should return user-object-1`, () => {
    const result = userReducer(user0, {
      type: SET_USER,
      user: user1
    });
    expect(result).toEqual(user1);
  });

  test(`When it is called with user-object-0 as state and objec {type: "SOME_ACTION", user: user-object-1}, it should return user-object-0`, () => {
    const result = userReducer(user0, {
      type: `SOME_ACTION`,
      user: user1
    });
    expect(result).toEqual(user0);
  });
});
