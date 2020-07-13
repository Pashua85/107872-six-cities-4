import {SET_SORTING_OPTION} from '../../action-types/action-types';

function sortingOptionReducer(state = `Popular`, action) {
  switch (action.type) {
    case SET_SORTING_OPTION: {
      return action.option;
    }
  }
  return state;
}

export default sortingOptionReducer;
