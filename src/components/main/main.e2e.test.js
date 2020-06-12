import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Main`, () => {
  it(`should call onClickTitle when the title is clicked`, () => {
    const onTitleClickFn = jest.fn();
    const component = shallow(
        <Main places={[`Place one`, `Place two`]} placeAmount={34} onTitleClick={onTitleClickFn}/>
    );
    component
      .find(`h1`)
      .simulate(`click`);
    expect(onTitleClickFn).toHaveBeenCalled();
  });
});
