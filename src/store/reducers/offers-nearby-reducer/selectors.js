import NameSpace from '../name-space';
import {createOffer} from '../../../adapters/offer';

export const getOffersNearby = (state) => {
  const offers = state[NameSpace.OFFERS_NEARBY];
  const adaptedOffers = offers.map((of) => createOffer(of));
  return adaptedOffers;
};
