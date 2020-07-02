import cities from '../mock/cities';
import cityReducer from './cityReducer/cityReducer';
import placesReducer from './placesReducer/placesReducer';

function reducer(state, action) {
  return {
    city: cityReducer(state.city, action),
    places: placesReducer(state, action),
    cities: state.cities,
  };
}

const initialState = {
  city: `Amsterdam`,
  places: cities[3].places,
  cities
};

export {
  reducer,
  initialState
};

