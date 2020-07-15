import {SET_USER} from '../../action-types/action-types';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER: {
      return action.user;
    }
  }
  return state;
};

export default userReducer;
