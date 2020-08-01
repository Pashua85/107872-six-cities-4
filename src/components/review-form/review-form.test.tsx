import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ReviewForm} from './review-form';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`ReviewForm`, () => {
  it(`should render correctly`, () => {
    const routeComponentPropsMock = {
      history: {} as any,
      location: {} as any,
      match: {} as any,
    }

    const wrapper = shallow(
        <ReviewForm
          {...routeComponentPropsMock}
          commentText=""
          disabled={true}
          onCommentTextChange={() => {}}
          onRatingChange={() => {}}
          onFormSubmit={() => {}}
          radioButtons={[]}
          errorMessage=""
        />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
