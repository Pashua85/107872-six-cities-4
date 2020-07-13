import {SET_ACTIVE_OFFER} from '../../action-types/action-types';

function activeOfferReducer(state = null, action) {
  switch (action.type) {
    case SET_ACTIVE_OFFER: {
      return action.offer;
    }
    default: {
      return state;
    }
  }
}


export default activeOfferReducer;
