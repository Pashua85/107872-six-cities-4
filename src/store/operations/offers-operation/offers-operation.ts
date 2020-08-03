import ActionCreator from '../../action-creator/action-creator';
import {IOffer} from '../../../types/types';
import {AppActionTypes} from '../../action-types/action-types';
import {AxiosInstance} from 'axios';

interface IOffersResponse {
  data: IOffer[]
}

interface IFavoriteOfferResponse {
  data: IOffer
}

const OffersOperation = {
  loadOffers: () => (dispatch: (action: AppActionTypes) => void, getState: () => void, api: AxiosInstance): Promise<void> => {
    return api.get(`/hotels`)
      .then((response: IOffersResponse) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  },
  loadOffersNearby: (id: string) => (dispatch: (action: AppActionTypes) => void, getState: () => void, api: AxiosInstance): Promise<void> => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response: IOffersResponse) => {
        dispatch(ActionCreator.loadOffersNearby(response.data));
      });
  },
  addToFavorite: (id: string) => (dispatch: (action: AppActionTypes) => void, getState: () => void, api: AxiosInstance): Promise<void> => {
    return api.post(`/favorite/${id}/1`)
      .then((response: IFavoriteOfferResponse) => {
        dispatch(ActionCreator.replaceOffer(response.data));
      });
  },
  deleteFromFavorite: (id: string) => (dispatch: (action: AppActionTypes) => void, getState: () => void, api: AxiosInstance): Promise<void> => {
    return api.post(`/favorite/${id}/0`)
      .then((response: IFavoriteOfferResponse) => {
        dispatch(ActionCreator.replaceOffer(response.data));
      });
  },
  loadFavoriteOffers: () => (dispatch: (action: AppActionTypes) => void, getState: () => void, api: AxiosInstance): Promise<void> => {
    return api.get(`/favorite`)
      .then((response: IOffersResponse) => {
        dispatch(ActionCreator.loadFavoriteOffers(response.data));
      });
  }
};

export default OffersOperation;
