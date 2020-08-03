import {SET_SENDING_COMMENT, AppActionTypes} from '../../action-types/action-types';

const sendingCommentReducer = (state = false, action: AppActionTypes): boolean => {
  switch (action.type) {
    case SET_SENDING_COMMENT: {
      return action.isSending;
    }
  }
  return state;
};

export default sendingCommentReducer;
