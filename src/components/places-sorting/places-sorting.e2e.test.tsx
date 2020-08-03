import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PlacesSorting} from './places-sorting';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`PlacesSorting`, () => {
  test(`When user clickes on option "Popular", it should called onOptionClick from props whith argument "Popular"`, () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
        <PlacesSorting
          onOptionClick={mockFunction}
          isOptionsVisible={true}
          activeOption={`Price: low to high`}
          options={[`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`]}
          toggleVisibility={() => {}}
        />
    );
    wrapper
      .find(`.places__option`)
      .at(0)
      .props()
      .onClick({} as any);
    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith(`Popular`);
  });

  test(`When user clickes on option "Price: low to high", it should called onOptionClick from props whith argument "Price: low to high"`, () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
        <PlacesSorting
          onOptionClick={mockFunction}
          isOptionsVisible={true}
          activeOption={`Popular`}
          options={[`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`]}
          toggleVisibility={() => {}}
        />
    );
    wrapper
      .find(`.places__option`)
      .at(1)
      .props()
      .onClick({} as any);
    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith(`Price: low to high`);
  });

  test(`When user clickes on option "Price: high to low", it should called onOptionClick from props whith argument "Price: high to low"`, () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
        <PlacesSorting
          onOptionClick={mockFunction}
          isOptionsVisible={true}
          activeOption={`Popular`}
          options={[`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`]}
          toggleVisibility={() => {}}
        />
    );
    wrapper
      .find(`.places__option`)
      .at(2)
      .simulate(`click`);
    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith(`Price: high to low`);
  });

  test(`When user clickes on option "Top rated first", it should called onOptionClick from props whith argument "Top rated first"`, () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
        <PlacesSorting
          onOptionClick={mockFunction}
          isOptionsVisible={true}
          activeOption={`Popular`}
          options={[`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`]}
          toggleVisibility={() => {}}
        />
    );
    wrapper
      .find(`.places__option`)
      .at(3)
      .simulate(`click`);
    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith(`Top rated first`);
  });
});
