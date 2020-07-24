import {LOAD_FAVORITE_OFFERS, REPLACE_OFFER} from '../../action-types/action-types';

const favoriteOffersReducer = (state = [], action) => {
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
