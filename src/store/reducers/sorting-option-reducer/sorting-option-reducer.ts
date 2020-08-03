import {SET_SORTING_OPTION, AppActionTypes} from '../../action-types/action-types';
import {SortingOption} from '../../../types/types';

function sortingOptionReducer(state: SortingOption = `Popular`, action: AppActionTypes): SortingOption {
  switch (action.type) {
    case SET_SORTING_OPTION: {
      return action.option;
    }
  }
  return state;
}

export default sortingOptionReducer;
