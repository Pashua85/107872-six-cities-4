import commentsReducer from './comments-reducer';
import reviews from '../../../mock/test-reviews';

describe(`commentsReducer`, () => {
  test(`When it is called with [] as state and object { type: "LOAD_COMMENTS", commens: reviews} as action, it should return [reviews]`, () => {
    const result = commentsReducer([], {
      type: `LOAD_COMMENTS`,
      comments: reviews
    });
    expect(result).toEqual(reviews);
  });

  test(`When it is called with [] as state and object { type: "DELETE_COMMENTS"} as action, it should return []`, () => {
    const result = commentsReducer(reviews, {
      type: `DELETE_COMMENTS`
    });
    expect(result).toEqual([]);
  });
});
