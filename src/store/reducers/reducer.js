import {combineReducers} from 'redux';
import currentCityReducer from './currentCityReducer/currentCityReducer';
import activeOfferReducer from './active-offer-reducer/active-offer-reducer';
import sortingOptionReducer from './sortingOptionReducer/sortingOptionReducer';
import citiesReducer from './citiesReducer/citiesReducer';
import offersReducer from './offersReducer/offersReducer';
import authStatusReducer from './auth-status-reducer/auth-status-reducer';
import userReducer from './userReducer/userReducer';
import offersNearbyReducer from './offers-nearby-reducer/offers-nearby-reducer';
import sendingCommentReducer from './sending-comment-reducer/sending-comment-reducer';
import commentErrorReducer from './comment-error-reducer/comment-error-reducer';
import NameSpace from './name-space';
import commentsReducer from './commentsReducer/commentsReducer';
import favoriteOffersReducer from './favorite-offers-reducer/favorite-offers-reducer';

export default combineReducers({
  [NameSpace.ACTIVE_OFFER]: activeOfferReducer,
  [NameSpace.CITIES]: citiesReducer,
  [NameSpace.CURRENT_CITY]: currentCityReducer,
  [NameSpace.OFFERS]: offersReducer,
  [NameSpace.SORTING_OPTION]: sortingOptionReducer,
  [NameSpace.AUTH_STATUS]: authStatusReducer,
  [NameSpace.USER]: userReducer,
  [NameSpace.OFFERS_NEARBY]: offersNearbyReducer,
  [NameSpace.COMMENTS]: commentsReducer,
  [NameSpace.SENDING_COMMENT]: sendingCommentReducer,
  [NameSpace.COMMENT_ERROR]: commentErrorReducer,
  [NameSpace.FAVORITE_OFFERS]: favoriteOffersReducer
});


