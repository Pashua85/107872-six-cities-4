import {CHANGE_CITY, GET_PLACES, SET_ACTIVE_PLACE} from '../actions/actions';

const changeCityAction = (city) => ({
  type: CHANGE_CITY,
  city
});

const getPlacesAction = (city) => ({
  type: GET_PLACES,
  city
});

const setActivePlaceAction = (place) => ({
  type: SET_ACTIVE_PLACE,
  place
});

export {
  changeCityAction,
  getPlacesAction,
  setActivePlaceAction
};
