import ActionCreator from '../../action-creator/action-creator';
import {AUTH_STATUS} from '../../reducers/auth-status-reducer/auth-status-reducer';
import {IUser} from '../../../types/types';
import {AxiosInstance} from 'axios';
import {AppActionTypes} from '../../../store/action-types/action-types';

interface ILoginResponse {
  data: IUser
}

const UserOperation = {
  checkAuth: () => (dispatch: (action: AppActionTypes) => void, getState: () => void, api: AxiosInstance): Promise<void> => {
    return api.get(`/login`)
      .then((response: ILoginResponse) => {
        dispatch(ActionCreator.setUser(response.data));
        dispatch(ActionCreator.requireAuthorization(AUTH_STATUS.AUTH));
      })
      .catch((err: Record<string, unknown>) => {
        throw err;
      });
  },
  login: (authData: {email: string, password: string}) => (dispatch: (action: AppActionTypes) => void, getState: () => void, api: AxiosInstance): Promise<void> => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password
    })
      .then((response: ILoginResponse) => {
        dispatch(ActionCreator.setUser(response.data));
        dispatch(ActionCreator.requireAuthorization(AUTH_STATUS.AUTH));
      })
      .catch((err: Record<string, unknown>) => {
        throw err;
      });
  }
};

export default UserOperation;
