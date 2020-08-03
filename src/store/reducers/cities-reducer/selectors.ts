import NameSpace from '../name-space';
import {IStore} from '../../../types/types';

export const getCities = (state: IStore) => {
  return state[NameSpace.CITIES];
};
