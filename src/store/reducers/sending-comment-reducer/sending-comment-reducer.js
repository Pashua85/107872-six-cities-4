import {SET_SENDING_COMMENT} from '../../action-types/action-types';

const sendingCommentReducer = (state = false, action) => {
  switch (action.type) {
    case SET_SENDING_COMMENT: {
      return action.isSending;
    }
  }
  return state;
};

export default sendingCommentReducer;
