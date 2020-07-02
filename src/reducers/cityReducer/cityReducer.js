import {CHANGE_CITY} from '../../actions/actions';

function cityReducer(state, action) {
  switch (action.type) {
    case CHANGE_CITY: {
      return action.city;
    }
    default: {
      return state;
    }
  }
}

export default cityReducer;
