import NameSpace from '../name-space';
import {IStore} from '../../../types/types';

export const getUser = (state: IStore) => {
  return state[NameSpace.USER];
};
