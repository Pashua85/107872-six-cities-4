import NameSpace from '../name-space';
import {IStore} from '../../../types/types';

export const getCurrentCity = (state: IStore) => {
  return state[NameSpace.CURRENT_CITY];
};
