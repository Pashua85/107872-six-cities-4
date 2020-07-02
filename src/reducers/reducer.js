import cities from '../mock/cities';
import cityReducer from './cityReducer/cityReducer';
import placesReducer from './placesReducer/placesReducer';

function reducer(state, action) {
  return {
    city: cityReducer(state.city, action),
    places: placesReducer(state.places, action),
    cityNames: state.cityNames
  };
}

const cityNames = cities.map((c) => c.cityName);

const initialState = {
  city: `Amsterdam`,
  places: cities[3].places,
  cityNames
};

export {
  reducer,
  initialState
};

