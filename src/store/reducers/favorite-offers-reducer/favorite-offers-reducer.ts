import {LOAD_FAVORITE_OFFERS, REPLACE_OFFER, AppActionTypes} from '../../action-types/action-types';
import {IOffer} from '../../../types/types';

const favoriteOffersReducer = (state: IOffer[] = [], action: AppActionTypes) => {
  switch (action.type) {
    case LOAD_FAVORITE_OFFERS: {
      return action.offers;
    }
    case REPLACE_OFFER: {
      const newState = state.slice();
      return newState.filter((of) => of.id !== action.offer.id);
    }
  }
  return state;
};

export default favoriteOffersReducer;
