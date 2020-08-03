import NameSpace from '../name-space';
import {IStore} from '../../../types/types';

export const getCommentError = (state: IStore): null | Record<string, unknown> => {
  return state[NameSpace.COMMENT_ERROR];
};
