import NameSpace from '../name-space';
import {createOffer} from '../../../adapters/offer';
import {IOffer, IStore, ICityWithFavoriteOffers} from '../../../types/types';

let tmpArray = [];
function checkOffer(offer: IOffer) {
  if (tmpArray.find((of) => of.city.name === offer.city.name) === undefined) {
    tmpArray.push(offer);
    return true;
  }
  return false;
}

export const getCitiesWithFavoriteOffers = (state: IStore): ICityWithFavoriteOffers => {
  const offersWithUniqueCity = state[NameSpace.FAVORITE_OFFERS].filter((offer: IOffer) => checkOffer(offer));
  tmpArray = [];
  const sortedCitiesList = offersWithUniqueCity.map((of: IOffer) => of.city.name).sort();
  const citiesWiFavoritesOffers = sortedCitiesList.map((city: string) => {
    const cityOffers = state[NameSpace.FAVORITE_OFFERS].filter((of: IOffer) => of.city.name === city);
    return {
      city,
      offers: cityOffers.map((of: IOffer) => createOffer(of))
    };
  });
  return citiesWiFavoritesOffers;
};

