import {SET_COMMENT_ERROR, AppActionTypes} from '../../action-types/action-types';

const commentErrorReducer = (state: null | object = null, action: AppActionTypes) => {
  switch (action.type) {
    case SET_COMMENT_ERROR: {
      return action.error;
    }
  }
  return state;
};

export default commentErrorReducer;
