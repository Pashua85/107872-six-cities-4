import {IOffer, ICity, IPlace, ActiveOption, Status, IUser, IReview} from '../../types/types';

const SET_CURRENT_CITY = `SET_CURRENT_CITY`;
const SET_ACTIVE_OFFER = `SET_ACTIVE_OFFER`;
const SET_SORTING_OPTION = `SET_SORTING_OPTION`;
const LOAD_OFFERS = `LOAD_OFFERS`;
const REQUIRE_AUTHORIZATION = `REQUIRE_AUTHORIZATION`;
const SET_USER = `SET_USER`;
const LOAD_OFFERS_NEARBY = `LOAD_OFFERS_NEARBY`;
const LOAD_COMMENTS = `LOAD_COMMENTS`;
const SET_SENDING_COMMENT = `SET_SENDING_COMMENT`;
const SET_COMMENT_ERROR = `SET_COMMENT_ERROR`;
const REPLACE_OFFER = `PEPLACE_OFFER`;
const LOAD_FAVORITE_OFFERS = `LOAD-FAVORITE-OFFERS`;
const DELETE_OFFERS_NEARBY = `DELETE_OFFERS_NEARBY`;
const DELETE_COMMENTS = `DELETE_COMMENTS`;

interface ILoadOffers {
  type: typeof LOAD_OFFERS,
  payload: IOffer[]
}

interface ISetCurrentCity {
  type: typeof SET_CURRENT_CITY,
  city: ICity
}

interface ISetActiveOffer {
  type: typeof SET_ACTIVE_OFFER,
  offer: null | IPlace
}

interface ISetSortingOption {
  type: typeof SET_SORTING_OPTION,
  option: ActiveOption
}

interface IRequireAuthorization {
  type: typeof REQUIRE_AUTHORIZATION,
  payload: Status
}

interface ISetUser {
  type: typeof SET_USER,
  user: null | IUser
}

interface ILoadOffersNearby {
  type: typeof LOAD_OFFERS_NEARBY,
  offers: IOffer[]
}

interface ILoadComments {
  type: typeof LOAD_COMMENTS,
  comments: IReview[]
}

interface ISetSendingComment {
  type: typeof SET_SENDING_COMMENT,
  isSending: boolean
}

interface ISetCommentError {
  type: typeof SET_COMMENT_ERROR,
  error: null | object
}

interface IReplaceOffer {
  type: typeof REPLACE_OFFER,
  offer: IOffer
}

interface ILoadFavoriteOffer {
  type: typeof LOAD_FAVORITE_OFFERS,
  offers: IOffer[]
}

interface IDeleteOffersNearby {
  type: typeof DELETE_OFFERS_NEARBY
}

interface IDeleteComments {
  type: typeof DELETE_COMMENTS
}

type AppActionTypes = ILoadOffers | ISetCurrentCity | ISetActiveOffer | ISetSortingOption | IRequireAuthorization | ISetUser | ILoadOffersNearby
  | ILoadComments | ISetSendingComment | ISetCommentError | IReplaceOffer | ILoadFavoriteOffer | IDeleteOffersNearby | IDeleteComments;

export {
  AppActionTypes,
  SET_CURRENT_CITY,
  SET_ACTIVE_OFFER,
  SET_SORTING_OPTION,
  LOAD_OFFERS,
  REQUIRE_AUTHORIZATION,
  SET_USER,
  LOAD_OFFERS_NEARBY,
  LOAD_COMMENTS,
  SET_SENDING_COMMENT,
  SET_COMMENT_ERROR,
  REPLACE_OFFER,
  LOAD_FAVORITE_OFFERS,
  DELETE_OFFERS_NEARBY,
  DELETE_COMMENTS
};

