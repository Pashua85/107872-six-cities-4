import {SET_USER} from '../../action-types/action-types';
import userReducer from './user-reducer';

describe(`userReducer`, () => {
  const user0 = {
    id: 2,
    email: `email@1`,
    name: `user0`,
    avatar_url: `url1`,
    is_pro: false
  };
  const user1 = {
    id: 3,
    email: `email@3`,
    name: `user1`,
    avatar_url: `url2`,
    is_pro: false
  };

  test(`When it is called with user-object-0 as state and objec {type: ${SET_USER}, user: user-object-1}, it should return user-object-1`, () => {
    const result = userReducer(user0, {
      type: SET_USER,
      user: user1
    });
    expect(result).toEqual(user1);
  });
});
