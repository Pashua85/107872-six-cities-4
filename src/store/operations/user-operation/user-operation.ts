import ActionCreator from '../../action-creator/action-creator';
import {AUTH_STATUS} from '../../reducers/auth-status-reducer/auth-status-reducer';
import {IUser} from '../../../types/types';

interface ILoginResponse {
  data: IUser
}

const UserOperation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response: ILoginResponse) => {
        dispatch(ActionCreator.setUser(response.data));
        dispatch(ActionCreator.requireAuthorization(AUTH_STATUS.AUTH));
      })
      .catch((err: object) => {
        throw err;
      });
  },
  login: (authData: {email: string, password: string}) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password
    })
      .then((response: ILoginResponse) => {
        dispatch(ActionCreator.setUser(response.data));
        dispatch(ActionCreator.requireAuthorization(AUTH_STATUS.AUTH));
      })
      .catch((err: object) => {
        throw err;
      });
  }
};

export default UserOperation;
