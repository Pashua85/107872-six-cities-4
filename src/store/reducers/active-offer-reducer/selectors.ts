import NameSpace from '../name-space';
import {IStore, IPlace} from '../../../types/types';

export const getActiveOffer = (state: IStore): null | IPlace => {
  return state[NameSpace.ACTIVE_OFFER];
};
