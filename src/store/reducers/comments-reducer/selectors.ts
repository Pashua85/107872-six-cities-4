import NameSpace from '../name-space';
import {IStore} from '../../../types/types';

export const getComments = (state: IStore) => {
  return state[NameSpace.COMMENTS];
};
