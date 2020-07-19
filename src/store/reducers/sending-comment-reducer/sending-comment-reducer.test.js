import sendingCommentReducer from './sending-comment-reducer';

describe(`sendingCommentReducer`, () => {
  test(`When it is called with false as state and object { type: "SET_SENDING_COMMENT", isSending: true} as action, it should return true`, () => {
    const result = sendingCommentReducer(false, {
      type: `SET_SENDING_COMMENT`,
      isSending: true
    });
    expect(result).toEqual(true);
  });

  test(`When it is called with false as state and object { type: "SET_SENDING_THING", isSending: true} as action, it should return false`, () => {
    const result = sendingCommentReducer(false, {
      type: `SET_SENDING_THING`,
      isSending: true
    });
    expect(result).toEqual(false);
  });
});
