import NameSpace from '../name-space';
import {createOffer} from '../../../adapters/offer';

let tmpArray = [];
function checkOffer(offer) {
  if (tmpArray.find((of) => of.city.name === offer.city.name) === undefined) {
    tmpArray.push(offer);
    return true;
  }
  return false;
}

export const getCitiesWithFavoriteOffers = (state) => {
  const offersWithUniqueCity = state[NameSpace.FAVORITE_OFFERS].filter((offer) => checkOffer(offer));
  tmpArray = [];
  const sortedCitiesList = offersWithUniqueCity.map((of) => of.city.name).sort();
  const citiesWiFavoritesOffers = sortedCitiesList.map((city) => {
    const cityOffers = state[NameSpace.FAVORITE_OFFERS].filter((of) => of.city.name === city);
    return {
      city,
      offers: cityOffers.map((of) => createOffer(of))
    };
  });
  return citiesWiFavoritesOffers;
};

