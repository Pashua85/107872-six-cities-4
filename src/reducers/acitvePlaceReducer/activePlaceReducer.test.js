import activePlaceReducer from './activePlaceReducer';
import offers from '../../mock/test-offers';

describe(`activePlaceReducer`, () => {
  test(`When it is called with place-1-object as state and object { type: "SET_ACTIVE_PLACE, place: place-2-object }, it should return place-2-object`, () => {
    const place1 = offers[0];
    const place2 = offers[1];
    const result = activePlaceReducer(place1, {
      type: `SET_ACTIVE_PLACE`,
      place: place2
    });
    expect(result).toEqual(place2);
  });

  test(`When it is called with place-1-object as state and object { type: "SET_SOME_PLACE, place: place-2-object }, it should return place-1-object`, () => {
    const place1 = offers[0];
    const place2 = offers[1];
    const result = activePlaceReducer(place1, {
      type: `SET_SOME_PLACE`,
      place: place2
    });
    expect(result).toEqual(place1);
  });
});
