import {SET_USER, AppActionTypes} from '../../action-types/action-types';
import {IUser} from '../../../types/types';

const userReducer = (state: null | IUser = null, action: AppActionTypes) => {
  switch (action.type) {
    case SET_USER: {
      return action.user;
    }
  }
  return state;
};

export default userReducer;
