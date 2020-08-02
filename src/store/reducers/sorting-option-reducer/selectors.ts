import NameSpace from '../name-space';
import {IStore, SortingOption} from '../../../types/types';

export const getSortingOption = (state: IStore): SortingOption => {
  return state[NameSpace.SORTING_OPTION];
};
