import commentsReducer from './commentsReducer';
import reviews from '../../../mock/test-reviews';

describe(`commentsReducer`, () => {
  test(`When it is called with [] as state and object { type: "LOAD_COMMENTS", commens: reviews} as action, it should return [reviews]`, () => {
    const result = commentsReducer([], {
      type: `LOAD_COMMENTS`,
      comments: reviews
    });
    expect(result).toEqual(reviews);
  });

  test(`When it is called with [] as state and object { type: "LOAD_THINGS", commens: reviews} as action, it should return []`, () => {
    const result = commentsReducer([], {
      type: `LOAD_THINGS`,
      comments: reviews
    });
    expect(result).toEqual([]);
  });
});
