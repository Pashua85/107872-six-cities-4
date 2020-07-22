import {LOAD_FAVORITE_OFFERS} from '../../action-types/action-types';

const favoriteOffersReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_FAVORITE_OFFERS: {
      return action.offers;
    }
  }
  return state;
};

export default favoriteOffersReducer;
