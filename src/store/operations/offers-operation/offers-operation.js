import ActionCreator from '../../action-creator/action-creator';

const OffersOperation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  }
};

export default OffersOperation;
