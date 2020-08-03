import {LOAD_OFFERS, REPLACE_OFFER, AppActionTypes} from '../../action-types/action-types';
import {IOffer} from '../../../types/types';

function offersReducer(state: IOffer[] = [], action: AppActionTypes) {
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
