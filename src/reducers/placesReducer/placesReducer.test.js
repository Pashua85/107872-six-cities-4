import placesReducer from './placesReducer';
import cities from '../../mock/test-cities';

describe(`placesReducer`, () => {
  test(`When it is called with places for Berlin in state and object { type: "GET_PLACES", city: "Moscow" }, it should return places for Moscow`, () => {
    const state = {
      city: `Berlin`,
      places: cities[0].places,
      cities
    };
    const moscowPlaces = cities[1].places;
    const result = placesReducer(state, {
      type: `GET_PLACES`,
      city: `Moscow`
    });
    expect(result).toEqual(moscowPlaces);
  });

  test(`When it is called with places for Berlin in state and object { type: "GET_ITEMS", city: "Moscow" }, it should return places for Berlin`, () => {
    const state = {
      city: `Berlin`,
      places: cities[0].places,
      cities
    };
    const berlinPlaces = cities[0].places;
    const result = placesReducer(state, {
      type: `GET_ITEMS`,
      city: `Moscow`
    });
    expect(result).toEqual(berlinPlaces);
  });

  test(`When it is called with places sorted from originals in state and object { type: "SORT_PLACES", option: "Popular"}, it should return original places`, () => {
    const placesArray = cities[1].places.slice();
    placesArray.sort((p1, p2) => p2.price - p1.price);
    const state = {
      city: `Moscow`,
      places: placesArray,
      cities
    };
    const result = placesReducer(state, {
      type: `SORT_PLACES`,
      option: `Popular`
    });
    expect(result).toEqual(cities[1].places);
  });

  test(`When it is called with places [{price: 3}, {price: 1}, {price: 6}, {price: 4}] in state and object { type: "SORT_PLACES", option: "Price: low to high"},
    it should return places sorted by price [{price: 1}, {price: 3}, {price: 4}, {price: 6}]`, () => {
    const placesArray = [{price: 3}, {price: 1}, {price: 6}, {price: 4}];
    const sortedArray = [{price: 1}, {price: 3}, {price: 4}, {price: 6}];

    const state = {
      city: `Moscow`,
      places: placesArray,
      cities
    };
    const result = placesReducer(state, {
      type: `SORT_PLACES`,
      option: `Price: low to high`
    });
    expect(result).toEqual(sortedArray);
  });

  test(`When it is called with places [{price: 3}, {price: 1}, {price: 6}, {price: 4}] in state and object { type: "SORT_PLACES", option: "Price: high to low"},
  it should return places sorted by price [{price: 6}, {price: 4}, {price: 3}, {price: 1}]`, () => {
    const placesArray = [{price: 3}, {price: 1}, {price: 6}, {price: 4}];
    const sortedArray = [{price: 6}, {price: 4}, {price: 3}, {price: 1}];

    const state = {
      city: `Moscow`,
      places: placesArray,
      cities
    };
    const result = placesReducer(state, {
      type: `SORT_PLACES`,
      option: `Price: high to low`
    });
    expect(result).toEqual(sortedArray);
  });

  test(`When it is called with places [{rating: 3}, {rating: 2}, {rating: 5}, {rating: 4}] in state and object { type: "SORT_PLACES", option: "Top rated first"},
  it should return places sorted by rating [{rating: 5}, {rating: 4}, {rating: 3}, {rating: 2}]`, () => {
    const placesArray = [{rating: 3}, {rating: 2}, {rating: 5}, {rating: 4}];
    const sortedArray = [{rating: 5}, {rating: 4}, {rating: 3}, {rating: 2}];

    const state = {
      city: `Moscow`,
      places: placesArray,
      cities
    };
    const result = placesReducer(state, {
      type: `SORT_PLACES`,
      option: `Top rated first`
    });
    expect(result).toEqual(sortedArray);
  });
});
