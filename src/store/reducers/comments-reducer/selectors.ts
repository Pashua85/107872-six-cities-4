import NameSpace from '../name-space';
import {IStore, IReview} from '../../../types/types';

export const getComments = (state: IStore): IReview[] => {
  return state[NameSpace.COMMENTS];
};
