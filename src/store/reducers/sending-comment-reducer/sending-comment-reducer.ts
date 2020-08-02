import {SET_SENDING_COMMENT, AppActionTypes} from '../../action-types/action-types';

const sendingCommentReducer = (state: boolean = false, action: AppActionTypes) => {
  switch (action.type) {
    case SET_SENDING_COMMENT: {
      return action.isSending;
    }
  }
  return state;
};

export default sendingCommentReducer;
