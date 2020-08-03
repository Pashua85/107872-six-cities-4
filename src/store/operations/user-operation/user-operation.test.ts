import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../api';
import UserOperation from './user-operation';
import {REQUIRE_AUTHORIZATION, SET_USER} from '../../action-types/action-types';
import user from '../../../mock/test-user';

const api = createAPI(() => {});

describe(`UserOperation`, () => {
  it(`should make a correct get request to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authChecker = UserOperation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, user);

    return authChecker(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER,
          user
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: REQUIRE_AUTHORIZATION,
          payload: `AUTH`
        });
      });
  });

  it(`should make a correct post request to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const userLogger = UserOperation.login({email: `test@test.ru`, password: `1234`});

    apiMock
      .onPost(`/login`)
      .reply(200, user);

    return userLogger(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER,
          user
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: REQUIRE_AUTHORIZATION,
          payload: `AUTH`
        });
      });
  });
});
