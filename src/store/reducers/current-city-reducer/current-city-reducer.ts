import {SET_CURRENT_CITY, AppActionTypes} from '../../action-types/action-types';
import {ICity} from '../../../types/types';

const initialState = {
  name: `Amsterdam`,
  location: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13
  }
};

function cityReducer(state: ICity = initialState, action: AppActionTypes): ICity {
  switch (action.type) {
    case SET_CURRENT_CITY: {
      return action.city;
    }
    default: {
      return state;
    }
  }
}

export default cityReducer;
