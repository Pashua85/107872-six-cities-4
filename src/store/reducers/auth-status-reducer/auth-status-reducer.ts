import {REQUIRE_AUTHORIZATION, AppActionTypes} from '../../action-types/action-types';
import {Status} from '../../../types/types';

const AUTH: Status = `AUTH`;
const NO_AUTH: Status = `NO_AUTH`

export const AUTH_STATUS = {
  AUTH,
  NO_AUTH
};

const authStatusReducer = (state: Status = AUTH_STATUS.NO_AUTH, action: AppActionTypes) => {
  switch (action.type) {
    case REQUIRE_AUTHORIZATION: {
      return action.payload;
    }
  }
  return state;
};

export default authStatusReducer;
