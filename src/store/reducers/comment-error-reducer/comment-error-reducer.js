import {SET_COMMENT_ERROR} from '../../action-types/action-types';

const commentErrorReducer = (state = null, action) => {
  switch (action.type) {
    case SET_COMMENT_ERROR: {
      return action.error;
    }
  }
  return state;
};

export default commentErrorReducer;
