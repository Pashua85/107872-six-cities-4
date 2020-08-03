import {LOAD_OFFERS_NEARBY, REPLACE_OFFER, DELETE_OFFERS_NEARBY, AppActionTypes} from '../../action-types/action-types';
import {IOffer} from '../../../types/types';

const offersNearbyReducer = (state: IOffer[] = [], action: AppActionTypes) => {
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
    case DELETE_OFFERS_NEARBY: {
      return [];
    }
  }
  return state;
};

export default offersNearbyReducer;
