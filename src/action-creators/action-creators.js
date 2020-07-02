import {CHANGE_CITY, GET_PLACES} from '../actions/actions';

const changeCityAction = (city) => ({
  type: CHANGE_CITY,
  city
});

const getPlaces = (city) => ({
  type: GET_PLACES,
  city
});

export {
  changeCityAction,
  getPlaces
};
