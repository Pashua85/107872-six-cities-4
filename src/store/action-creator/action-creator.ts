import {
  SET_CURRENT_CITY,
  SET_ACTIVE_OFFER,
  SET_SORTING_OPTION,
  LOAD_OFFERS,
  REQUIRE_AUTHORIZATION,
  SET_USER,
  LOAD_OFFERS_NEARBY,
  LOAD_COMMENTS,
  SET_SENDING_COMMENT,
  SET_COMMENT_ERROR,
  REPLACE_OFFER,
  LOAD_FAVORITE_OFFERS,
  DELETE_OFFERS_NEARBY,
  DELETE_COMMENTS,
  AppActionTypes
} from '../action-types/action-types';
import {IOffer, ICity, IPlace, SortingOption, Status, IUser, IReview} from '../../types/types';

const ActionCreator = {
  loadOffers: (offers: IOffer[]): AppActionTypes => ({
    type: LOAD_OFFERS,
    payload: offers
  }),
  setCurrentCity: (city: ICity): AppActionTypes => ({
    type: SET_CURRENT_CITY,
    city
  }),
  setActiveOffer: (offer: null | IPlace): AppActionTypes => ({
    type: SET_ACTIVE_OFFER,
    offer
  }),
  setSortingOption: (option: SortingOption): AppActionTypes => ({
    type: SET_SORTING_OPTION,
    option
  }),
  requireAuthorization: (status: Status): AppActionTypes => ({
    type: REQUIRE_AUTHORIZATION,
    payload: status
  }),
  setUser: (user: IUser): AppActionTypes => ({
    type: SET_USER,
    user
  }),
  loadOffersNearby: (offers: IOffer[]): AppActionTypes => ({
    type: LOAD_OFFERS_NEARBY,
    offers
  }),
  loadComments: (comments: IReview[]): AppActionTypes => ({
    type: LOAD_COMMENTS,
    comments
  }),
  setSendingComment: (isSending: boolean): AppActionTypes => ({
    type: SET_SENDING_COMMENT,
    isSending
  }),
  setCommentError: (error: null | Record<string, unknown>): AppActionTypes => ({
    type: SET_COMMENT_ERROR,
    error
  }),
  replaceOffer: (offer: IOffer): AppActionTypes => ({
    type: REPLACE_OFFER,
    offer
  }),
  loadFavoriteOffers: (offers: IOffer[]): AppActionTypes => ({
    type: LOAD_FAVORITE_OFFERS,
    offers
  }),
  deleteOffersNearby: (): AppActionTypes => ({
    type: DELETE_OFFERS_NEARBY
  }),
  deleteComments: (): AppActionTypes => ({
    type: DELETE_COMMENTS
  })
};

export default ActionCreator;
