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
  DELETE_COMMENTS
} from '../action-types/action-types';
import {IOffer, ICity, IPlace, ActiveOption, Status, IUser, IReview} from '../../types/types';

const ActionCreator = {
  loadOffers: (offers: IOffer[]) => ({
    type: LOAD_OFFERS,
    payload: offers
  }),
  setCurrentCity: (city: ICity) => ({
    type: SET_CURRENT_CITY,
    city
  }),
  setActiveOffer: (offer: IPlace) => ({
    type: SET_ACTIVE_OFFER,
    offer
  }),
  setSortingOption: (option: ActiveOption) => ({
    type: SET_SORTING_OPTION,
    option
  }),
  requireAuthorization: (status: Status) => ({
    type: REQUIRE_AUTHORIZATION,
    payload: status
  }),
  setUser: (user: IUser) => ({
    type: SET_USER,
    user
  }),
  loadOffersNearby: (offers: IOffer[]) => ({
    type: LOAD_OFFERS_NEARBY,
    offers
  }),
  loadComments: (comments: IReview[]) => ({
    type: LOAD_COMMENTS,
    comments
  }),
  setSendingComment: (isSending: boolean) => ({
    type: SET_SENDING_COMMENT,
    isSending
  }),
  setCommentError: (error: null | object) => ({
    type: SET_COMMENT_ERROR,
    error
  }),
  replaceOffer: (offer: IOffer) => ({
    type: REPLACE_OFFER,
    offer
  }),
  loadFavoriteOffers: (offers: IOffer[]) => ({
    type: LOAD_FAVORITE_OFFERS,
    offers
  }),
  deleteOffersNearby: () => ({
    type: DELETE_OFFERS_NEARBY
  }),
  deleteComments: () => ({
    type: DELETE_COMMENTS
  })
};

export default ActionCreator;
