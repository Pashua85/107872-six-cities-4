import {SET_CURRENT_CITY} from '../../action-types/action-types';

function cityReducer(state = `Amsterdam`, action) {
  switch (action.type) {
    case SET_CURRENT_CITY: {
      return action.city;
    }
    default: {
      return state;
    }
  }
}

export default cityReducer;
