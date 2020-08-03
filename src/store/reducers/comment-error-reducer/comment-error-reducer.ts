import {SET_COMMENT_ERROR, AppActionTypes} from '../../action-types/action-types';

const commentErrorReducer = (state: null | Record<string, unknown> = null, action: AppActionTypes): null | Record<string, unknown> => {
  switch (action.type) {
    case SET_COMMENT_ERROR: {
      return action.error;
    }
  }
  return state;
};

export default commentErrorReducer;
