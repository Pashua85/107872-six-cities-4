import cityReducer from './cityReducer';

describe(`cityReducer`, () => {
  test(`When it is called with "London" as state and object { type: "CHANGE_CITY", city: "Berlin" } as action, it should return "Berlin"`, () => {
    const result = cityReducer(`London`, {
      type: `CHANGE_CITY`,
      city: `Berlin`
    });
    expect(result).toBe(`Berlin`);
  });

  test(`When it is called with "London" as state and object { type: "CHANGE_TOWN", city: "Berlin" } as action, it should return "London"`, () => {
    const result = cityReducer(`London`, {
      type: `CHANGE_TOWN`,
      city: `Berlin`
    });
    expect(result).toBe(`London`);
  });
});
