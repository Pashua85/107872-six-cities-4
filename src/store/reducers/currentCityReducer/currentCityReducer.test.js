import currentCityReducer from './currentCityReducer';

describe(`currentCityReducer`, () => {
  test(`When it is called with "London" as state and object { type: "SET_CURRENT_CITY", city: "Berlin" } as action, it should return "Berlin"`, () => {
    const result = currentCityReducer(`London`, {
      type: `SET_CURRENT_CITY`,
      city: `Berlin`
    });
    expect(result).toBe(`Berlin`);
  });

  test(`When it is called with "London" as state and object { type: "SET_CURRENT_TOWN", city: "Berlin" } as action, it should return "London"`, () => {
    const result = currentCityReducer(`London`, {
      type: `SET_CURRENT_TOWN`,
      city: `Berlin`
    });
    expect(result).toBe(`London`);
  });
});
