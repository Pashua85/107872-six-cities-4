import ActionCreator from '../../action-creator/action-creator';

const OffersOperation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  },
  loadOffersNearby: (id) =>(dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        dispatch(ActionCreator.loadOffersNearby(response.data));
      });
  },
  addToFavorite: (id) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/1`)
      .then((response) => {
        dispatch(ActionCreator.replaceOffer(response.data));
      });
  },
  deleteFromFavorite: (id) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/0`)
      .then((response) => {
        dispatch(ActionCreator.replaceOffer(response.data));
      });
  }
};

export default OffersOperation;
