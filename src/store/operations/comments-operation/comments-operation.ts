import ActionCreator from '../../action-creator/action-creator';
import {IReview} from '../../../types/types';

interface ICommentsResponse {
  data: IReview[]
}

interface IError {
  response: Record<string, unknown>
}

const CommentsOperation = {
  loadComments: (id: string) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response: ICommentsResponse) => {
        dispatch(ActionCreator.loadComments(response.data));
      });
  },
  sendComment: (id: string, commentData: {comment: string, rating: number}) => (dispatch, getState, api) => {
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
