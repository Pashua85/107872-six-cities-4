import NameSpace from '../name-space';
import {IStore, ICity} from '../../../types/types';

export const getCities = (state: IStore): ICity[] => {
  return state[NameSpace.CITIES];
};
