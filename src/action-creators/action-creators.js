import {
  CHANGE_CITY,
  GET_PLACES,
  SET_ACTIVE_PLACE,
  SORT_PLACES
} from '../actions/actions';

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

const sortPlacesAction = (option) => ({
  type: SORT_PLACES,
  option
});

export {
  changeCityAction,
  getPlacesAction,
  setActivePlaceAction,
  sortPlacesAction
};
