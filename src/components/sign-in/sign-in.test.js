import React from 'react';
import {SignIn} from './sign-in';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`SignIn`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <SignIn
          email={`some@email.ru`}
          password={`1233`}
          onEmailChange={() => {}}
          onPasswordChange={() => {}}
          onSignInClick={() => {}}
        />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
