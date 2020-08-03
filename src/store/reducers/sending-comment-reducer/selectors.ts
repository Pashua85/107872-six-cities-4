import NameSpace from '../name-space';
import {IStore} from '../../../types/types';

export const getSendingComment = (state: IStore): boolean => {
  return state[NameSpace.SENDING_COMMENT];
};
