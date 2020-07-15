import currentCityReducer from './currentCityReducer';
import cities from '../../../mock/cities';

describe(`currentCityReducer`, () => {
  const city0 = cities[0];
  const city1 = cities[1];

  test(`When it is called with city-0-object as state and object { type: "SET_CURRENT_CITY", city: city-1-object } as action, it should return city-1-object`, () => {
    const result = currentCityReducer(city0, {
      type: `SET_CURRENT_CITY`,
      city: city1
    });
    expect(result).toEqual(city1);
  });

  test(`When it is called with "London" as state and object { type: "SET_CURRENT_TOWN", city: city-1-object } as action, it should return city-0-object`, () => {
    const result = currentCityReducer(city0, {
      type: `SET_CURRENT_TOWN`,
      city: city1
    });
    expect(result).toEqual(city0);
  });
});
