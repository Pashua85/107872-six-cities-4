import ActionCreator from '../../action-creator/action-creator';

const CommentsOperation = {
  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadComments(response.data));
      });
  }
};

export default CommentsOperation;
