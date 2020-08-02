import NameSpace from '../name-space';
import {IStore} from '../../../types/types';

export const getAuthStatus = (state: IStore) => {
  return state[NameSpace.AUTH_STATUS];
};
