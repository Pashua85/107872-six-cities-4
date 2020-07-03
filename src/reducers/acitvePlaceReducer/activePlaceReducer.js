import {SET_ACTIVE_PLACE} from '../../actions/actions';

function activePlaceReducer(state, action) {
  switch (action.type) {
    case SET_ACTIVE_PLACE: {
      return action.place;
    }
    default: {
      return state;
    }
  }
}


export default activePlaceReducer;
