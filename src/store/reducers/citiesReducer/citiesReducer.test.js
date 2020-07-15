import cities from '../../../mock/test-cities';
import citiesReducer from './citiesReducer';

describe(`citiesReducer`, () => {
  it(`should return first argumet`, () => {
    const result = citiesReducer(cities, {type: `SOME_ACTION`, cities: []});
    expect(result).toEqual(cities);
  });
});
