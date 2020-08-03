import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../api';
import CommentsOperation from './comments-operation';
import {LOAD_COMMENTS, SET_SENDING_COMMENT, SET_COMMENT_ERROR} from '../../action-types/action-types';
import reviews from '../../../mock/test-reviews';

const api = createAPI(() => {});

describe(`CommentsOperation`, () => {
  it(`should make a correct API call to /comments/:hoteId`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = CommentsOperation.loadComments(`1`);

    apiMock
      .onGet(`/comments/1`)
      .reply(200, reviews);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: LOAD_COMMENTS,
          comments: reviews
        });
      });
  });

  it(`should make a correnct API post call to /comments/:hotelId`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentData = {
      comment: `commentText`,
      rating: 4
    };
    const commentCourier = CommentsOperation.sendComment(`1`, commentData);

    apiMock
        .onPost(`/comments/1`)
        .reply(200, reviews);

    return commentCourier(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenCalledWith({
          type: LOAD_COMMENTS,
          comments: reviews
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_COMMENT_ERROR,
          error: null
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_SENDING_COMMENT,
          isSending: false
        });
      });
  });
});
