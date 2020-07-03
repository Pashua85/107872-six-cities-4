import cities from '../mock/cities';
import cityReducer from './cityReducer/cityReducer';
import placesReducer from './placesReducer/placesReducer';
import activePlaceReducer from './acitvePlaceReducer/activePlaceReducer';

function reducer(state, action) {
  return {
    city: cityReducer(state.city, action),
    places: placesReducer(state, action),
    cities: state.cities,
    activePlace: activePlaceReducer(state.activePlace, action)
  };
}

const initialState = {
  city: `Amsterdam`,
  places: cities[3].places,
  cities,
  activePlace: null
};

export {
  reducer,
  initialState
};

