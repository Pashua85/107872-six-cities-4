import placesReducer from './placesReducer';
import cities from '../../mock/test-cities';

const state = {
  city: `Berlin`,
  places: cities[0].places,
  cities
};

describe(`placesReducer`, () => {
  test(`When it is called with places for Berlin in state and object { type: "GET_PLACES", city: "Moscow" }, it should return places for Moscow`, () => {
    const moscowPlaces = cities[1].places;
    const result = placesReducer(state, {
      type: `GET_PLACES`,
      city: `Moscow`
    });
    expect(result).toEqual(moscowPlaces);
  });

  test(`When it is called with places for Berlin in state and object { type: "GET_ITEMS", city: "Moscow" }, it should return places for Berlin`, () => {
    const berlinPlaces = cities[0].places;
    const result = placesReducer(state, {
      type: `GET_ITEMS`,
      city: `Moscow`
    });
    expect(result).toEqual(berlinPlaces);
  });
});
