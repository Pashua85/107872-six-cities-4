import offers from '../../../mock/offers';
import LOAD_OFFERS from '../../../store/action-types/action-types';

function offersReducer(state = offers, action) {
  switch (action.type) {
    case LOAD_OFFERS: {
      return action.payload;
    }
  }
  return state;
}

export default offersReducer;
