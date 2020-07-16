import {LOAD_COMMENTS} from '../../action-types/action-types';

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_COMMENTS: {
      return action.comments;
    }
  }
  return state;
};

export default commentsReducer;
