import {combineReducers} from 'redux';
import cities from '../mock/cities';
import cityReducer from './cityReducer/cityReducer';
import placesReducer from './placesReducer/placesReducer';

const reducer = combineReducers({
  city: cityReducer,
  places: placesReducer
});

const cityNames = cities.map((c) => c.cityName);

const initialState = {
  city: `Amsterdam`,
  places: cities[2].places,
  cityNames
};

export {
  reducer,
  initialState
};

