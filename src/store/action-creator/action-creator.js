import {
  SET_CURRENT_CITY,
  SET_ACTIVE_OFFER,
  SET_SORTING_OPTION,
  LOAD_OFFERS,
  REQUIRE_AUTHORIZATION
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
  })
};

export default ActionCreator;
