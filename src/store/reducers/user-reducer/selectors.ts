import NameSpace from '../name-space';
import {IStore, IUser} from '../../../types/types';

export const getUser = (state: IStore): null | IUser => {
  return state[NameSpace.USER];
};
