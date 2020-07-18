import ActionCreator from '../../action-creator/action-creator';

const CommentsOperation = {
  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadComments(response.data));
      });
  },
  sendComment: (id, commentData) => (dispatch, getState, api) => {
    return api.post(`/comments/${id}`, {
      comment: commentData.comment,
      rating: commentData.rating
    })
      .then((response) => {
        dispatch(ActionCreator.setCommentError(null));
        dispatch(ActionCreator.loadComments(response.data));
        dispatch(ActionCreator.setSendingComment(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.setCommentError(err.response));
        dispatch(ActionCreator.setSendingComment(false));
      });
  }
};

export default CommentsOperation;
