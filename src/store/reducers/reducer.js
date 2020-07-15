import {combineReducers} from 'redux';
import currentCityReducer from './currentCityReducer/currentCityReducer';
import activeOfferReducer from './activeOfferReducer/activeOfferReducer';
import sortingOptionReducer from './sortingOptionReducer/sortingOptionReducer';
import citiesReducer from './citiesReducer/citiesReducer';
import offersReducer from './offersReducer/offersReducer';
import authStatusReducer from './authStatusReducer/authStatusReducer';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.ACTIVE_OFFER]: activeOfferReducer,
  [NameSpace.CITIES]: citiesReducer,
  [NameSpace.CURRENT_CITY]: currentCityReducer,
  [NameSpace.OFFERS]: offersReducer,
  [NameSpace.SORTING_OPTION]: sortingOptionReducer,
  [NameSpace.AUTH_STATUS]: authStatusReducer
});


