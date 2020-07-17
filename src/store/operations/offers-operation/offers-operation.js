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
  }
};

export default OffersOperation;
