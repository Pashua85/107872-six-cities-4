import NameSpace from '../name-space';
import {IStore, Status} from '../../../types/types';

export const getAuthStatus = (state: IStore): Status => {
  return state[NameSpace.AUTH_STATUS];
};
