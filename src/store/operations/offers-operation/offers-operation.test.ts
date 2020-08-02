import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../api';
import OffersOperation from './offers-operation';
import {LOAD_OFFERS, LOAD_OFFERS_NEARBY, REPLACE_OFFER} from '../../action-types/action-types';
import offers from '../../../mock/test-places';

const api = createAPI(() => {});

describe(`OffersOperation`, () => {
  it(`should make a correct get request to /hotels`, () => {
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

  it(`should make a correct get request to /hotels/:id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersNearbyLoader = OffersOperation.loadOffersNearby(`1`);

    apiMock
      .onGet(`/hotels/1/nearby`)
      .reply(200, offers);

    return offersNearbyLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: LOAD_OFFERS_NEARBY,
          offers
        });
      });
  });

  it(`should make a correct post request to /favorite/:id/1`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const toFavoriteAdder = OffersOperation.addToFavorite(`1`);

    apiMock
      .onPost(`/favorite/1/1`)
      .reply(200, offers[0]);

    return toFavoriteAdder(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: REPLACE_OFFER,
          offer: offers[0]
        });
      });
  });

  it(`should make a correct post request to /favorite/:id/0`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fromFavoriteDeleter = OffersOperation.deleteFromFavorite(`1`);

    apiMock
      .onPost(`/favorite/1/0`)
      .reply(200, offers[0]);

    return fromFavoriteDeleter(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: REPLACE_OFFER,
          offer: offers[0]
        });
      });
  });
});
