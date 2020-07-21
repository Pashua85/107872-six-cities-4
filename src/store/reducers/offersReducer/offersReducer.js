import {LOAD_OFFERS, REPLACE_OFFER} from '../../../store/action-types/action-types';

function offersReducer(state = [], action) {
  switch (action.type) {
    case LOAD_OFFERS: {
      return action.payload;
    }
    case REPLACE_OFFER: {
      return state.map((of) => {
        if (of.id === action.offer.id) {
          return action.offer;
        } else {
          return of;
        }
      });
    }
  }
  return state;
}

export default offersReducer;
