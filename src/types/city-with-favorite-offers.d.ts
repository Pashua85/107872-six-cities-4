import {IPlace} from './place';
import {ICity} from './city';

export interface ICityWithFavoriteOffers {
  city: ICity,
  offers: IPlace[]
} 