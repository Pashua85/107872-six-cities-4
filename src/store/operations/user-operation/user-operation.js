import ActionCreator from '../../action-creator/action-creator';
import {AUTH_STATUS} from '../../reducers/authStatusReducer/authStatusReducer';

const UserOperation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AUTH_STATUS.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password
    })
      .then((response) => {
        dispatch(ActionCreator.setUser(response.data));
        dispatch(ActionCreator.requireAuthorization(AUTH_STATUS.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  }
};

export default UserOperation;
