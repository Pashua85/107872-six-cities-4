import cities from '../../../mock/test-cities';
import citiesReducer from './cities-reducer';

describe(`citiesReducer`, () => {
  it(`should return first argumet`, () => {
    const result = citiesReducer(cities);
    expect(result).toEqual(cities);
  });
});
