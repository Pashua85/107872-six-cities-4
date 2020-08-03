import NameSpace from '../name-space';
import {createOffer} from '../../../adapters/offer';
import {IStore, IOffer, IPlace} from '../../../types/types';

export const getOffersNearby = (state: IStore): IPlace[] => {
  const offers = state[NameSpace.OFFERS_NEARBY];
  const adaptedOffers = offers.map((of: IOffer): IPlace => createOffer(of));
  return adaptedOffers;
};
