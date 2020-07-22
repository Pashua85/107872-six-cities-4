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
  if (state[NameSpace.FAVORITE_OFFERS].length === 0) {
    return state[NameSpace.FAVORITE_OFFERS];
  }
  const offersWithUniqueCity = state[NameSpace.FAVORITE_OFFERS].filter((offer) => checkOffer(offer));
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

