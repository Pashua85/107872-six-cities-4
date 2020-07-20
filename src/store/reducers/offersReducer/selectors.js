import {createSelector} from 'reselect';
import NameSpace from '../name-space';
import {getCurrentCity} from '../currentCityReducer/selectors';
import {getSortingOption} from '../sortingOptionReducer/selectors';
import {createOffer} from '../../../adapters/offer';

const getOffers = (state) => {
  return state[NameSpace.OFFERS];
};

export const getCityOffers = createSelector(
    getOffers,
    getCurrentCity,
    (offers, city) => {
      const cityOffers = offers.filter((of) => {
        return of.city.name === city.name;
      });
      return cityOffers.map((of) => createOffer(of));
    }
);

export const getOfferByParamsId = (state, id) => {
  const offers = getOffers(state);
  const offer = offers.find((of) => {
    return of.id === parseInt(id, 10);
  });
  return createOffer(offer);
};

export const getSortedCityOffers = createSelector(
    getSortingOption,
    getCityOffers,
    (option, offers) => {
      switch (option) {
        case `Popular`: {
          return offers;
        }
        case `Price: low to high`: {
          return offers.sort((of1, of2) => {
            return of1.price - of2.price;
          });
        }
        case `Price: high to low`: {
          return offers.sort((of1, of2) => {
            return of2.price - of1.price;
          });
        }
        case `Top rated first`: {
          return offers.sort((of1, of2) => {
            return of2.rating - of1.rating;
          });
        }
        default: {
          return offers;
        }
      }
    }
);

