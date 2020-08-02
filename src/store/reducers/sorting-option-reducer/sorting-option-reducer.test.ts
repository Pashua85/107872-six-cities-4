import {SET_SORTING_OPTION} from '../../action-types/action-types';
import sortingOptionReducer from './sorting-option-reducer';

describe(`sortingOptionReucer`, () => {
  test(`When it is called with "Popular" as state and object {type: ${SET_SORTING_OPTION}, option: "Top rated first"}, it should return "Top rated first"`, () => {
    const result = sortingOptionReducer(`Popular`, {
      type: SET_SORTING_OPTION,
      option: `Top rated first`
    });
    expect(result).toBe(`Top rated first`);
  });
});
