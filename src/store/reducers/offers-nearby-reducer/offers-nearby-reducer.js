import {LOAD_OFFERS_NEARBY} from '../../action-types/action-types';

const offersNearbyReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_OFFERS_NEARBY: {
      return action.offers;
    }
  }
  return state;
};

export default offersNearbyReducer;
