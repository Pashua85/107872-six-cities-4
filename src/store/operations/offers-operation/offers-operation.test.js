import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../api';
import OffersOperation from './offers-operation';
import {LOAD_OFFERS} from '../../action-types/action-types';
import offers from '../../../mock/test-offers';

const api = createAPI(() => {});

describe(`OffersOperation`, () => {
  it(`should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = OffersOperation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, offers);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: LOAD_OFFERS,
          payload: offers
        });
      });
  });

});
