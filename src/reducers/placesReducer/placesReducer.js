import {GET_PLACES} from '../../actions/actions';

function placesReducer(wholeState, action) {
  switch (action.type) {
    case GET_PLACES: {
      const cityIndex = wholeState.cities.findIndex(
          (c) => c.cityName === action.city
      );
      return wholeState.cities[cityIndex].places;
    }
    default: {
      return wholeState.places;
    }
  }
}

export default placesReducer;
