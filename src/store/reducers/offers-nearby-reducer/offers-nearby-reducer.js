import {LOAD_OFFERS_NEARBY, REPLACE_OFFER} from '../../action-types/action-types';

const offersNearbyReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_OFFERS_NEARBY: {
      return action.offers;
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
};

export default offersNearbyReducer;
