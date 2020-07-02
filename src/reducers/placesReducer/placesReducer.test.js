import placesReducer from './placesReducer';
import cities from '../../mock/cities';
import testCities from '../../mock/test-cities';

describe(`placesReducer`, () => {
  test(`When it is called with places for Moscow as state and object { type: "GET_PLACES", city: "Amsterdam" }, it should return places for Amsterdam`, () => {
    const moscowPlaces = testCities[1].places;
    const amsterdamPlaces = cities[3].places;
    const result = placesReducer(moscowPlaces, {
      type: `GET_PLACES`,
      city: `Amsterdam`
    });
    expect(result).toEqual(amsterdamPlaces);
  });

  test(`When it is called with places for Moscow as state and object { type: "GET_ITEMS", city: "Amsterdam" }, it should return places for Moscow`, () => {
    const moscowPlaces = testCities[1].places;
    const result = placesReducer(moscowPlaces, {
      type: `GET_ITEMS`,
      city: `Amsterdam`
    });
    expect(result).toEqual(moscowPlaces);
  });
});
