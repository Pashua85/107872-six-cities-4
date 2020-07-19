import commentErrorReducer from './comment-error-reducer';

describe(`commentErrorReducer`, () => {
  test(`When it is called with null as state and object { type: "SET_COMMENT_ERROR", error: {status: 404}} as action, it should return { status: 404 }`, () => {
    const error = {status: 404};
    const result = commentErrorReducer(null, {
      type: `SET_COMMENT_ERROR`,
      error
    });
    expect(result).toEqual(error);
  });
  test(`When it is called with {status: 404} as state and object { type: "SET_COMMENT_ERROR", error: null} as action, it should return null`, () => {
    const result = commentErrorReducer({status: 404}, {
      type: `SET_COMMENT_ERROR`,
      error: null
    });
    expect(result).toEqual(null);
  });
  test(`When it is called with null as state and object { type: "SET_OTHER_ERROR", error: {status: 404}} as action, it should return null`, () => {
    const error = {status: 404};
    const result = commentErrorReducer(null, {
      type: `SET_OTHER_ERROR`,
      error
    });
    expect(result).toEqual(null);
  });
});
