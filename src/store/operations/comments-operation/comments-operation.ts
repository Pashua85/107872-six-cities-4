import ActionCreator from '../../action-creator/action-creator';
import {IReview} from '../../../types/types';
import {AxiosInstance} from 'axios';
import {AppActionTypes} from '../../action-types/action-types';

interface ICommentsResponse {
  data: IReview[]
}

interface IError {
  response: Record<string, unknown>
}

const CommentsOperation = {
  loadComments: (id: string) => (dispatch: (action: AppActionTypes) => void, getState: () => void, api: AxiosInstance): Promise<void>=> {
    return api.get(`/comments/${id}`)
      .then((response: ICommentsResponse) => {
        dispatch(ActionCreator.loadComments(response.data));
      });
  },
  sendComment: (id: string, commentData: {comment: string, rating: number}) =>
    (dispatch: (action: AppActionTypes) => void, getState: () => void, api: AxiosInstance): Promise<void> => {
      return api.post(`/comments/${id}`, {
        comment: commentData.comment,
        rating: commentData.rating
      })
      .then((response: ICommentsResponse) => {
        dispatch(ActionCreator.setCommentError(null));
        dispatch(ActionCreator.loadComments(response.data));
        dispatch(ActionCreator.setSendingComment(false));
      })
      .catch((err: IError) => {
        dispatch(ActionCreator.setCommentError(err.response));
        dispatch(ActionCreator.setSendingComment(false));
      });
    }
};

export default CommentsOperation;
