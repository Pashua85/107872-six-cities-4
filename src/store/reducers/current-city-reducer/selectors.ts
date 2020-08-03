import NameSpace from '../name-space';
import {IStore, ICity} from '../../../types/types';

export const getCurrentCity = (state: IStore): ICity => {
  return state[NameSpace.CURRENT_CITY];
};
