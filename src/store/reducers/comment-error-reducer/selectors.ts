import NameSpace from '../name-space';
import {IStore} from '../../../types/types';

export const getCommentError = (state: IStore) => {
  return state[NameSpace.COMMENT_ERROR];
};
