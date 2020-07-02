import {GET_PLACES} from '../../actions';
import cities from '../../mock/cities';

function placesReducer(state, action) {
  switch (action.type) {
    case GET_PLACES: {
      const cityIndex = cities.findIndex(
          (c) => c.cityName === action.city
      );
      return cities[cityIndex].places;
    }
    default: {
      return state;
    }
  }
}

export default placesReducer;
