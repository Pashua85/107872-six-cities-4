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
  LOAD_FAVORITE_OFFERS
} from '../action-types/action-types';

const ActionCreator = {
  loadOffers: (offers) => ({
    type: LOAD_OFFERS,
    payload: offers
  }),
  setCurrentCity: (city) => ({
    type: SET_CURRENT_CITY,
    city
  }),
  setActiveOffer: (offer) => ({
    type: SET_ACTIVE_OFFER,
    offer
  }),
  setSortingOption: (option) => ({
    type: SET_SORTING_OPTION,
    option
  }),
  requireAuthorization: (status) => ({
    type: REQUIRE_AUTHORIZATION,
    payload: status
  }),
  setUser: (user) => ({
    type: SET_USER,
    user
  }),
  loadOffersNearby: (offers) => ({
    type: LOAD_OFFERS_NEARBY,
    offers
  }),
  loadComments: (comments) => ({
    type: LOAD_COMMENTS,
    comments
  }),
  setSendingComment: (isSending) => ({
    type: SET_SENDING_COMMENT,
    isSending
  }),
  setCommentError: (error) => ({
    type: SET_COMMENT_ERROR,
    error
  }),
  replaceOffer: (offer) => ({
    type: REPLACE_OFFER,
    offer
  }),
  loadFavoriteOffers: (offers) => ({
    type: LOAD_FAVORITE_OFFERS,
    offers
  })
};

export default ActionCreator;
