import {LOAD_COMMENTS, DELETE_COMMENTS, AppActionTypes} from '../../action-types/action-types';
import {IReview} from '../../../types/types';

const commentsReducer = (state: IReview[] = [], action: AppActionTypes): IReview[] => {
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
