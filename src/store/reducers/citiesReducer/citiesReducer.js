import {LOAD_OFFERS} from '../../action-types/action-types';

let tmpArray = [];
function checkOffer(offer) {
  if (tmpArray.find((of) => of.city.name === offer.city.name) === undefined) {
    tmpArray.push(offer);
    return true;
  }
  return false;
}

function citiesReducer(state = [], action) {
  switch (action.type) {
    case LOAD_OFFERS: {
      const offersWithUniqueCity = action.payload.filter((offer) => checkOffer(offer));
      return offersWithUniqueCity.map((of) => of.city);
    }
  }
  return state;
}

export default citiesReducer;
