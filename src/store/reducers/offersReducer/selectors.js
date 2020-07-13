import {createSelector} from 'reselect';
import NameSpace from '../name-space';
import {getCurrentCity} from '../currentCityReducer/selectors';
import {createOffer} from '../../../adapters/offer';

const getOffers = (state) => {
  return state[NameSpace.OFFERS];
};

export const getCityOffers = createSelector(
    getOffers,
    getCurrentCity,
    (offers, city) => {
      const offersCopy = offers.slice();
      offersCopy.filter((of) => {
        return of.city.name === city;
      });
      return offersCopy.map((of) => createOffer(of));
    }
);


