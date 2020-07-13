import currentCityReducer from './currentCityReducer/currentCityReducer';
import activeOfferReducer from './activeOfferReducer/activeOfferReducer';
import sortingOptionReducer from './sortingOptionReducer/sortingOptionReducer';
import offersReducer from './offersReducer/offersReducer';
import offers from '../../mock/offers';

function reducer(state, action) {
  return {
    offers: offersReducer(state.offers, action),
    currentCity: currentCityReducer(state.currentCity, action),
    cities: state.cities,
    activeOffer: activeOfferReducer(state.activeOffer, action),
    sortingOption: sortingOptionReducer(state.sortingOption, action)
  };
}

const initialState = {
  offers,
  currentCity: `Amsterdam`,
  cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  activeOffer: null,
  sortingOption: `Popular`
};

export {
  reducer,
  initialState
};

