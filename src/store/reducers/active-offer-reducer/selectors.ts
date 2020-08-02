import NameSpace from '../name-space';
import {IStore} from '../../../types/types';

export const getActiveOffer = (state: IStore) => {
  return state[NameSpace.ACTIVE_OFFER];
};
