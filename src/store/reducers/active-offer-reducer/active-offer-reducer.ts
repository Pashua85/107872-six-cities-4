import {SET_ACTIVE_OFFER, AppActionTypes} from '../../action-types/action-types';
import {IPlace} from '../../../types/types'

function activeOfferReducer(state: null | IPlace  = null, action: AppActionTypes) {
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
