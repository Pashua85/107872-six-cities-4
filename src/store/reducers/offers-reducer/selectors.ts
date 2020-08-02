import {createSelector} from 'reselect';
import NameSpace from '../name-space';
import {getCurrentCity} from '../current-city-reducer/selectors';
import {getSortingOption} from '../sortingOptionReducer/selectors';
import {createOffer} from '../../../adapters/offer';
import {IStore, IOffer, IPlace} from '../../../types/types';

const getOffers = (state: IStore) => {
  return state[NameSpace.OFFERS];
};

export const getCityOffers = createSelector(
    getOffers,
    getCurrentCity,
    (offers, city) => {
      const cityOffers = offers.filter((of: IOffer) => {
        return of.city.name === city.name;
      });
      return cityOffers.map((of: IOffer): IPlace => createOffer(of));
    }
);

export const getOfferByParamsId = (state: IStore, id: string) => {
  const offers = getOffers(state);
  if (offers.length === 0) {
    return null;
  }
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
          return offers.sort((of1: IPlace, of2: IPlace) => {
            return of1.price - of2.price;
          });
        }
        case `Price: high to low`: {
          return offers.sort((of1: IPlace, of2: IPlace) => {
            return of2.price - of1.price;
          });
        }
        case `Top rated first`: {
          return offers.sort((of1: IPlace, of2: IPlace) => {
            return of2.rating - of1.rating;
          });
        }
        default: {
          return offers;
        }
      }
    }
);

