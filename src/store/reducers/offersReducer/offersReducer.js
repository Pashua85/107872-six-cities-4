import {LOAD_OFFERS} from '../../../store/action-types/action-types';

function offersReducer(state = [], action) {
  switch (action.type) {
    case LOAD_OFFERS: {
      return action.payload;
    }
  }
  return state;
}

export default offersReducer;
