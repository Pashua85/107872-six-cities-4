import NameSpace from '../store/reducers/name-space';
import {IPlace} from './place';
import {ICity} from './city';
import {IOffer} from './offer';
import {IUser} from './user';
import {IReview} from './review';

export interface IStore {
  ACTIVE_OFFER: null | IPlace,
  CITIES: ICity[],
  CURRENT_CITY: ICity,
  OFFERS: IOffer[],
  SORTING_OPTION: `Popular` | `Price: low to high` | `Price: high to low` | `Top rated first`,
  AUTH_STATUS: `AUTH` | `NO_AUTH`,
  USER: null | IUser,
  OFFERS_NEARBY: IOffer[],
  COMMENTS: IReview[],
  SENDING_COMMENT: boolean,
  COMMENT_ERROR: object,
  FAVORITE_OFFERS: IOffer[]
}