import {LOAD_COMMENTS, DELETE_COMMENTS} from '../../action-types/action-types';

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_COMMENTS: {
      return action.comments;
    }
    case DELETE_COMMENTS: {
      return [];
    }
  }
  return state;
};

export default commentsReducer;
